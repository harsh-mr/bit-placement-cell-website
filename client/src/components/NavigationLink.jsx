import React from "react";
import { Link } from "react-router-dom";

const NavigationLink = () => {
  return (
    <div className="d-flex">
      <Link to="/">
        <a
          className="nav-link"
          aria-current="page"
          href="#"
          style={{ paddingLeft: "0" }}
        >
          Home
        </a>
      </Link>
      <div style={{ padding: "8px 16px 8px 0" }}>/ {document.title}</div>
    </div>
  );
};

export default NavigationLink;
