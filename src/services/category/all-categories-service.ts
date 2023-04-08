import allCategoriesRepository from '../../repositories/category/all-categories-repository';

const allCategoriesService = async () => {
   try {
      const categoryData = await allCategoriesRepository();
      return {
         statusCode: 200,
         body: categoryData,
      };
   } catch (error) {
      return {
         statusCode: 400,
         body: 'Error fetching categories data, please try again.',
      };
   }
};

export default allCategoriesService;
