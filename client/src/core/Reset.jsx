import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "../components/Header";
import "../assets/css/Login.css";
//import '../App.css';
import { Link } from "react-router-dom";

const url = "http://localhost:8000";
const Reset = () => {
  const [USN, setUSN] = useState("");
  const navigate = useNavigate();

  const PostData = async () => {
    console.log(USN);
    try {
      let res = await axios({
        method: "post",
        url: `${url}/resets`,
        headers: {
          "Content-type": "application/json",
        },
        data: { USN: USN },
      });
      console.log(res);
      // setTimeout(() => {

      // }, 3000);
      navigate("/login");
    } catch (error) {
      console.log("error while getting data", error);
    }
  };

  return (
    <div>
      <div>
        <Header />
        <div id="loginbg"></div>
        <div id="login_section" class="section">
          <div class="container">
            <div class="row  justify-content-center">
              <div class="col-12 text-center align-self-center pt-5">
                <div
                  id="login_section"
                  class="section pb-5 pt-5 pt-sm-2 text-center"
                >
                  <div class="card-3d-wrap mx-auto">
                    <div class="card-3d-wrapper">
                      <div class="card-front">
                        <div>
                          <Link to="/login">
                            <h3 className="fs-4 my-3 mx-4 d-flex justify-content-start">
                              <i
                                class="fas fa-arrow-left"
                                style={{ color: "white" }}
                              ></i>
                            </h3>
                          </Link>
                        </div>
                        <div class="center-wrap">
                          <div id="login_section" class="section text-center">
                            <h4 id="login_h4" class="mb-4 pb-3">
                              STUDENT
                            </h4>
                            <div id="login_form-group" class="form-group">
                              <input
                                type="email"
                                name="USN"
                                onInput={(e) => setUSN(e.target.value)}
                                class="login_form-style form-style"
                                placeholder="Enter Your USN"
                                id="logemail"
                                autocomplete="off"
                              />
                              <i class="i login_input-icon nput-icon uil uil-at"></i>
                            </div>
                            <button
                              onClick={() => PostData()}
                              class="bt login_btn  mt-4"
                            >
                              ENTER
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
    </div>
  );
};

export default Reset;
