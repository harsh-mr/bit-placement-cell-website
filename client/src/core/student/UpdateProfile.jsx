import React from "react";
import { useState, useContext, useEffect } from "react";
import "../../assets/css/Update_profile.css";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
// import StudentHeader from './StudentHeader';
import { userContext } from "../../App";
import { Viewstudent } from "../../services/api";
import Cookies from "universal-cookie";
import StudentHeader from "./StudentHeader";
import "../../assets/css/updateProfile.css";
import { successtoast, warningtoast } from "../Toasts";

const url = "http://localhost:8000";

const UpdateProfile = () => {
  const [post, setpost] = useState({});
  const { state, dispatch } = useContext(userContext);
  const navigate = useNavigate();
  const cookies = new Cookies();
  const PF = "http://localhost:8000/images/";
  // const [post, setpost] = useState({});
  const [file, setFile] = useState(null);
  //console.log(id);

  useEffect(() => {
    if (typeof cookies.get("user") === "undefined") {
      return navigate("/admin");
    }
    const Fetchdata = async () => {
      let posts = await Viewstudent();
      setpost(posts[0]);
    };
    Fetchdata();
  }, []);

  const initialvalue = {
    USN: post.USN,
    firstname: post.firstname,
    surname: post.surname,
    mobileno: post.mobileno,
    branch: post.branch,
    email: post.email,
    class12marks: post.class12marks,
    class10marks: post.class10marks,
    averagecgpa: post.averagecgpa,
    linkresume: post.linkresume,
    linklinkedin: post.linklinkedin,
    linkgithub: post.linkgithub,
    linkglassdoor: post.linkglassdoor,
    clubsinvolved: post.clubsinvolved,
    certifications: post.certifications,
    projects: post.projects,
    photo: post.photo,
    others: post.others,
    noofbacks: post.noofbacks,
    educationalgap: post.educationalgap,
    detailsof: post.detailsof,
  };
  useEffect(() => {
    const s = typeof update.email;
    if (s === "undefined") {
      console.log(initialvalue);
      setupdate(initialvalue);
    }
  });

  const [update, setupdate] = useState(initialvalue);

  const handlechange = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
    // console.log(update);
  };

  const saveupdate = async () => {
    if (file) {
      // console.log(file);
      const data = new FormData();
      const filename = new Date().getTime() + file.name;
      data.append("name", filename);
      data.append("file", file);
      // newPost.photo = filename;
      update.photo = filename;
      // console.log(filename);
      console.log(data);
      console.log(Array.from(data.entries()));
      try {
        await axios.post(`${url}/update/upload`, data);
      } catch (err) {}
    }

    if (Object.values(update).every((el) => typeof el === "undefined")) {
      warningtoast("No Change was made");
      // window.alert("No Change was made");
      return navigate("/student");
    }

    console.log(update.email);
    console.log(update);
    await axios({
      method: "post",
      url: `${url}/update`,
      headers: {
        Authorization: "Bearer " + cookies.get("jwt"),
        header1: cookies.get("user"),
      },
      data: update,
    }).then((res) => {
      console.log(res);
      successtoast("Profile Updated Successfully");
      navigate(`/student`);
    });
  };

  return (
    <>
      <div id="update">
        <StudentHeader />
        <div className="container rounded bg-white mt-5 mb-5">
          <div className="row">
            <div className="col-lg-3 border-right update_body">
              <div
                className="d-flex flex-column align-items-center text-center p-3 py-5 "
                id="up_profile"
              >
                <label htmlFor="fileInput">
                  {file && (
                    <img
                      className="rounded-circle mt-5"
                      style={{ height: "150px", width: "150px" }}
                      src={URL.createObjectURL(file)}
                      alt=""
                    />
                  )}
                  {!file && (
                    <img
                      className=" rounded-circle"
                      style={{ height: "150px", width: "150px" }}
                      id="upimage"
                      src={PF + post.photo || "https://i.imgur.com/wvxPV9S.png"}
                    />
                    //   <img
                    //   className="img-fluid rounded-circle mt-3 mb-2"
                    //   width="150px"
                    //   src={(PF + post.photo) || ("https://i.imgur.com/wvxPV9S.png")}
                    //   alt="upload image"
                    //   // src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    //   ></img>
                  )}

                  <div
                    className="pt-2"
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    <i
                      className="writeIcon fas fa-plus-circle"
                      style={{ paddingTop: "6px", paddingRight: "16px" }}
                    ></i>
                    <p className="text-justify"> Add/Change DP</p>
                  </div>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => setFile(e.target.files[0])}
                />

                <span className="font-weight-bold">
                  {post.firstname} {post.surname}
                </span>
                <span className="text-white-50">{post.email}</span>
                <span> </span>
              </div>

              <div className="mt-2 mb-2 text-center">
                <button
                  onClick={() => {
                    saveupdate();
                  }}
                  className="btn btn-primary profile-button"
                  type="button"
                >
                  Save Profile
                </button>
              </div>
            </div>
            <div className="col-lg-5 border-right">
              <div
                className="p-3 py-5"
                style={{ backgroundColor: "rgb(243, 241, 241)" }}
              >
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h4 className="text-right">Profile Settings</h4>
                </div>
                <div className="row mt-2">
                  <div className="col-md-6">
                    <label className="labels UP_labels">FirstName</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="firstname"
                      className="form-control"
                      defaultValue={post.firstname}
                      placeholder="first name"
                    ></input>
                  </div>
                  <div className="col-md-6">
                    <label className="labels UP_labels">Surname</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="surname"
                      className="form-control"
                      defaultValue={post.surname}
                      placeholder="surname"
                    ></input>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-12">
                    <label className="labels UP_labels">Mobile Number</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="mobileno"
                      className="form-control"
                      defaultValue={post.mobileno}
                      placeholder="enter phone number"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Branch</label>
                    <select
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="branch"
                      className="form-control"
                      placeholder="select branch"
                    >
                      <option value="CSE">CSE</option>
                      <option value="ISE">ISE</option>
                      <option value="AI">AI</option>
                      <option value="ECE">ECE</option>
                      <option value="CIV">CIV</option>
                      <option value="EEE">EEE</option>
                      <option value="TLE">TLE</option>
                    </select>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Email</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="email"
                      className="form-control"
                      defaultValue={post.email}
                      placeholder="Enter email"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Intermediate (%)</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="class12marks"
                      className="form-control"
                      defaultValue={post.class12marks}
                      placeholder="enter className 12 percentage"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">
                      Matriculation (CGPA/Percentage){" "}
                    </label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="class10marks"
                      className="form-control"
                      defaultValue={post.class10marks}
                      placeholder="enter lass 10 CGPA/Percentage"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Average CGPA</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="averagecgpa"
                      className="form-control"
                      defaultValue={post.averagecgpa}
                      placeholder="enter Average cgpa"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Educational Gap</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="number"
                      name="educationalgap"
                      className="form-control"
                      defaultValue={post.educationalgap}
                      placeholder="enter Educational Gap"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">Backlogs</label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="number"
                      name="noofbacks"
                      className="form-control"
                      defaultValue={post.noofbacks}
                      placeholder="enter No. of Backs"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">
                      Link to your Resume
                    </label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="linkresume"
                      className="form-control"
                      defaultValue={post.linkresume}
                      placeholder="enter Link to your resume"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">
                      Link to your Linkedin
                    </label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="linklinkedin"
                      className="form-control"
                      defaultValue={post.linklinkedin}
                      placeholder="enter Link to your linkedin"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">
                      Link to your GitHub
                    </label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="linkgithub"
                      className="form-control"
                      defaultValue={post.linkgithub}
                      placeholder="enter Link to your Git-Hub"
                    ></input>
                  </div>
                  <div className="col-md-12">
                    <label className="labels UP_labels">
                      Link to your Glassdoor
                    </label>
                    <input
                      onChange={(e) => handlechange(e)}
                      type="text"
                      name="linkglassdoor"
                      className="form-control"
                      defaultValue={post.linkgithub}
                      placeholder="enter Link to your Glassdoor"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div
                className="p-3 py-5"
                style={{ backgroundColor: "rgb(243, 241, 241)" }}
              >
                <div className="d-flex justify-content-between align-items-center experience">
                  <span style={{ fontWeight: "bold" }}>Other Details</span>
                </div>
                <br />
                <div className="col-md-12">
                  <label className="labels UP_labels">CLUBS INVOLVED</label>
                  <textarea
                    onInput={(e) => handlechange(e)}
                    className="form-control up_textarea"
                    name="clubsinvolved"
                    defaultValue={post.clubsinvolved}
                    placeholder="experience "
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <label className="labels UP_labels">CERTIFICATIONS</label>
                  <textarea
                    onInput={(e) => handlechange(e)}
                    className="form-control up_textarea"
                    name="certifications"
                    defaultValue={post.certifications}
                    placeholder="Certification details"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <label className="labels UP_labels">PROJECTS</label>
                  <textarea
                    onInput={(e) => handlechange(e)}
                    className="form-control up_textarea"
                    name="projects"
                    defaultValue={post.projects}
                    placeholder="projects and internship details"
                  ></textarea>
                </div>
                <div className="col-md-12">
                  <label className="labels UP_labels">INTERNSHIPS</label>
                  <textarea
                    onInput={(e) => handlechange(e)}
                    className="form-control up_textarea"
                    name="others"
                    defaultValue={post.others}
                    placeholder=" details"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default UpdateProfile;
