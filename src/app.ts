import express, { Application, Request, Response, NextFunction } from 'express';
import plannetRoutes from './routes/planets/planets.route';

const app: Application = express();
app.use(express.json());
app.use(plannetRoutes);
app.get('/health-check', (req: Request, res: Response) => {
  res.sendStatus(200);
})

// module.exports = app;
export default app;