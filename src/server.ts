import express, { Request, Response } from 'express';
import cors from 'cors';
import connectDB from './config/db-connect';
import { routeCategory } from './routes/category/route';
import { routeProduct } from './routes/product/route';
import { routeAuth } from './routes/auth/route';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.route('/').get((req: Request, res: Response) => {
   res.status(200).send({ title: 'API Menu' });
});

app.use(express.json(), cors(), routeAuth, routeCategory, routeProduct);

app.listen(PORT, () => console.log('Server is running on PORT 3000'));
