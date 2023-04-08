import { Types, Document } from 'mongoose';

interface IUser extends Document {
   id: Types.ObjectId;
   email: string;
   password: string;
}

export default IUser;
