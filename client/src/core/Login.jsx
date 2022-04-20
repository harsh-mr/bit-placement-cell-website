import React from "react";
import Header from "../components/Header";
import "../assets/css/Login.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../App";
import Cookies from "universal-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { dangertoast, successtoast } from "./Toasts";
axios.defaults.withCredentials = true;

const url = "http://localhost:8000";
const Login = () => {
  const { state, dispatch } = useContext(userContext);

  console.log(state);
  const initialvalue2 = {
    USN: "",
    password: "",
  };
  const initialvalue1 = {
    email: "",
    password: "",
  };
  const cookies = new Cookies();
  const [update2, setupdate2] = useState(initialvalue2);
  const [update1, setupdate1] = useState(initialvalue1);
  const navigate = useNavigate();

  const handlechange1 = (e) => {
    setupdate1({ ...update1, [e.target.name]: e.target.value });
  };
  const handlechange2 = (e) => {
    setupdate2({ ...update2, [e.target.name]: e.target.value });
    // console.log(update);
  };

  const saveupdate1 = async () => {
    await axios({
      method: "post",
      url: `${url}/loginfaculty`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: update1,
    }).then((shre) => {
      console.log(shre);
      if (shre.data.error) {
        //return( M.toast({html:shre.data.error}))
        dangertoast(shre.data.error);
        // return window.alert(shre.data.error);
      } else {
        cookies.set("admins", shre.data.user._id, { secure: true });
        dispatch({ type: "ADMIN", payload: shre.data.user._id });
        //return( M.toast({html:shre.data.message,classes:"#4caf50 green"})),
        successtoast(shre.data.message);
        navigate(`/admin`);

        //      return window.alert(shre.data.message);
      }
    });
  };
  const saveupdate2 = async () => {
    console.log(update2);
    await axios({
      method: "post",
      url: `${url}/loginstudent`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
      data: update2,
    })
      .then((shre) => {
        console.log(shre);
        if (shre.data.error) {
          //return( M.toast({html:shre.data.error}))
          dangertoast(shre.data.error);
          // return window.alert(shre.data.error);
        } else {
          //  cookies.set("jwt",shre.data.token,{httpOnly:true})
          cookies.set("user", shre.data.user.USN, { secure: true }); //if u can't understand this then just cnsole log shre once and as user is an object so we need to stringify it
          dispatch({ type: "USER", payload: shre.data.user.USN });

          successtoast("Logged in");
          navigate(`/student`);

          //  return window.alert(shre.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div id="login-body">
      {/* <a href="https://front.codes/" class="logo" target="_blank">
          <img src="https://assets.codepen.io/1462889/fcy.png" alt=""/>
        </a> */}
      <div id="loginbg"></div>
      <Header />
      <div id="login_section" class="section">
        <div class="container">
          <div class="row  justify-content-center">
            <div class="col-12 text-center align-self-center pt-5">
              <div
                id="login_section"
                class="section pb-5 pt-5 pt-sm-2 text-center"
              >
                <h6 id="login_h6" class="mb-0 pb-3">
                  <span id="login_span">Student </span>
                  <span id="login_span">Admin</span>
                </h6>
                <input
                  class="checkbox"
                  type="checkbox"
                  id="reg-log"
                  name="reg-log"
                />
                <label for="reg-log"></label>
                <div class="card-3d-wrap mx-auto">
                  <div class="card-3d-wrapper">
                    <div class="card-front">
                      <div class="center-wrap">
                        <div id="login_section" class="section text-center">
                          <h4 id="login_h4" class="mb-4 pb-3">
                            STUDENT
                          </h4>
                          <div id="login_form-group" class="form-group">
                            <input
                              type="email"
                              name="USN"
                              onInput={(e) => handlechange2(e)}
                              class="login_form-style form-style"
                              placeholder="USN"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="i login_input-icon nput-icon uil uil-at"></i>
                          </div>
                          <div id="login_form-group" class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              onInput={(e) => handlechange2(e)}
                              class="login_form-style form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon login_input-icon  uil uil-lock-alt"></i>
                          </div>
                          <button
                            onClick={() => saveupdate2()}
                            class="bt login_btn  mt-4"
                          >
                            LOGIN
                          </button>
                          <p class="mb-0 mt-4 text-center" id="login_para">
                            <a href="/reset" class="link_login">
                              Forgot your password?
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div class="card-back">
                      <div class="center-wrap">
                        <div id="login_section" class="section text-center">
                          <h4 id="login_h4" class="mb-4 pb-3">
                            ADMIN
                          </h4>

                          <div id="login_form-group" class="form-group mt-2">
                            <input
                              type="email"
                              name="email"
                              onInput={(e) => handlechange1(e)}
                              class="login_form-style form-style"
                              placeholder="Your Email"
                              id="logemail"
                              autocomplete="off"
                            />
                            <i class="input-icon login_input-icon  uil uil-at"></i>
                          </div>
                          <div id="login_form-group" class="form-group mt-2">
                            <input
                              type="password"
                              name="password"
                              onInput={(e) => handlechange1(e)}
                              class="login_form-style form-style"
                              placeholder="Your Password"
                              id="logpass"
                              autocomplete="off"
                            />
                            <i class="input-icon login_input-icon  uil uil-lock-alt"></i>
                          </div>
                          <button
                            onClick={() => saveupdate1()}
                            class="btn login_btn mt-4"
                          >
                            LOGIN
                          </button>
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
  );
};

export default Login;
