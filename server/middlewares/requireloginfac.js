import jwt from "jsonwebtoken";
import mongoose from 'mongoose';
import JWT_SECRET from '../app.js';
const Fac=mongoose.model('Fac');


const Log=(req,res,next)=>{
    
   const {token,admin}=req.cookies;
   
   if(!token){
       res.status(401).json({error:'You must be logged in'});
       return
   }
   if(admin==false){
       res.json({error:'Unauthorised access'});
       return
   }
   jwt.verify(token,JWT_SECRET,(err,payload)=>{
       if(err){
            res.status(404).json({error:"You must be logged in"});
            return
       }
       const {_id}=payload;
       Fac.findById(_id).then(userdata=>{
           req.user=userdata;
           next();
       })

   })

}
export default Log;