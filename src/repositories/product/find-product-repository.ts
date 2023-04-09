import products from '../../models/product-model';

const FindByIdProductRepository = async (id: string) => {
   const dataProductById = products.findById(id).populate('categories').exec();

   return dataProductById;
};

export default FindByIdProductRepository;
