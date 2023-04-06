import mongoose from 'mongoose';

const DATABASE_URL = 'mongodb+srv://matheus:matheus12345@cluster0.0ujlzjd.mongodb.net/api-menu'

const connectDB = async () => {
   try {
      await mongoose.connect(DATABASE_URL);
      console.log('Database connection successful');
   } catch (error) {
      console.log('Database connection error');
   }
};

export default connectDB;
