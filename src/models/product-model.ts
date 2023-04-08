import { Schema, model } from 'mongoose';
import IProduct from '../interface/IProducts';

const productSchema = new Schema<IProduct>({
   categories: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
   name: { type: String, required: true },
   qty: { type: Number, required: true },
   price: { type: Number, required: true },
});

const products = model<IProduct>('Product', productSchema);

export default products;
