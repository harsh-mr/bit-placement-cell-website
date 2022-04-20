import React, { useContext } from "react";
import "../../assets/css/student.css";
import { useNavigate } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import { Viewstudent } from "../../services/api";
import { useEffect, useState, useReducer } from "react";
import { userContext } from "../../App";
import Cookies from "universal-cookie";

const Newstudent = () => {

  const PF = "http://localhost:8000/images/";
  const { state, dispatch } = useContext(userContext);

  const [post, setpost] = useState({});
  const navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    if (typeof cookies.get("user") === "undefined") {
      return navigate("/admin");
    }
    const Fetchdata = async () => {
      let posts = await Viewstudent();
      console.log(posts[0]);
      setpost(posts[0]);
    };
    Fetchdata();
  }, []);




  return (
    <div>
      <StudentHeader/>
      <div className="container-fluid">
          <div className="row">
            <div className="col-xl-3  mt-2 d-flex flex-column"> 
                    <div className="row px-3 py-4 ">

              <div className="shadow p-0">
               
                <div className="card p-4 blackpro bg-secondary shadow " id="profilecrd">
                <div
                  className="image  d-flex flex-column justify-content-center align-items-center"
                  id="imgprof"
                >
                  {" "}
                  {/* <button className="btn btn-secondary" id="btnprofile">
                    {" "} */}
                  <img
                    className=" rounded-circle"
                    id="profimage"
                    style={{ height: "150px", width: "150px" }}
                    src={PF + post.photo || "https://i.imgur.com/wvxPV9S.png"}
                  />
                  {/* </button>{" "} */}
                  <span className="name mt-3">
                    <span>{post.firstname} </span> <span>{post.surname}</span>
                  </span>{" "}
                  <span className="idd">{post.email}</span>
                  {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                  <div className=" d-flex mt-2">
                    {" "}
                    <button
                      className="btn1 btn-light grow"
                      onClick={() => {
                        navigate(`/update`);
                      }}
                    >
                      Edit Profile
                    </button>{" "}
                  </div>
                  <div className="text mt-3">
                    {" "}
                    <span id="spanpro">
                      I aim to attain an engaging internship position in various
                      fields. I hope to give direction to my passion and
                      hardwork to become an asset to the organisation.
                    </span>{" "}
                  </div>
                  <div className="gap-5 mt-3 icons d-flex flex-row justify-content-center align-items-center ">
                    <span className="lightic grow">
                      <a href={post.linkgithub}>
                        <i className="fa fa-github fa-3x lightic"></i>
                      </a>
                    </span>
                    <span className="lightic grow">
                      <a href={post.linklinkedin}>
                        <i className="fa fa-linkedin fa-3x lightic"></i>
                      </a>
                    </span>
                    {/* <span className="lightic grow"><a href="https://twitter.com"><i className="fa fa-twitter fa-5x lightic"></i></a></span> */}
                    <span className="lightic grow">
                      <a href={post.linkinstagram}>
                        <i className="fa fa-instagram fa-3x lightic"></i>
                      </a>
                    </span>
                    <span className="lightic grow">
                      <a href={post.linkresume}>
                        <i className="fa fa-file fa-3x lightic"></i>
                      </a>
                    </span>
                  </div>
                </div>
              </div>
              </div>






                      


                   


                       
                    </div>

                    <p class="mb-0 mt-4 fs-5 fw-bold text-center text-danger" id="login_para">
                            <a href="/change" class="link_login text-dark" style={{textDecoration:'underline'}}>
                              Change password
                            </a>
                          </p>



            </div>





            <div className="col-xl-9 mt-2 ">     
              <div className="row">


                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow overflow-auto" style={{backgroundColor:'#F8FCFf'}}>
                   <div className="row">
                    <div className="col-12 fw-bold pb-2 fs-2">
                      Student Detail
                    </div> 


                    <div className="col-6 py-2  fs-5 ">
                      <span className='text-dark'>Name</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.firstname}{" "}{post.surname}
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>USN</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.USN}
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Contact</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.mobileno}
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Email</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end overflow-auto">
                    {post.email}
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Branch</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.branch}
                    </div> 
                    
                    </div>
                  
                  </div>

                  </div>
                  </div>



                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow " style={{backgroundColor:'#F8FCFf'}}>
                   <div className="row">
                    <div className="col-12 fw-bold pb-2 fs-2">
                      Academics
                    </div> 


                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Matriculation</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.class10marks} CGPA
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Intermediate</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.class12marks} %
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Average Cgpa</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.averagecgpa} CGPA
                       
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Backlogs</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.noofbacks}
                    </div> 
                    <div className="col-6 py-2  fs-5">
                      <span className='text-dark'>Year Gap</span>                      
                    </div> 
                    <div className="col-6 py-2  fs-5 text-secondary text-end ">
                    {post.educationalgap}
                    </div> 
                    
                    </div>
                  
                  </div>

                  </div>
                  </div>







                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow overflow-auto" style={{backgroundColor:'#F8FCFf'}}>


                  <div className="col-12 fw-bold fs-5 text-secondary">
                                Projects
                            </div> 

                            <div className="d-flex justify-content-center p-4">
                            <div>

                            {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.projects}{" "}
                              </span>{" "}

                            </div>

                            </div>

                   
                  
                  </div>

                  </div>
                  </div>


                  
                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow overflow-auto" style={{backgroundColor:'#F8FCFf'}}>


                  <div className="col-12 fw-bold fs-5 text-secondary">
                                Internships
                            </div> 

                            <div className="d-flex justify-content-center p-4">
                            
                            <div>
                            {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.others}{" "}
                              </span>{" "}

                            </div>


                            </div>

                   
                  
                  </div>

                  </div>
                  </div>



                



                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow overflow-auto" style={{backgroundColor:'#F8FCFf'}}>


                  <div className="col-12 fw-bold fs-5 text-secondary">
                                Clubs Involved
                            </div> 

                            <div className="d-flex justify-content-center p-4">
                            {/* <i className="fa fa-plus fa-lg "  style={{fontSize:"3rem"}}></i> */}
                            <div>
                            <span className="text1 fw-normal fs-5">
                                {post.clubsinvolved}{" "}
                              </span>{" "}
                            </div>

                            </div>

                   
                  
                  </div>

                  </div>
                  </div>


                



                <div className="col-xl-6  my-4"><div className="container">
                  <div className="container rounded-3 p-4 shadow overflow-auto" style={{backgroundColor:'#F8FCFf'}}>


                  <div className="col-12 fw-bold fs-5 text-secondary">
                                Certifications
                            </div> 

                            <div className="d-flex justify-content-center p-4">
                            <div>{" "}
                              <span className="text1 fw-normal fs-5">
                                {post.certifications}{" "}
                              </span>{" "}
                              </div>

                            </div>

                   
                  
                  </div>

                  </div>
                  </div>



                






               


               


                


                </div>
              
            </div>
            
      </div>

      

        </div>




    </div>
  )
}

export default Newstudent;