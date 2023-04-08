import { Router } from 'express';
import createAuthController from '../../controllers/auth/create-auth-controller';

const routeAuth = Router();

routeAuth.post('/auth/login', createAuthController);

export { routeAuth };
