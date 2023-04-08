import categories from '../../models/category-model';

const allCategoriesRepository = async () => {
   await categories.find({});
};

export default allCategoriesRepository;
