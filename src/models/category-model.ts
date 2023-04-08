import { Schema, model } from 'mongoose';
import { ICategory } from '../interface/ICategories';

const categoriesSchema = new Schema<ICategory>({
   name: { type: String },
});

const categories = model<ICategory>('Category', categoriesSchema);

export default categories;
