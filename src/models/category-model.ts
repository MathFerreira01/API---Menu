import { Schema, model } from 'mongoose';
import ICategory from '../interface/ICategories';

const categoriesSchema = new Schema({
   id: { type: String },
   parent: { type: String || null },
   name: { type: String },
});

const categories = model<ICategory>('Category', categoriesSchema);

export default categories;
