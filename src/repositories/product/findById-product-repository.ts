import { Request } from 'express';
import products from '../../models/product-model';

const FindByIdProductRepository = async (req: Request) => {
   const id = req.params.id;

   const dataProductById = products
      .findById(id)
      .populate('categories')
      .exec();

   return dataProductById;
};

export default FindByIdProductRepository;
