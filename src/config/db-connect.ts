import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const DATABASE_URL =
   'mongodb+srv://matheus:matheus12345@cluster0.0ujlzjd.mongodb.net/api-menu';

const connectDB = async () => {
   try {
      await mongoose.connect(process.env.DATABASE_URL as string);
      console.log('Database connection successful');
   } catch (error) {
      console.log('Database connection error');
   }
};

export default connectDB;
