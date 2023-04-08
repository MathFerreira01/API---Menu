import { Request } from 'express';
import FindByIdProductRepository from '../../repositories/product/findById-product-repository';

const FindByIdProductService = async (id: string) => {
   try {
      const productData = await FindByIdProductRepository(id);
      return {
         statusCode: 200,
         body: productData,
      };
   } catch (error) {
      return {
         statusCode: 400,
         body: 'Error fetching product data, please try again.',
      };
   }
};

export default FindByIdProductService;
