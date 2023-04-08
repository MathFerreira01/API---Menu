import { Response } from 'express';
import IUser from '../../interface/IUser';
import user from '../../models/user-model';
import createAuthRepository from '../../repositories/auth/create-auth-repository';

const createAuthService = async (data: IUser) => {
   try {
      //   const existingUser = await user.findOne({ email: data.email });

      //   if (existingUser) {
      //      return {
      //         status: 409,
      //         body: 'This email is already registered.',
      //      };
      //   }

      await createAuthRepository(data);
      return {
         statusCode: 201,
         body: 'Successfully registered user!',
      };
   } catch (error) {
      console.log(error);
      return {
         statusCode: 400,
         body: 'Unable to send data, please try again later.',
      };
   }
};

export default createAuthService;
