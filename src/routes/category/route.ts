import { Router } from 'express';
import allCategoriesController from '../../controllers/category/all-category-controller';

const routeCategory = Router();

routeCategory.get('/category', allCategoriesController);

export { routeCategory };
