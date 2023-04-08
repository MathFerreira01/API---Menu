import products from '../../models/product-model';

const deleteProductRepository = (id: string) => {
   const deleteProduct = products.findByIdAndDelete(id);

   return deleteProduct;
};

export default deleteProductRepository;
