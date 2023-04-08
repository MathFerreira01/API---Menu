import { Request } from 'express';
import { IPopulateParent } from '../../interface/ICategories';
import products from '../../models/product-model';

const FindByIdProductRepository = async (req: Request) => {
   const id = req.params.id;
   console.log(id);

   products.findById(id).exec();
};

export default FindByIdProductRepository;
