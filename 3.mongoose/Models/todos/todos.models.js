import mongoose, { mongo } from "mongoose";

const TodoSchema = new mongoose.Schema({
 Todo : {
  type: String,
  required: true,
 },
 Complete : {
  type: Boolean,
  default : false
 },
 createdBy : {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'User'
 },
 subtodos: [
  {
   type: mongoose.Schema.Types.ObjectId,
   ref: 'SubTodo'
  }
 ]
}, {timestamps: true})

export const Todo = mongoose.model('Todo', TodoSchema)