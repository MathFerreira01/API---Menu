import { Router } from 'express';
import allProductsController from '../../controllers/product/all-products-controller';
import createProductController from '../../controllers/product/create-product-controller';
import deleteProductController from '../../controllers/product/delete-product-controller';
import FindByIdProductController from '../../controllers/product/find-product-controller';
import updateProductController from '../../controllers/product/update-product-controller';

const routeProduct = Router();

routeProduct
   .post('/product', createProductController)
   .get('/product', allProductsController)
   .get('/product/:id', FindByIdProductController)
   .put('/product/:id', updateProductController)
   .delete('/product/:id', deleteProductController);

export { routeProduct };
