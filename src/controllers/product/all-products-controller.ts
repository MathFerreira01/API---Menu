import { Request, Response } from 'express';
import allProductsService from '../../services/product/all-products-service';

const allProductsController = async (req: Request, res: Response) => {
   const response = await allProductsService();
   if (response.statusCode === 200) {
      return res.status(response.statusCode).json(response.body);
   }
   return res.status(response.statusCode).json(response.body);
};

export default allProductsController;
