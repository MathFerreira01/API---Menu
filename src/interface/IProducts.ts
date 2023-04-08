import ICategory from './ICategories';

interface IProduct {
   id?: string;
   categories: string;
   name: string;
   qty: number;
   price: number;
}

export default IProduct;
