import { Router } from 'express';
import createProductController from '../../controllers/product/create-product-controller';
import FindByIdProductController from '../../controllers/product/findById-product-controller';

const routeProduct = Router();

routeProduct
   .post('/product', createProductController)
   .get('/product/:id', FindByIdProductController);

export { routeProduct };
