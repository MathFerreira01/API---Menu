import { Request } from 'express';
import products from '../../models/product-model';

const FindByIdProductRepository = async (req: Request) => {
   const id = req.params.id;

   products.findById(id).populate('categories', 'name').exec();
};

export default FindByIdProductRepository;
