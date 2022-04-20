import React from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
import NavigationLink from "../components/NavigationLink";
// import Footer from "../components/Footer";

const Resources = () => {
  document.title = "Resources";

  const AboutResources = () => {
    return (
      <div className="page-wrapper">
        <div className="description">
          <NavigationLink />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <VerticalHEader />
      <AboutResources />
    </div>
  );
};

export default Resources;
