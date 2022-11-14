import express from 'express';

const server = express();

const port = process.env.port || 3009;

server.listen(port, () => console.log(`app serve on http://localhost:${port}`));