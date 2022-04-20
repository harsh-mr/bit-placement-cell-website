import Home from "./core/Home";
import Login from "./core/Login";
import Reset from "./core/Reset";
import ResetPass from "./core/ResetPassword";
import React,{useEffect,createContext,useReducer,useContext} from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom'
import Alumni from "./core/Alumni";
import Student from "./core/student/student";
import Students from "./core/admin/viewStudent";
import StudentPlacement from "./core/student/StudentPlacement";
import Change from "./core/student/Change";
import UpdateProfile from "./core/student/UpdateProfile";
import CreateUser from "./core/admin/CreateUser";
import {reducer,initialState} from './Reducers/useReducers';
import Mission from "./core/Mission";
import Resources from "./core/Resources";
import Placement from "./core/Placement";
import About from "./core/About";
import Admin from "./core/admin/Admin";
import SearchStudent from "./core/admin/SearchStudent";
import StudentData from "./core/admin/StudentData";
//import EligibleCandidates1 from "./core/admin/EligibleCandidates1";
import Cookies from "universal-cookie";
import EligibleCandidates from "./core/admin/EligibleCandidates";
// import Newstudent from "./core/student/Newstudent";
//import cors from 'cors';


export const userContext=createContext();
function Routing() {
  const navigate=useNavigate();
const {state,dispatch}=useContext(userContext);
const cookies=new Cookies();
//console.log(userContext);

useEffect(()=>{
  //console.log(state)
   const user=cookies.get("user")
   const admin=cookies.get("admins")
   if(user){
    dispatch({type:"USER",payload:user})
    }
   else if(admin){
     dispatch({type:"ADMIN",payload:admin})
   }
   
   else{
     
     if(window.location.pathname!=='/reset' && window.location.pathname!=='/' &&  window.location.pathname!=='/mission' && window.location.pathname!=='/placement' && window.location.pathname!=='/resources' && window.location.pathname!=='/alumni' && window.location.pathname!=='/about'){
     navigate('/login')
     }
     
   }
  },[])



  return (
    
      <Routes>
        {/* <Route exact path="/newstudent" element={<Newstudent />} /> */}
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/alumni" element={<Alumni />} />
        <Route path="/student" element={<Student />} />
        <Route path="/students" element={<Students/>}/>
        <Route path="/student/placement" element={<StudentPlacement />} />
        <Route path="/update" element={<UpdateProfile />} />
        <Route path="/admin/createuser" element={<CreateUser/>}/>
        <Route path="/reset" element={<Reset/>}/>
        <Route path="/reset-password/:token" element={<ResetPass/>}/>
        <Route path="/mission" element={<Mission />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/placement" element={<Placement />} />
        <Route path="/about" element={<About />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/admin/searchstudent" element={<SearchStudent />} />
        <Route path="/admin/studentdata" element={<StudentData />} />
        <Route path="/admin/eligiblecandidates" element={<EligibleCandidates />} />
        <Route path="/change" element={<Change/>}/>
      </Routes>
    
  );
}


function App() {
  const [state,dispatch]=useReducer(reducer,initialState)
  return (
    <userContext.Provider value={{state:state,dispatch:dispatch}}>
    <Router>
    <Routing/>
    </Router>
    </userContext.Provider>
    );
}

export default App;
