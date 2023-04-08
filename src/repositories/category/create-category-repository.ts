import { ICategory } from '../../interface/ICategories';
import categories from '../../models/category-model';

const createCategoryRepository = async (params: ICategory) => {
   const category = new categories(params);

   return category.save();
};

export default createCategoryRepository;
