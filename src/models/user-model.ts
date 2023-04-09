import { Schema, model } from 'mongoose';
import IUser from '../interfaces/IUser';

const userSchema = new Schema<IUser>({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const user = model<IUser>('User', userSchema);

export default user;
