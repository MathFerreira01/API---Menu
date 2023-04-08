import { Router } from 'express';
import createProductController from '../../controllers/product/create-product-controller';

const routeProduct = Router();

routeProduct.post('/product', createProductController);

export { routeProduct };
