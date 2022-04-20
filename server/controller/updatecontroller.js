import Post from '../schema/student-schema.js'
import User from '../schema/loginstudent-schema.js';
import Fac from '../schema/fac-schema.js';
import company from '../schema/Company.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import JWT_SECRET from '../app.js';
import crypto from 'crypto';
import sgMail from '@sendgrid/mail';
import EMAIL from '../app.js';
import xlsx from 'xlsx';
import path from 'path';

const SENDGRID_API_KEY='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'

sgMail.setApiKey(SENDGRID_API_KEY);

export const studentquery  = async(req,res)=>{
   
    console.log(req.query.educationalgap);
    try{
        //let data=await User.find({_id:req.user._id})
         Post.find( { class12marks: { $gte:req.query.marks12th },
        class10marks: { $gte:req.query.marks10th },
        averagecgpa: { $gte:req.query.averagecgpa },
        totaloffers: { $lte:req.query.totaloffers },
        noofbacks: { $lte:req.query.nofbacks },
        currentctc: { $lte:req.query.ctcoffered-300000 },
        educationalgap: { $lte:req.query.educationalgap }
    })
    .then(data=>{
        if(Object.entries(data).length === 0){
            console.log("error");
            return res.json({error:"No Eligible Candidates"});
        }
        else{
            console.log(data);
            res.status(200).json(data);

        }
    })

        // let data = await Post.find({{"$toInt" : class12marks}:{$gt:{"$toInt" : req.query.marks12th}}});
        //console.log(data)
        //console.log(data);
    //    res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    
     
    
}
export const branchquery  = async(req,res)=>{
   
    console.log(req.query.branch);
    try{
        //let data=await User.find({_id:req.user._id})
        let data = await Post.find( { branch:req.query.branch });
        // let data = await Post.find({{"$toInt" : class12marks}:{$gt:{"$toInt" : req.query.marks12th}}});
        //console.log(data)
        console.log(data);
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    
     
    
}
export const ExcelDownload=async(req,res)=>{
    const users=req.body;

    console.log(users)
    const workSheetColumnNames = [
    "Sr No.",
    "USN",
    "First Name",
    "Last Name",
    "Branch",
    "Email Id",
    "Mobile No."
]

const workSheetName = 'Eligible Students';
const filePath = '../server/output/excel-from-js.xlsx';

const exportExcel = (data, workSheetColumnNames, workSheetName, filePath) => {
    const workBook = xlsx.utils.book_new();
    const workSheetData = [
        workSheetColumnNames,
        ... data
    ];
    const workSheet = xlsx.utils.aoa_to_sheet(workSheetData);
    xlsx.utils.book_append_sheet(workBook, workSheet, workSheetName);
    xlsx.writeFile(workBook, path.resolve(filePath));
}

const exportUsersToExcel = (users, workSheetColumnNames, workSheetName, filePath) => {
    const data = users.map((user,index) => {
        return [++index,user.USN,user.firstname,user.surname,user.branch,user.email,user.mobileno];
    });
    exportExcel(data, workSheetColumnNames, workSheetName, filePath);
}
 exportUsersToExcel(users, workSheetColumnNames, workSheetName, filePath)
 
}
export const Updatepost  = async(req,res)=>{
   
   try{
        //let data=await User.find({_id:req.user._id})
         let user=await User.findById(req.user._id);
         console.log(user)
         user.email=req.body.email;
         user.save()
       let data = await Post.findOneAndUpdate({detailsof:req.user._id},req.body);
       //console.log(data)
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
    
     
    
}
export const LoginStudent  = async(req,res)=>{

    console.log(req.body);
    const{USN,password}=req.body;
    if(!USN || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    // if(!re.test(emailid)){
    //     return res.json({error:'invalid email id'})
    // }
    User.findOne({USN:USN})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,name,email}=savedUser;
                Post.findOne({USN:USN})
                .then(po=>{
                    
                 res.cookie("token",token,{httpOnly:true}).cookie("admin",false,{httpOnly:true}).json({user:{name,email,USN},po,message:'Successfully Logged In!'})})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}
export const LoginFac  = async(req,res)=>{

    console.log(req.body);
    const{email,password}=req.body;
    if(!email || !password){
        
        return res.json({error:'Please fill all the fields'});
         
    }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
    Fac.findOne({email:email})
    .then(savedUser=>{
        if(!savedUser){
            return res.json({error:'Account does not exist'});
             
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                const token=jwt.sign({_id:savedUser._id},JWT_SECRET);
                const{_id,email}=savedUser;
                    
               return res.cookie("token",token,{httpOnly:true}).cookie("admin",true,{httpOnly:true}).json({user:{email,_id},message:'Successfully Logged In!'})
            }
            else{
                 return res.json({error:'Invalid email or password'});
            }
        })
    })
}
export const Logout =async(req,res)=>{
    res.clearCookie("token").clearCookie("admin").json({message:"Successfully Logged Out"});
}
export const Viewstudent = async(req,res)=>{
    try{
        let id="";
        if(req.cookies.admin==="false"){
            id=req.user._id;
        }
        else{
            console.log(req.query.usn)
            let data1=await User.findOne({USN:req.query.usn});
            //console.log(data1)
            id=data1.id;
            //console.log(id)
        }
        //let data=await User.find({_id:req.user._id})
       let data = await Post.find({detailsof:id}).populate("detailsof","_id USN firstname surname monileno email branch class12marks class10marks averagecgpa linkresume linklinkedin linkgithublinkglassdoor clubsinvolved certifications projects others detailsof");
       console.log(data)
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
}
export const Viewadmin = async(req,res)=>{
    console.log(req.user._id)
    try{
        let id="";
        // if(req.cookies.admin==="false"){
            id=req.user._id;
        // }
      
        //let data=await User.find({_id:req.user._id})
       let data = await Fac.find({_id:id});
       console.log(data)
       res.status(200).json(data);
    }catch(error){
        res.status(500).json(error);
    }
}
export const Upcoming=async(req,res)=>{
    company.find({}).then(shre=>{
        res.json(shre)
        console.log(shre)
    }).catch(err=>{
        console.log(err)
    })
}
export const CreateUser=async(req,res)=>{
    
    const{USN,password}=req.body;
    if(!USN || !password){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    // if(name.indexOf(' ')>=0){
    //    return res.json({error:"Please use hyphens instead of spaces"})
    // }
    //const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    // if(!re.test(email)){
    //     return res.json({error:'invalid email id'})
    // }
       User.findOne({USN:USN})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this usn already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const user=new User({
                  USN:USN,
                  password:hashedpassword,
                  email:'-',
                  
              })
              user.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
                      
                      const post=new Post({
                          USN:user.USN,
                          firstname:'-',
                          surname:'-',
                          mobileno:'-',
                          email:'-',
                          class12marks:0,
                          class10marks:0,
                          averagecgpa:0,
                          linkresume:'-',
                          linklinkedin:'-',
                          linkgithub:'-',
                          linkglassdoor:'-',
                          clubsinvolved:'-',
                          certifications:'-',
                          projects:'-',
                          others:'-',
                          detailsof:user._id,
                          branch:'-',
                          totaloffers:0,
                          noofbacks:0,
                          currentctc:0,
                          photo:'default.png',
                          educationalgap:0,
                          companyname:'N/A',
                          job:'N/A',
                          message:'N/A'
                      })
                      post.save()
                      res.json({message:"Successfully Signed Up!"})
                  }
                  else{
                      return res.json({error:"Try Again Later!"})
                  }
              }).catch((err)=>{
                  console.log(err);
              })})
              
          
      }).catch((err)=>{
          console.log(err);
      })
    
}
export const CreateFac=async(req,res)=>{
    
    const{email,password}=req.body;
    if(!email || !password){// ! this means if it is empty
       
        return res.json({error:'Please add all the fields'});
    }
    // if(name.indexOf(' ')>=0){
    //    return res.json({error:"Please use hyphens instead of spaces"})
    // }
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;//regex for validating email
    if(!re.test(email)){
        return res.json({error:'invalid email id'})
    }
       Fac.findOne({email:email})
      .then(savedUser=>{
          if(savedUser){
               return res.json({error:'User with this emailid already exisits'});// We should always add the return keyword to the error so that the code further is not executed
          }
           bcrypt.hash(password,12)
        .then(hashedpassword=>{
            const fac=new Fac({
                  password:hashedpassword,
                  firstname:"N/A",
                  surname:"N/A",
                   mobileno:"N/A",
                   email:email,
                   position:"N/A",
                   others:"N/A",
              })
              fac.save()
              .then(user=>{
                  console.log(user._id)
                  if(user){
                      res.json({message:"Successfully Signed Up!"})
                  }
                  else{
                      return res.json({error:"Try Again Later!"})
                  }
              }).catch((err)=>{
                  console.log(err);
              })})
              
          
      }).catch((err)=>{
          console.log(err);
      })
    
}
export const Reset  =async(req,res)=>{
    const {USN}=req.body;
    console.log(req.body);
   crypto.randomBytes(32,(err,buffer)=>{
         if(err){
             return console.log(err)
         }
         console.log(USN)
         const token=buffer.toString("hex")//buffer is in the form of hexadecimal so we need to convert it in the string form
         User.findOne({USN:USN})
         .then(user=>{
             console.log(user)
             if(!user){
                 return res.json({error:"User does not exist"})
             }
             user.resetToken=token
             user.expireToken=Date.now()+3600000//time is in milisecond so as I want the link to be valid only for one hour so use hour in milliseconds
             user.save()
             .then(result=>{
                 if(result){
                   sgMail.send({
                            to: user.email, // Change to your recipient
                            from: 'shreyanushka02@gmail.com', // Change to your verified sender
                            subject: 'Password Reset',
                            text:"iyuyrtrsdf",
                             html: `<h3>Click on the following link to reset the password.</h3>
                                <h4>Remember the link will work for only 1 hour</h4>
                                <a href="${EMAIL}/reset-password/${token}">Reset Password</a>`,
                              })
                 }
                 return res.json({message:"Check Your Email for the Reset Link"})
             }).catch(err=>{
                 console.log(err)
             }) 
         }).catch(err=>{
             console.log(err)
         })
     })

}
export const sendMail=async(req,res)=>{
    const {post,company,job,ctcoffered}=req.body;
    console.log(company);
    if(post.length==0){
        return res.json({error:"No one is Eligible"})
    }
    const email_list=[];
    post.map((val,index)=>{
        email_list[index]=val.email;
    })
    
         sgMail.sendMultiple({
                            to: email_list, // Change to your recipient
                            from: 'shreyanushka02@gmail.com', // Change to your verified sender
                            subject: 'Placement Offer',
                            html:`<h3>
                                  This is to inform you that you are eligible to apply for ${job} role at ${company} CTC - ${ctcoffered}</h3>`
                                
                              }).then(()=>{
                                  res.json({message:"Email Sent!"})
                              }).catch(err=>{
                                  console.log(err)})
}
export const Change=async(req,res)=>{
    const {password,oldpassword}=req.body;
    let user=await User.findById(req.user._id);
    bcrypt.compare(password,user.password)
    .then(match=>{
        if(match){
            return res.json({error:"Set a new Password"})
        }
        else{
            bcrypt.compare(oldpassword,user.password)
            .then(doMatch=>{
                if(!doMatch){
                    return res.json({error:"Old password does not match"});
                }
            else{
            let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
            if(!strongPassword.test(password)){
                console.log('7')
              return res.json({error:"Enter a stronger password"})
            }
            
             bcrypt.hash(password,12)
             .then(hashedpassword=>{
                          user.password=hashedpassword;
                          user.save()
                          .then(da=>
                             res.json({message:"Successfully Password Changed!"})
                            )
                         
                      }).catch(err=>console.log(err))
                    }}).catch(err=>console.log(err))
        }

    })
    
}
export const ResetPass=async(req,res)=>{
    const {token,password}=req.body;
    let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
    if(!strongPassword.test(password)){
        return res.json({error:"Enter a stronger password"})
    }
     bcrypt.hash(password,12)
     .then(hashedpassword=>{
              User.findOne({resetToken:token,expireToken:{$gt:Date.now()}})//$gt means greater than
              .then(result=>{
                  if(!result){
                      return res.json({error:"Session Expired! Try Again Later"})
                  }
                  result.password=hashedpassword
                  result.resetToken=undefined
                  result.expireToken=undefined
                  result.save()
                  .then(da=>
                     res.json({message:"Successfully Password Resetted!"})
                    )
                 
              }).catch(err=>console.log(err))
     })
}
export const Search=async(req,res)=>{
     let userPattern=new RegExp("^"+req.params.usn)//"^" this means all records 
     console.log(userPattern)
   Post.find({USN:{$regex:userPattern}})//$regex is the regular expression thing which will return all the records starting with the name written
   .select("USN firstname surname branch")
   .then(da=>{
       if(da){
           console.log(da)
         res.json(da)
    }
    else{
       res.json({error:"No User Found!"})
    }
   }).catch(err=>console.log(err))
}
export const Comp=async(req,res)=>{
    try{
        const{companyname,job,ctc,date}=req.body;
        const comp=new company({
               companyname,
               job,
               ctc,
               date
        })
        comp.save();
     
       

       res.json({message:"Uploaded successfully"});
       
    }catch(err){
        res.json(err,{error:"Could not upload"});
    }
    
     
}
export const RemComp=async(req,res)=>{
     try{
        const{companyname,job,ctc,date}=req.body;
        company.findOneAndDelete({companyname,job,ctc,date}).then(shre=>{
            
            console.log(shre)
            if(!shre){
                return res.json({error:"No such company input"});
            }
                res.status(200).json({message:"Deleted successfully"});
            
        })
    
      
    }catch(err){
        res.status(500).json(err,{error:"Could not delete"});
    }
}
export const Plac = async(req,res)=>{
      try{
          console.log(req.body)
        const{USN,companyname,job,currentctc,message}=req.body;
        Post.findOne({USN:USN}).then(post=>{
            if(!post){
                return res.json({error:"No such user exists"})
            }
            post.totaloffers=post.totaloffers+1,
            post.companyname=companyname,
            post.job=job,
            post.currentctc=currentctc,
            post.message=message,
            post.save(),
            res.json({message:"Successfully Updated"})
        })
    
      
    }catch(err){
        console.log(err)
        res.json(err,{error:"Could not delete"});
    }
}