import express from 'express';
import config from './config/config';
import datasource from './config/datasource';
import bodyParser from 'body-parser';

const app = express();
app.config = config;
app.datasource = datasource(app);
app.set('port', 7000);
app.use(bodyParser.json());

const Books = app.datasource.models.Books;

app.get('/books', (req, res) => {
    Books.findAll({})
        .then(result => res.json(result))
        .catch(err => res.status(412));
});

app.post('/books', (req, res) => {
    Books.create(req.body)
        .then(result => res.json(result))
        .catch(err => res.status(412));
});

app.get('/books/:id', (req, res) => {
    Books.findOne({where: req.params})
        .then(result => res.json(result))
        .catch(err => res.status(412));
});

app.put('/books/:id', (req, res) => {
    Books.update(req.body, {where: req.params})
        .then(result => res.json(result))
        .catch(err => res.status(412));
});

export default app;