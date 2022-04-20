import AdminHeader from "./AdminHeader";
import { CreateUser } from "../../services/api";
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const url = "http://localhost:8000";
const Create_Users = () => {
  const navigate = useNavigate();
  const initialvalue = {
    USN: "",
    password: "",
  };
  const [update, setupdate] = useState(initialvalue);

  const handlechange = (e) => {
    setupdate({ ...update, [e.target.name]: e.target.value });
    // console.log(update);
  };
  const saveupdate = async () => {
    await axios
      .post(`${url}/createuser`, update) //this form helps to parse into the data's json part
      .then((shre) => {
        console.log("hi", shre);
        if (shre.data.error) {
          console.log("err", shre.data.error);
        } else {
          console.log(shre.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <AdminHeader />
      <div className="container">
        <div className="container-fluid">
          <div className="position-absolute top-50 start-50 translate-middle">
            <h3
              className="d-flex justify-content-center fw-normal"
              style={{ fontSize: "3rem" }}
            >
              Create User
            </h3>
            <div>
              <input
                placeholder="USN"
                name="USN"
                className="form-control rounded-0 my-3"
                style={{ width: "450px" }}
                onInput={(e) => handlechange(e)}
              ></input>
              <input
                placeholder="Password"
                name="password"
                type="password"
                className="form-control rounded-0 my-3"
                style={{ width: "450px" }}
                onInput={(e) => handlechange(e)}
              ></input>
            </div>
            <div className="d-flex justify-content-center">
              <button
                type="button"
                className="btn btn-outline-dark rounded-0"
                onClick={() => saveupdate()}
              >
                Create
              </button>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_Users;
