import { Schema, model } from 'mongoose';

export interface IPropsCategory {
   id: string;
   parent: category | null;
   name: string;
}

const categoriesSchema = new Schema<IPropsCategory>({
   id: { type: String },
   parent: { type: category | null },
   name: { type: String },
});

const categories = model<IPropsCategory>('category', categoriesSchema);

export default categories;
