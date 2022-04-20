import React from "react";
import AdminHeader from "./AdminHeader";
import { useState } from "react";
import { studentquery } from "../../services/api";
import axios from "axios";
import "../../assets/css/EligibleCandidates.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import { dangertoast, successtoast } from "../Toasts";

toast.configure();

const url = "http://localhost:8000";
const EligibleCandidates = () => {
  const navigate = useNavigate();
  const cookies = new Cookies();
  const [click, setclick] = useState(1);
  const notify = (err) =>
    toast.error(err, {
      theme: "dark",
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const initialvalue = {
    marks10th: 0,
    marks12th: 0,
    averagecgpa: 0,
    totaloffers: 0,
    nofbacks: 0,
    ctcoffered: 0,
    educationalgap: 0,
    company: "",
    job: "",
  };

  const [info, setinfo] = useState(initialvalue);

  const sendMail = async () => {
    console.log(info);
    try {
      let res = await axios({
        method: "post",
        url: `${url}/sendMail`,
        headers: {
          "Content-type": "application/json",
        },
        data: {
          post,
          company: info.company,
          job: info.job,
          ctcoffered: info.ctcoffered,
        },
      });
      if (res.data.error) {
        dangertoast(res.data.error);
        // window.alert(res.data.error)
      } else {
        successtoast(res.data.message);
        // window.alert(res.data.message)
      }
    } catch (error) {
      console.log("error while getting data", error);
    }
  };

  const Excel = async () => {
    try {
      let res = await axios({
        method: "post",
        url: `${url}/excel`,
        headers: {
          "Content-type": "application/json",
        },
        data: post,
      });
      if (res.data.error) {
        dangertoast(res.data.error);
        // window.alert(res.data.error)
      } else {
        successtoast(res.data.message);
        // window.alert(res.data.message)
      }
    } catch (error) {
      console.log("error while getting data", error);
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    // setinfo({...info,[e.target.name]:e.target.value});
    setinfo({ ...info, [name]: parseInt(value, 10) });
    // console.log(info);
    // console.log(update);
  };

  const handlechange1 = (e) => {
    // const { name, value } = e.target;
    // setinfo({...info,[e.target.name]:e.target.value});
    setinfo({ ...info, [e.target.name]: e.target.value });
    // console.log(info);
    console.log(info);
    // console.log(update);
  };

  const [post, setpost] = useState([]);

  const saveinfo = async () => {
    // setpost([...post, await studentquery(info)]);
    // console.log(post);
    console.log(click);
    setclick(0);

    await axios
      .get(`http://localhost:8000/admin/eligiblecandidate`, {
        params: {
          marks10th: info.marks10th,
          marks12th: info.marks12th,
          averagecgpa: info.averagecgpa,
          // totaloffers:info.totaloffers,
          nofbacks: info.nofbacks,
          ctcoffered: info.ctcoffered,
          educationalgap: info.educationalgap,
          totaloffers: 1,
        },
      })
      .then((res) => {
        if (res.data.error) {
          console.log(res.data.error);
          // console.log("upar");
          setpost([]);
          // notify(res.data.error);
          dangertoast(res.data.error);
        } else {
          console.log(res.data);

          setpost(res.data);
          // console.log(post);

          console.log("helloa");
          // console.log("a");
          // notify();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="eligible_body" className={{ background: "#fff" }}>
        <AdminHeader />
        <div class="px-5 my-2">
          <div class="row">
            <div class="col-12">
              <div id="ec_card" class="card">
                <div
                  class="card-body"
                  style={{ background: "black", color: "white" }}
                >
                  <div class="row search-body text-center">
                    <h1>Eligible Student Filter</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-12">
              <div id="ec_card" class="card card-margin rounded-0">
                <div class="card-body">
                  <div class="row search-body">
                    <div class="col-lg-12">
                      <div class="row">
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white" }}
                        >
                          <div class="fw-normal p-1">10TH CGPA</div>
                          <input
                            class="form-control"
                            type="number"
                            name="marks10th"
                            onChange={(e) => handlechange(e)}
                          ></input>
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white", margin: "0% auto" }}
                        >
                          <div class="fw-normal p-1">12TH/PU MARKS</div>
                          <input
                            class="form-control"
                            name="marks12th"
                            onChange={(e) => handlechange(e)}
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white" }}
                        >
                          <div class="fw-normal p-1">
                            UG/PG Percentage or Marks
                          </div>
                          <input
                            class="form-control"
                            name="averagecgpa"
                            onChange={(e) => handlechange(e)}
                            type="number"
                          />
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white", margin: "0% auto" }}
                        >
                          <div class="fw-normal p-1">Number of Backs</div>
                          <input
                            class="form-control"
                            name="nofbacks"
                            onChange={(e) => handlechange(e)}
                            type="number"
                          />
                        </div>
                      </div>
                      <div class="row">
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white" }}
                        >
                          <div class="fw-normal p-1">Education Gap</div>
                          <input
                            class="form-control"
                            name="educationalgap"
                            onChange={(e) => handlechange(e)}
                            type="number"
                          />
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white", margin: "0% auto" }}
                        >
                          <div class="fw-normal p-1">CTC Offered</div>
                          <input
                            class="form-control"
                            name="ctcoffered"
                            onChange={(e) => handlechange(e)}
                            type="number"
                          />
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white" }}
                        >
                          <div class="fw-normal p-1">Company Name</div>
                          <input
                            class="form-control"
                            name="company"
                            onChange={(e) => handlechange1(e)}
                            type="text"
                          />
                        </div>
                        <div
                          class="col-lg-6 col-md-6 col-sm-12 py-2"
                          style={{ background: "white", margin: "0% auto" }}
                        >
                          <div class="fw-normal p-1">Job Role</div>
                          <input
                            class="form-control"
                            name="job"
                            onChange={(e) => handlechange1(e)}
                            type="text"
                          />
                        </div>
                      </div>
                      <div class="row"></div>

                      <div class="text-center py-2">
                        <button
                          onClick={() => {
                            saveinfo();
                          }}
                          type="button"
                          class="btn btn-outline-dark rounded-0 text-center "
                          style={{ margin: "auto", boxShadow: "none" }}
                        >
                          {" "}
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* console.log(click); */}

          {/* {post.length===0  &&  click===0 && notify()} */}

          {/* {post.length===0  && <div class="_36fx1h _6t1WkM _3HqJxg"><div class="_1AtVbE col-12-12"><div class="_1sHuca"><img src="//static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/error-no-search-results_2353c5.png"/><div class="_3uTeW4">Sorry, no results found!</div><div class="CqJpD_">Please check the spelling or try searching for something else</div></div></div></div> } */}

          {post.length > 0 && (
            <div class="row">
              <div class="col-12">
                <div id="ec_card" class="card card-margin">
                  <div class="card-body">
                    <div class="row search-body">
                      <div class="col-lg-12">
                        <div class="search-result">
                          <div class="result-header">
                            <div class="row">
                              <div class="col-sm-6 mt-2 px-4">
                                <div class="records d-flex" id="down_ec1">
                                  Showing : <b> {post.length} </b>{" "}
                                  <span className="px-1">Result</span>
                                </div>
                              </div>
                              <div class="col-sm-6">
                                <div
                                  id="down_ec"
                                  class="records d-flex justify-content-end"
                                >
                                  <button
                                    className="btn btn-dark rounded-1 m-2 mt-0 p-2"
                                    onClick={() => sendMail()}
                                  >
                                    Send mail
                                  </button>
                                  <button
                                    button
                                    className="btn btn-dark rounded-1 m-2 mt-0 p-2"
                                    onClick={() => Excel()}
                                  >
                                    Download
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="result-body">
                            <div class="table-responsive">
                              <table class="table widget-26">
                                <tbody>
                                  {/* <thead style={{width:"100%"}}> */}

                                  <tr>
                                    <td>
                                      <div class=" widget-26-job-category font-weight-bold fs-5 text-uppercase">
                                        <span class="font-weight-bold fs-5 text-uppercase">
                                          Sr No.
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class=" widget-26-job-category font-weight-bold fs-5 text-uppercase">
                                        <span class="font-weight-bold fs-5 text-uppercase">
                                          USN
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class=" widget-26-job-category font-weight-bold fs-5 text-uppercase">
                                        <span class="font-weight-bold fs-5 text-uppercase">
                                          NAME
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class=" widget-26-job-category font-weight-bold fs-5 text-uppercase">
                                        <span class="font-weight-bold fs-5 text-uppercase">
                                          EMAIL
                                        </span>
                                      </div>
                                    </td>
                                    <td>
                                      <div class="widget-26-job-category ">
                                        <span class="font-weight-bold fs-5 text-uppercase">
                                          BRANCH
                                        </span>
                                      </div>
                                    </td>
                                    <td></td>
                                  </tr>

                                  {post.map((item, index) => {
                                    return (
                                      <tr>
                                        <td>
                                          <div class=" font-weight-bold fs-5 text-uppercase mx-4">
                                            {++index}
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-title fs-5">
                                            <Link
                                              to="/students"
                                              onClick={() => {
                                                cookies.set("usn", item.USN, {
                                                  secure: true,
                                                });
                                              }}
                                            >
                                              {item.USN}
                                            </Link>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-info">
                                            <p class="type m-0 font-weight-bold fs-5 text-capitalize">
                                              {item.firstname} {item.surname}
                                            </p>
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-salary font-weight-bold fs-5 ">
                                            {item.email}
                                          </div>
                                        </td>
                                        <td>
                                          <div class="widget-26-job-salary font-weight-bold fs-5 text-uppercase">
                                            {item.branch}
                                          </div>
                                          {/* <div class="widget-26-job-category bg-soft-base">
                                                           
                                                             <span class="font-weight-bold fs-5 text-uppercase">{item.branch}</span>
                                                         </div> */}
                                        </td>
                                        <td></td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EligibleCandidates;
