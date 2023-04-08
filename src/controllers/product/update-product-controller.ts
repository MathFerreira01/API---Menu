import { Request, Response } from 'express';
import updateProductService from '../../services/product/update-product-service';

const updateProductController = async (req: Request, res: Response) => {
   const response = await updateProductService(req.params.id, req.body);

   if (response.statusCode === 200) {
      return res.status(response.statusCode).json(response.body);
   }
   return res.status(response.statusCode).json(response.body);
};

export default updateProductController;
