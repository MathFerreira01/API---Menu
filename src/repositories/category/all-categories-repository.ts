import categories from '../../models/category-model';

const allCategoriesRepository = async () => {
   const dataCategories = await categories.find();

   return dataCategories;
};

export default allCategoriesRepository;
