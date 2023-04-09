import IProduct from '../../interfaces/IProducts';
import products from '../../models/product-model';

const updateProductRepository = (id: string, params: IProduct) => {
   const dataUpdateProduct = products.findByIdAndUpdate(id, params);

   return dataUpdateProduct;
};

export default updateProductRepository;
