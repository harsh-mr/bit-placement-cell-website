import React,{useState} from 'react';
import {useParams,useNavigate} from 'react-router-dom';
import axios from 'axios';

const url = 'http://localhost:8000';
const Change =()=>{
    
    const[oldpassword,setoldpassword]=useState("");
     const [password,setPassword]=useState("");
     const [passwords,setPasswords]=useState("");
     const navigate=useNavigate();

      const PostData=async()=>{
          if(password===passwords){
           await  axios({
             method:"post",
             url:`${url}/change`,
             headers:{
                 "Content-Type":"application/json"
             },
             data:({
                 password,
                 oldpassword
             })
         })//this form helps to parse into the data's json part
         .then(shre=>{
             if(shre.data.error){
                 return window.alert(shre.data.error);
             }
               window.alert(shre.data.message)
              navigate("/student")
            
     }).catch(err=>{console.log(err)})
          }
         else{
             return window.alert("New Password and Confirm Password don't match")
         }
    }

     return(
    
        <div className="mycard">
            <div className="card card-sign">
                <h2 className="brand-logo color">Reset Password</h2>
                <input type="password" placeholder="Enter Old Password" value={oldpassword} onChange={(e)=>setoldpassword(e.target.value)}/>
                <input type="password" placeholder="Enter New Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" placeholder="Confirm New Password" value={passwords} onChange={(e)=>setPasswords(e.target.value)}/>
                <button className="btn waves-effect waves-light" onClick={()=>PostData()}>Reset
                </button>
        
            </div>
        </div>
    )
}

export default Change;

  