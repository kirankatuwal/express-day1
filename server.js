const express = require('express');

const PORT = 3000;

const app = express();

app.get('/', (req, res) => {
    res.send('Wow its working...with get method');
});

app.get('/test1', (req, res) => {
    res.send('Wow its working the endpoint /test1 ...with get method');
});
app.post('/test1', (req, res) => {
    console.log(`This is post method...not working for now`);
});

app.get('/test2', (req, res) => {
    res.send('Wow its the endpoint working test2 as well...with get method');
});

app.get('/test3', (req, res) => {
    res.send({
        id: 1,
        name: "kiran",
    })
});

app.listen(PORT, () => {
    console.log(`Listening on ...${PORT}...`);
});