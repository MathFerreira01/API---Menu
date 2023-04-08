import { Schema, model } from 'mongoose';
import { IPropsCategory } from './category-model';

interface IPropsProduct {
   id: string;
   categories: IPropsCategory[];
   name: string;
   qty: number;
   price: number;
}

const productSchema = new Schema<IPropsProduct>({
   id: { type: String },
   categories:[],
   name: { type: String },
   qty: { type: Number },
   price: { type: Number },
});

const product = model('product', productSchema);

export default product;
