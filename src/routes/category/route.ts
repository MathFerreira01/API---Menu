import { Router } from 'express';
import createCategoryController from '../../controllers/category/create-category-controller';

const routeCategory = Router();

routeCategory.post('/categories', createCategoryController);

export { routeCategory };
