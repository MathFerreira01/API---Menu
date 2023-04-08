import allProductsRepository from '../../repositories/product/all-products-repository';

const allProductsService = async () => {
   try {
      const productData = await allProductsRepository();
      return {
         statusCode: 200,
         body: productData,
      };
   } catch (error) {
      return {
         statusCode: 400,
         body: 'Error fetching products data, please try again.',
      };
   }
};

export default allProductsService;
