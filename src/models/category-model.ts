import { Schema, model } from 'mongoose';
import { ICategory } from '../interfaces/ICategories';

const categoriesSchema = new Schema<ICategory>({
   name: { type: String },
});

const categories = model<ICategory>('Category', categoriesSchema);

export default categories;
