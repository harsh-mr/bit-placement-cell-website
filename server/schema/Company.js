import Mongoose  from "mongoose";

const companyschema= Mongoose.Schema({
    companyname:{
        type:String,
        require:true
    },
    job:{
        type:String,
        require:true
    },
    ctc:{
        type:Number,
        require:true
    },
    date:{
        type:Date,
        require:true
    }

})
const company =Mongoose.model('company',companyschema);

export default company;