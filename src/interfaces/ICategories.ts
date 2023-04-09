import { Types, Document } from 'mongoose';

export interface ICategory extends Document {
   id: Types.ObjectId;
   name: string;
}

export interface IPopulateParent {
   parent: ICategory | null;
}
