
import Mongoose  from "mongoose";
const {ObjectId}=Mongoose.Schema.Types;

const studentschema = Mongoose.Schema({
      USN:{
          type:String,
          required:true,
          unique:true,
          min:3
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
      branch:{
          type:String,
          required:true,
      },
      email:{
          type:String,
          required:true,
      },
      class12marks:{
          type:Number,
          required:true
        },
        class10marks:{
          type:Number,
          //   type:String,
          required:true
        },
        averagecgpa:{
            type:Number,
            // type:String,
            required:true
        },
    //     firstname:{
    //         // type:String,
    //         type:Number,
    //       required:true
    //   },
      linkresume:{
          type:String,
          required:true,
        //   unique:true
        },
        linklinkedin:{
            type:String,
            required:true,
            // unique:true
        },
        linkgithub:{
            type:String,
            required:true,
            // unique:true
        },
        linkglassdoor:{
            type:String,
            required:true,
            // unique:true
      },
      clubsinvolved:{
          type:String,
          required:true
      },
      certifications:{
          type:String,
          required:true
      },
      projects:{
          type:String,
          required:true
      },
      others:{
          type:String
          
      },
      totaloffers:{
          type:Number
          
        },
        noofbacks:{
          type:Number
          //   type:String
          
        },
        currentctc:{
          type:Number
        //   type:String
          
        },
        companyname:{
            type:String
        },
        job:{
            type:String
        },
        message:{
            type:String
        },
        educationalgap:{
          type:Number
        //   type:String
          
          
        },
        photo:{
        //   type:Number
          type:String
          
          
        },
        detailsof:{
            type:ObjectId,//used to maintain the relationship
            ref:'User'
      }
     
})
const Post =Mongoose.model('Post',studentschema);

export default Post;