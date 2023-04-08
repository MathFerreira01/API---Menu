import { Request } from 'express';
import ICategory from '../../interface/ICategories';
import createCategoryRepository from '../../repositories/category/create-category-repository';

const createCategoryService = async (params: ICategory) => {
   try {
      await createCategoryRepository(params);
      return {
         statusCode: 201,
         body: 'Successfully registered category!',
      };
   } catch (error) {
      console.log(error);
      return {
         statusCode: 400,
         body: 'Unable to send data, please try again later.',
      };
   }
};

export default createCategoryService;
