import { Request, Response } from 'express';
import createAuthService from '../../services/auth/create-auth-service';

const createAuthController = async (req: Request, res: Response) => {
   const response = await createAuthService(req.body);
   if (response.statusCode === 200) {
      return res.status(response.statusCode).json(response.body);
   }
   return res.status(response.statusCode).json(response.body);
};

export default createAuthController;
