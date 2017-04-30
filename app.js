import express from 'express';

const app = express();

app.get('/books', (req, res) => {
    res.json([{
        id: 1,
        name: 'Default Book'
    }]);
});

export default app;