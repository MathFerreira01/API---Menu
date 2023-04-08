import IProduct from '../../interface/IProducts';
import createProductRepository from '../../repositories/product/create-product-repositoy';

const createProductService = async (params: IProduct) => {
   try {
      await createProductRepository(params);
      return {
         statusCode: 201,
         body: 'Successfully registered product!',
      };
   } catch (error) {
      console.log(error);
      return {
         statusCode: 400,
         body: 'Unable to send data, please try again later.',
      };
   }
};

export default createProductService;
