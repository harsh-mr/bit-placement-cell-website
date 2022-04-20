import React, { useContext } from "react";
import "../../assets/css/student.css";
import { useNavigate } from "react-router-dom";
import AdminHeader from "./AdminHeader";
import { Viewstudent } from "../../services/api";
import { useEffect, useState, useReducer } from "react";
import { userContext } from "../../App";
import Cookies from "universal-cookie";
import "../../assets/css/student.css";

const Students = () => {
  const { state, dispatch } = useContext(userContext);

  console.log(state);
  const [post, setpost] = useState({});
  const navigate = useNavigate();

  const cookies = new Cookies();

  useEffect(() => {
    const Fetchdata = async () => {
      let posts = await Viewstudent(cookies.get("usn"));
      console.log(posts[0]);
      setpost(posts[0]);
    };
    Fetchdata();
  }, []);
  const PF = "http://localhost:8000/images/";

  return (
    <>
      <AdminHeader />

      <div className="container-fluid" id="student-body">
        <div className="row">
          <div className="col-xl-3">
            <div className="container  mt-4 mb-4 p-3 d-flex justify-content-center">
              <div className="card p-4 blackpro" id="profilecrd">
                <div
                  className=" image d-flex flex-column justify-content-center align-items-center"
                  id="imgprof"
                >
                  <img
                    className=" rounded-circle "
                    id="profimage"
                    src={PF + post.photo || "https://i.imgur.com/wvxPV9S.png"}
                  />
                  <span className="name mt-3">
                    <span>{post.firstname}</span> <span>{post.surname}</span>
                  </span>{" "}
                  <span className="idd">{post.email}</span>
                  {/* <div className="d-flex flex-row justify-content-center align-items-center gap-2"> <span className="idd1">Oxc4c16a645_b21a</span> <span><i className="fa fa-copy"></i></span> </div> */}
                  <div className="text mt-3">
                    {" "}
                    <span id="spanpro">
                      Eleanor Pena is a creator of minimalistic x bold graphics
                      and digital artwork.
                      <br />
                      <br /> Artist/ Creative Director by Day #NFT minting@ with
                      FND night.{" "}
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
            <div className="col-12 p-0" id="det">
              <div className="card ml-4" id="card5">
                <div className="card-header blackpro">
                  <h1>Student Profile</h1>
                </div>
              </div>
            </div>

            <div className="col-12 mt-0" id="det1">
              <div className="card mx-4" id="card4">
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
                        {post.averagecgpa}
                      </span>
                    </div>
                    <div className="col-6" id="prodetails">
                      <span className="fw-bold fs-5 text-uppercase">
                        EDUCATIONAL GAP -
                      </span>{" "}
                      <span className="fw-normal fs-5 text-capitalize">
                        {post.educationalgap}
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
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 mt-3">
              <div className="container-fluid px-4  mt-1 mb-1" id="details_st">
                <div className="row p-1">
                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          CLUBS INVOLVED <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1 fs-normal fs-5">
                              {post.clubsinvolved}{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          CERTIFICATIONS
                          <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1 fs-normal fs-5">
                              {post.certifications}{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          PROJECTS <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">
                            {" "}
                            <span className="text1 fs-normal fs-5">
                              {post.projects}{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3 mb-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Internships <br />
                        </h3>
                        <div className="mt-1 ">
                          <div className="mt-3">
                            {" "}
                            <span className="text1 fs-normal fs-5">
                              {post.others}{" "}
                            </span>{" "}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-xl-12"> */}
                  <div className="col-12 p-1" id="det">
                    <div className="card m-0 ">
                      <div className="card-header blackpro">
                        <h1 className="fw-normal">Placement</h1>
                      </div>
                    </div>
                  </div>

                  {/* <div className="col-12 mt-3">
              <div className="container  mt-1 mb-1">
                <div className="row"> */}
                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Company Name <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">{post.companyname}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Profile
                          <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">{post.job}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 mt-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          CTC / Stipend <br />
                        </h3>
                        <div className="mt-1">
                          <div className="mt-3">{post.currentctc}</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-12 mt-3 mb-3 px-1">
                    <div className="card p-3 mb-2 h-100 greypro">
                      <div className="mt-1">
                        <h3 className="heading">
                          Message from Placement Team <br />
                        </h3>
                        <div className="mt-1 ">
                          <div className="mt-3">{post.message}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* </div>

              </div>
            </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Students;
