import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const commentsByPostId = {
    1: [
        { id: '1', content: 'comment!' },
        { id: '2', content: 'comment2!' },
    ],
};

app.get('/', (req, res) => {
    res.status(200).send("hello world");
});

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = crypto.randomUUID();
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: commentId, content });
    commentsByPostId[req.params.id] = comments;
    res.status(201).send(comments);
});

app.listen(3000, () => {
    console.log('Listening on 3000');
});