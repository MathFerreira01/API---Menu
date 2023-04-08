import { Request, Response } from 'express';
import createCategoryService from '../../services/category/create-category-service';

const createCategoryController = async (req: Request, res: Response) => {
   const response = await createCategoryService(req.body);
   if (response.statusCode === 201) {
      return res.status(response.statusCode).json(response.body);
   }
   return res.status(response.statusCode).json(response.body);
};

export default createCategoryController;
