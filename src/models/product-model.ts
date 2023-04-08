import { Schema, model, Types } from 'mongoose';
import IProduct from '../interface/IProducts';
import categories from './category-model';

const productSchema = new Schema<IProduct>({
   categories: { type: [] },
   name: { type: String },
   qty: { type: Number },
   price: { type: Number },
});

const products = model<IProduct>('Product', productSchema);

export default products;
