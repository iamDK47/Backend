import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username:
  {
   type: String,
   required: true,
   unique: true
  },
  email:
  {
   type: String,
   required: true,
   lowerCase: true,
  },
  isActive: Boolean,
  password:
  {
   type: String,
   required: [true, 'Unique password is required'],
   unique: true
  }
 }, {timestamps : true}
)

export const User = mongoose.model('User', userSchema) 