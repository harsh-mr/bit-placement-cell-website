import React from "react";
import Header from "../components/Header";
import NavigationLink from "../components/NavigationLink";
import VerticalHeader from "../components/VerticalHeader";
import "../assets/css/Dump.css";
import ImgPrincipal from "../assets/img/principal.jpg";
import Footer from "../components/Footer";
// import Footer from "../components/Footer";
import "../assets/css/Mission.css";

const About = () => {
  document.title = "About";

  const AboutDesc = () => {
    return (
      <div>
        <div className="aboutDesc-wrapper d-flex">
          <div
            className="detail"
            style={({ width: "50%" }, { padding: "30px 30px 30px 0" })}
          >
            <h4 className="designation">Principal</h4>
            <p className="designation-holder">
              <strong style={{ fontWeight: "500" }}>Dr. Aswath.M.U</strong>
              <br />
              BIT's 17th Principal, July 2012 – present
            </p>
            <p className="designation-holder">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur corporis error accusamus fugit repellendus laborum
              impedit? Quisquam aut odit voluptatibus?
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              illo, at adipisci vero consectetur voluptate suscipit sapiente
              similique enim. Molestiae obcaecati repudiandae, nostrum et ex
              dolorem facilis repellat tempore harum!
            </p>
          </div>
          <div
            className="person-img"
            style={({ width: "50%" }, { padding: "30px 0 30px 60px" })}
          >
            <img
              src={ImgPrincipal}
              alt="principal"
              style={{ height: "240px" }}
            />
          </div>
        </div>
      </div>
    );
  };

  const AboutList = () => {
    return (
      <div className="page-wrapper msn_pw">
        <div className="description" id="msn_desc">
          <NavigationLink />
          <div className="title-wrapper">
            <div className="title-desc">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Blanditiis, consequuntur! Reiciendis sunt nesciunt, debitis eum
                amet ducimus ratione ex in dignissimos ea odit. Voluptate
                voluptatem sapiente perferendis, laborum labore ullam harum
                veniam ipsa neque placeat aliquid deserunt ab, vitae
                consectetur.
              </p>
            </div>
          </div>
          <div className="body-title">
            <h3>Leadership</h3>
          </div>
          <AboutDesc />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <VerticalHeader />
      <AboutList />
      <Footer />
    </div>
  );
};

export default About;
