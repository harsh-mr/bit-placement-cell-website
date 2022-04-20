import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";

const StudentData = () => {
  const cookies = new Cookies();

  const intitialvalue = {
    branch: "",
  };
  const [data, setdata] = useState(intitialvalue);
  const [post, setpost] = useState([]);

  const handlechange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
    // console.log(update);
  };

  const saveupdate = async () => {
    console.log(data);

    await axios
      .get(`http://localhost:8000/admin/studentdata`, {
        params: {
          branch: data.branch,
        },
      })
      .then((res) => {
        if (res.error) {
          console.log(res.data.error);
        } else {
          console.log(res.data);

          setpost(res.data);
          // if(post.length===0){
          //   // console.log("hello");
          //   // notify();
          // }
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
        <div className="container-fluid d-flex justify-content-center py-5">
          <div className="byBranch px-5">
            <h3 className="py-1 fw-bold fs-1">Search by Branch</h3>
          </div>
          <div className="d-flex">
            <div class="dropdown px-2" style={{ paddingTop: "10px" }}>
              <select
                id="branch_"
                onChange={(e) => handlechange(e)}
                type="text"
                name="branch"
                className="form-control rounded-0"
                placeholder="select branch"
              >
                <option value="CSE">Branch</option>
                <option value="CSE">CSE</option>
                <option value="ISE">ISE</option>
                <option value="AI">AI</option>
                <option value="ECE">ECE</option>
                <option value="CIV">CIV</option>
                <option value="EEE">EEE</option>
                <option value="TLE">TLE</option>
              </select>
            </div>
            <div>
              <button
                className="btn btn-outline-dark rounded-0"
                type="button"
                style={{ boxShadow: "none", marginTop: "10px" }}
                onClick={() => {
                  saveupdate();
                }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <SearchByBranch /> */}
      {/* <Table /> */}

      <div className="container-fluid d-flex justify-content-center py-5">
        <table class="table" style={{ width: "80%" }}>
          <thead>
            <tr>
              <th scope="col">Sr. No.</th>
              <th scope="col">USN</th>
              <th scope="col">NAME</th>
              <th scope="col">BRANCH</th>
            </tr>
          </thead>
          <tbody>
            {post.map((info, index) => {
              console.log(info);
              return (
                <tr>
                  <th scope="row">{++index}</th>
                  <td>
                    <Link
                      to="/students"
                      onClick={() => {
                        cookies.set("usn", info.USN, { secure: true });
                      }}
                    >
                      {info.USN}
                    </Link>
                  </td>
                  <td>
                    <div>
                      {" "}
                      <p class="type  text-uppercase">
                        {info.firstname} {info.surname}
                      </p>{" "}
                    </div>
                  </td>
                  <td>{info.branch}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentData;
