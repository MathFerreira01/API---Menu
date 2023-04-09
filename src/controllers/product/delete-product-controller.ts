import { Request, Response } from 'express';
import deleteProductService from '../../services/product/delete-product-service';

const deleteProductController = async (req: Request, res: Response) => {
   const response = await deleteProductService(req.params.id);
   
   return res.status(response.statusCode).json(response.body);
};

export default deleteProductController;
