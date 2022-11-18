import express, { Application, Request, Response, NextFunction, ErrorRequestHandler } from 'express';
import { Server } from 'http';
// import { config } from 'dotenv';
// import db from './db/db';

const app: Application = express();

const port: number = Number(process.env.PORT || 8088);

app.get('/health-check', (req: Request, res: Response) => {
  res.sendStatus(200);
})


const errorHandler: ErrorRequestHandler = (err, req: Request, res: Response, next: NextFunction) => {
  res.status(err.status || 500);
  res.send({
    status: err.status || 500,
    message: err.message || 'Something went wrong'
  })
}

app.use(errorHandler);

const server: Server = app.listen(port, (): void => console.log(`listening on http://localhost:${port}`));