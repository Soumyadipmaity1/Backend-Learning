import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({

    title:{
        type:String,
        required:true
    },
    completed:{
        type:Boolean,
        default:false
    },
    user_id:{
        type:String,
        required:true
    },
    todo_id:{
        type:String,
        required:true
    },
    todo_title:{
        type:String,
        required:true
    },
    todo_description:{
        type:String,
        required:true
    },

    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    subTodo:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "subTodo"
        }
    ]
}, {timestamps:true})

export const Todo = mongoose.model ("Todo",TodoSchema)