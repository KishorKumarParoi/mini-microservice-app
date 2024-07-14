import cors from 'cors';
import { randomBytes } from 'crypto';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

const commentsByPostId = {
    '123': [
        { id: '123', content: 'Nice post!' },
        { id: '456', content: 'Really enjoyed this. Thanks!' }
    ],
    '456': [
        { id: '789', content: 'Interesting. Thanks for sharing.' }
    ]
};

app.get('/posts/:id/comments', (req, res) => {
    res.send(commentsByPostId[req.params.id] || []);
});

app.post('/posts/:id/comments', (req, res) => {
    const commentId = randomBytes(4).toString('hex');
    const { content } = req.body;

    const comments = commentsByPostId[req.params.id] || [];

    comments.push({ id: commentId, content });

    commentsByPostId[req.params.id] = comments;

    res.status(201).send(comments);
});

app.listen(4001, () => {
    console.log('Listening on 4001');
});
