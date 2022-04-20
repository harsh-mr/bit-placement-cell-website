import Mongoose from "mongoose";


const userSchema= new Mongoose.Schema({
    USN:{
        type:String,
        required:true,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    
    resetToken:String,
    expireToken:Date,
    
})

const User=Mongoose.model('User',userSchema); //models are used to create an interface of interaction between the schema and the database,js,etc
export default User;