import products from '../../models/product-model';

const allProductsRepository = async () => {
   const dataProducts = await products.find().populate('categories');

   return dataProducts;
};

export default allProductsRepository;
