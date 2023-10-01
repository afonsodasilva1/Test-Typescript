import express from 'express';

const server = express();

server.get('/', (_req, res) =>{
    res.send('Hello, World');
});

server.listen(3333, () => {
    console.log('Server running in 3333');
});
