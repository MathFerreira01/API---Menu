import { Request, Response } from 'express';
import categories from '../../models/category-model';
import ICategory from '../../interface/ICategories';

const createCategoryRepository = async (params: ICategory) => {
   new categories(params);
};

export default createCategoryRepository;
