import mongoose from 'mongoose';
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    creditBalance:{
        type:Number,
        default:5
    }
})

//This line checks if the model already exits in mongoose.models to avoid OverwriteModelError and if not, it creates a new model.
const userModel= mongoose.models.user || mongoose.model("user",userSchema)

export default userModel;