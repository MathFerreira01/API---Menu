import { Schema, model } from 'mongoose';
import IProduct from '../interface/IProducts';
import ICategory from '../interface/ICategories';

const productSchema = new Schema({
   id: { type: String },
   categories: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
   name: { type: String },
   qty: { type: Number },
   price: { type: Number },
});

const product = model('Product', productSchema);

export default product;
