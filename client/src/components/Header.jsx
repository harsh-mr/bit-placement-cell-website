import React from "react";
import logo from "../assets/img/bitlogo.png";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";

const header = () => {
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
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse items" id="navbarNav">
          <ul className="navbar-nav">
            <Link to="/">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Home
                </a>
              </li>
            </Link>
            <Link to="/mission">
              <li className="nav-item px-3">
                <a className="nav-link link" aria-current="page" href="#">
                  Mission
                </a>
              </li>
            </Link>
            <Link to="/placement">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Placement
                </a>
              </li>
            </Link>
            <Link to="/resources">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Resources
                </a>
              </li>
            </Link>
            <Link to="/alumni">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  Alumni
                </a>
              </li>
            </Link>
            <Link to="/about">
              <li className="nav-item px-3">
                <a className="nav-link link" href="#">
                  About
                </a>
              </li>
            </Link>
            <div className="login d-flex d-lg-none justify-content-center">
              <Link to="/login">
                <button type="button" className="btn btn-dark login-btn">
                  Login
                </button>
              </Link>
            </div>
          </ul>
        </div>
        <div className="login d-none d-lg-flex">
          <Link to="/login">
            <button type="button" className="btn btn-dark login-btn">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default header;
