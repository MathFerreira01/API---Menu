import products from '../../models/product-model';

const allProductsRepository = async () => {
   await products.find({});
};

export default allProductsRepository;
