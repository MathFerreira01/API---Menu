import express from 'express';
import { Request, Response } from 'express';
import connectDB from './config/db-connect';

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.route('/').get((req: Request, res: Response) => {
   res.status(200).send({ title: 'API Menu' });
});

app.use(express.json());

app.listen(PORT, () => console.log('Server is running on PORT 3000'));
