import mongoose from 'mongoose';

mongoose.connect(
   'mongodb+srv://matheus:matheus12345@cluster0.0ujlzjd.mongodb.net/api-menu'
);

let db = mongoose.connection;

export default db;
