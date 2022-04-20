import React, { useContext } from "react";
import "../../assets/css/student.css";
import { useNavigate } from "react-router-dom";
import StudentHeader from "./StudentHeader";
import { Viewstudent } from "../../services/api";
import { useEffect, useState, useReducer } from "react";
import { userContext } from "../../App";
import Cookies from "universal-cookie";

const Student = () => {
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
    <>
      <StudentHeader />
      <div className="container-fluid" id="student-body">
        <div className="row">
          <div className="col-xl-3">
            <div className="container  mt-4 mb-4 p-2 d-flex justify-content-center">
              <div className="card p-4 blackpro" id="profilecrd">
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

          <div className="col-xl-9">
            <div className="col-12" id="det">
              <div className="card ml-4" id="card1">
                <div className="card-header blackpro">
                  <h1 style={{ fontWeight: "400" }}>My Profile</h1>
                </div>
              </div>
            </div>
            <div className="col-12 mt-0" id="det1">
              <div className="card ml-4" id="card2">
                <div className="card-body greypro">
                  <div className="row greypro">
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5">NAME -</span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.firstname}
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.surname}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5">USN -</span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.USN}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5">CONTACT -</span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.mobileno}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5">BRANCH -</span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.branch}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5">EMAIL -</span>{" "}
                      <span className="fw-normal fs-5">{post.email}</span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        INTERMEDIATE -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.class12marks} %
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        MATRICULATION -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.class10marks} CGPA
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        AVERAGE CGPA -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.averagecgpa} CGPA
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        BACKLOGS -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.noofbacks}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        Year gap -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.educationalgap}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="container-fluid px-4  mt-1 mb-1" id="details_st">
                <div className="row">
                  <div className="d-flex">
                    <div className="col-xl-6 mt-3 px-1">
                      <div className="card p-3 mb-2 h-100 greypro">
                        <div className="mt-1">
                          <h3 className="heading">
                            CLUBS INVOLVED <br />
                          </h3>
                          <div className="mt-1">
                            <div className="mt-3">
                              {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.clubsinvolved}{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6 mt-3 px-1">
                      <div className="card p-3 mb-2 h-100 greypro">
                        <div className="mt-1">
                          <h3 className="heading">
                            CERTIFICATIONS
                            <br />
                          </h3>
                          <div className="mt-1">
                            <div className="mt-3">
                              {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.certifications}{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex">
                    <div className="col-xl-6 mt-3 px-1">
                      <div className="card p-3 mb-2 h-100 greypro">
                        <div className="mt-1">
                          <h3 className="heading">
                            PROJECTS <br />
                          </h3>
                          <div className="mt-1">
                            <div className="mt-3">
                              {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.projects}{" "}
                              </span>{" "}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="col-xl-6 mt-3 px-1">
                      <div className="card p-3 mb-2 h-100 greypro">
                        <div className="mt-1">
                          <h3 className="heading">
                            Internships <br />
                          </h3>
                          <div className="mt-1 ">
                            <div className="mt-3">
                              {" "}
                              <span className="text1 fw-normal fs-5">
                                {post.others}{" "}
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
        </div>
        <p class="mb-0 mt-4 text-center" id="login_para">
                            <a href="/change" class="link_login">
                              Change password
                            </a>
                          </p>
      </div>
    </>
  );
};

export default Student;
