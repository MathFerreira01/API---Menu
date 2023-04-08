import { Router } from 'express';
import createCategoryController from '../../controllers/category/create-category-controller';
import allCategoriesController from '../../controllers/category/all-category-controller';

const routeCategory = Router();

routeCategory
   .post('/categories', createCategoryController)
   .get('/categories', allCategoriesController);

export { routeCategory };
