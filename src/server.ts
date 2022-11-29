import http, { Server } from 'http';
// import { config } from 'dotenv';
// import db from './db/db';
import app from './app';

const server: Server = http.createServer(app);

const port: number = Number(process.env.PORT || 8088);

server.listen(port, (): void => console.log(`listening on http://localhost:${port}`));