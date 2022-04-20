import React, { useContext } from "react";
import logo from "../../assets/img/bitlogo.png";
import "../../assets/css/Header.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../App";
import axios from "axios";
import Cookies from "universal-cookie";
import { dangertoast, successtoast } from "../Toasts";

const url = "http://localhost:8000";
const header = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { state, dispatch } = useContext(userContext);
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const navigate = useNavigate();
  const cookies = new Cookies();
  const Logout = async () => {
    await axios({
      method: "post",
      url: `${url}/logout`,
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((shre) => {
      console.log(shre);
      if (shre.data.error) {
        //return( M.toast({html:shre.data.error}))
        dangertoast(shre.data.error);
        // return window.alert(shre.data.error);
      } else {
        dispatch({ type: "CLEAR" });
        cookies.remove("admins", { secure: true });
        cookies.remove("usn", { secure: true });
        //return( M.toast({html:shre.data.message,classes:"#4caf50 green"})),
        // window.alert(shre.data.message);
        successtoast(shre.data.message);
        navigate("/login");
      }
    });
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light d-flex justify-content-between header">
        <div className="d-flex logo">
          <img src={logo} alt="logo" width="60" />
          <div className="clgName">
            <h3>Bangalore</h3>
            <h3>Institute of</h3>
            <h3>Technology</h3>
          </div>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="items collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/admin">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Dashboard
                </a>
              </li>
            </Link>
            <Link to="/admin/searchstudent">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Search Student
                </a>
              </li>
            </Link>
            <Link to="/admin/studentdata">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Student Data
                </a>
              </li>
            </Link>
            <Link to="/admin/eligiblecandidates">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Eligible Candidates
                </a>
              </li>
            </Link>
            <div className="login d-flex d-lg-none justify-content-center">
              <Link to="/login">
                <button
                  type="button"
                  class="btn btn-dark login-btn"
                  onClick={() => Logout()}
                >
                  Logout
                </button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="login d-none d-lg-flex">
          <Link to="/login">
            <button
              type="button"
              class="btn btn-dark login-btn"
              onClick={() => Logout()}
            >
              Logout
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default header;
