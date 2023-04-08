import user from '../../models/user-model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import IUser from '../../interface/IUser';

const createAuthRepository = async (data: IUser) => {
   const hashedPassword = await bcrypt.hash(data.password, 10);

   const dataUser = new user({ email: data.email, password: hashedPassword });
   await dataUser.save();

   const token = jwt.sign(
      { userId: dataUser._id },
      '' + process.env.JWT_SECRET
   );

   return token;
};

export default createAuthRepository;
