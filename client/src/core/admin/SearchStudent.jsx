import React, { useState } from "react";
import AdminHeader from "./AdminHeader";
import axios from "axios";
import { Link } from "react-router-dom";
import Cookies from "universal-cookie";
import "../../assets/css/SearchStudents.css";
const url = "http://localhost:8000";
const Search = () => {
  const [search, setSearch] = useState("");
  const [list, setList] = useState([]);

  const cookies = new Cookies();

  const Searches = async (srch) => {
    let uppercasetext = srch.toUpperCase(); 
    setSearch(uppercasetext);
    await axios({
      method: "get",
      url: `${url}/search/${srch}`,
      headers: {
        "Content-Type": "application/json",
      },
    }) //this form helps to parse into the data's json part
      .then((shre) => {
        if (shre.data.error) {
          return window.alert(shre.data.error);
        } else {
          console.log(shre.data);
          setList(shre.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container">
      <div className="container-fluid">
        <div
          id="search_ss"
          className="row height d-flex justify-content-center align-items-center py-4"
        >
          <h3
            className="d-flex justify-content-center"
            style={{ fontSize: "3.4rem" }}
          >
            Search
          </h3>
          <div>
            <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4 d-flex">
              <div class="input-group">
                <input
                  type="text"
                  style={{ width: "75%", fontSize: "30px" }}
                  placeholder="Enter USN"
                  value={search}
                  onChange={(e) => {
                    Searches(e.target.value);
                  }}
                  aria-describedby="button-addon1"
                  class="form-control ml-5 border-0 bg-light"
                />
                <div class="input-group-append">
                  <button
                    id="button-addon1"
                    type="submit"
                    class="btn btn-light
                 text-primary"
                    onClick={() => {
                      setList([]);
                    }}
                    style={{ boxShadow: "none" }}
                  >
                    <i
                      style={{ color: "black" }}
                      class="fas fa-times-circle fa- fa-3x"
                      aria-hidden="true"
                    ></i>
                  </button>
                </div>
              </div>
            </div>

            {/* <input
              type="text"
              className="form-control rounded-0"
              style={{ width: "100%" }}  placeholder="Enter USN"  value={search} onChange={(e)=>{Searches(e.target.value)}}
            /> */}
            {/* <button
              className="btn btn-outline-dark rounded-0"
              style={{ boxShadow: "none" }} onClick={()=>{setList([])}}
            >
              <i class="fas fa-times-circle fa-3x"  aria-hidden="true" ></i>
              
            </button> */}
          </div>
          <div style={{ paddingTop: "20px" }}>
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">USN</th>
                  <th scope="col">NAME</th>
                  <th scope="col">BRANCH</th>
                </tr>
              </thead>
              <tbody>
                {list.map((item, index) => {
                  return (
                    <tr>
                      <th scope="row">{++index}</th>
                      <td>
                        <Link
                          to="/students"
                          onClick={() => {
                            cookies.set("usn", item.USN, { secure: true });
                          }}
                        >
                          {item.USN}
                        </Link>
                      </td>
                      <td>
                        {item.firstname} {item.surname}
                      </td>
                      <td>{item.branch}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchStudent = () => {
  return (
    <div>
      <AdminHeader />
      <Search />
    </div>
  );
};

export default SearchStudent;
