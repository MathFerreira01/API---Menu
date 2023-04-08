import { Request, Response } from 'express';
import FindByIdProductService from '../../services/product/findById-product-service';

const FindByIdProductController = async (req: Request, res: Response) => {
   const response = await FindByIdProductService(req.params.id);
   if (response.statusCode === 200) {
      return res.status(response.statusCode).json(response.body);
   }
   return res.status(response.statusCode).json(response.body);
};

export default FindByIdProductController;
