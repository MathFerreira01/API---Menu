import { Router } from 'express';
import createCategoryController from '../../controllers/category/create-category-controller';
import allCategoriesController from '../../controllers/category/all-category-controller';

const routeCategory = Router();

routeCategory
   .post('/category', createCategoryController)
   .get('/category', allCategoriesController);

export { routeCategory };
