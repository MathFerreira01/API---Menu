import { Schema, model } from 'mongoose';

interface IPropsProduct {
   id: string;
   name: string;
   qty: number;
   price: number;
}

const productSchema = new Schema<IPropsProduct>({
   id: { type: String },
   name: { type: String },
   qty: { type: Number },
   price: { type: Number },
});

const product = model('livros', productSchema);

export default product;
