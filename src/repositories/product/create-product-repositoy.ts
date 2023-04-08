import IProduct from '../../interface/IProducts';
import products from '../../models/product-model';

const createProductRepository = async (params: IProduct) => {
   const product = new products(params);

   return await product.save();
};

export default createProductRepository;
