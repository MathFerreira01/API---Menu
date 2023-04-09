import IUser from '../../interfaces/IUser';
import createAuthRepository from '../../repositories/auth/create-auth-repository';

const createAuthService = async (data: IUser) => {
   try {
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
