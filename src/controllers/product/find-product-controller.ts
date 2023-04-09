import { Request, Response } from 'express';
import FindByIdProductService from '../../services/product/find-product-service';

const FindByIdProductController = async (req: Request, res: Response) => {
   const response = await FindByIdProductService(req.params.id);
   
   return res.status(response.statusCode).json(response.body);
};

export default FindByIdProductController;
