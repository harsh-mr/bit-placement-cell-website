import axios from 'axios';

//import {useNavigate} from'react-router-dom';

const url = 'http://localhost:8000';

axios.defaults.withCredentials=true;





export const studentquery = async (info)=>{
  console.log(info);
  console.log(info.nofbacks);
     try{
      let response = await axios.get(`${url}/admin/eligiblecandidate`, {
        params: {
          marks10th:info.marks10th,
          marks12th:info.marks12th,
          averagecgpa:info.averagecgpa,
          // totaloffers:info.totaloffers,
          nofbacks:info.nofbacks,
          ctcoffered:info.ctcoffered,
          educationalgap:info.educationalgap,
          totaloffers:1,
        },
      });
      return response.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}
export const Viewstudent = async (usn)=>{

     try{
        let res  = await axios({
          method:"get",
        url:`${url}/student`,
        headers:{
          "Content-Type":"application/json"
        },
        params:{
        usn:usn
        },
          withCredentials:true
        
      })
        return res.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}



export const Viewadmin = async (usn)=>{

     try{
        let res  = await axios({
          method:"get",
        url:`${url}/admin`,
        headers:{
          "Content-Type":"application/json"
        },
          withCredentials:true
        
      })
        return res.data;
     }catch(error){
         console.log("error while getting data",error);
     }
}

