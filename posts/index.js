import { randomUUID } from 'crypto';
import express from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const posts = {
    1: {
        title: 'Hello World',
    },
}
app.get('/posts', (req, res) => {
    res.send(posts);
});

app.post('/posts', (req, res) => {
    const id = randomUUID();
    const { title } = req.body;
    posts[id] = {
        id, title
    };

    res.status(201).send(posts[id]);
});

app.listen(4000, () => {
    console.log('Listening on 4000');
});