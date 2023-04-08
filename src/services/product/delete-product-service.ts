import deleteProductRepository from '../../repositories/product/delete-product-repository';

const deleteProductService = async (id: string) => {
   try {
      await deleteProductRepository(id);
      return {
         statusCode: 200,
         body: 'Product successfully deleted!',
      };
   } catch (error) {
      return { statusCode: 400, body: 'Error deleting Product, try again later.' };
   }
};

export default deleteProductService;
