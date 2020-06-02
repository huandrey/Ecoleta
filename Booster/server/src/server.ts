import express from 'express';

const App = express();

App.get('/', (req, res) => {
    res.json([
        "Huandrey",
        "João",
        "Marcos"
    ])
})

App.listen(3333);