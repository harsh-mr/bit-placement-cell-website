import Mongoose  from "mongoose";

const facschema = Mongoose.Schema({
    password:{
        type:String,
        required:true
    },
      firstname:{
          type:String,
          required:true
      },
      surname:{
          type:String,
          required:true
      },
      mobileno:{
          type:String,
           required:true
      },
      email:{
          type:String,
          required:true,
          unique:true,
      },
      position:{
          type:String,
          required:true,
      },
      others:{
          type:String
          
      }

})
const Fac =Mongoose.model('Fac',facschema);

export default Fac;