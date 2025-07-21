import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const dbConnection = async () => {
  try {
    const mongooseConnection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    console.log(`MongoDB connection succfull with host : ${mongooseConnection.connection.host} `);
    // console.log(mongooseConnection)
  } catch (e) {
    throw ("ERROR :: failed to connect with database", e);
    process.exit(1)
  }
};

export default dbConnection;