import { Document, Types } from 'mongoose';
import { ICategory } from './ICategories';

interface IProduct extends Document {
   id: Types.ObjectId;
   categories: ICategory[];
   name: string;
   qty: number;
   price: number;
}

export default IProduct;
