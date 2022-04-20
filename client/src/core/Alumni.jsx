import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import VerticalHeader from "../components/VerticalHeader";
import NavigationLink from "../components/NavigationLink";
import "../assets/css/Alumni.css";
// import "../assets/css/VerticalHeader.css";
import { Link } from "react-router-dom";
import "../assets/css/Mission.css";

const Alumni = () => {
  document.title = "Alumni";

  const AlumniFeedback = () => {
    // const Review = {
    //   id: 1,
    //   name: "Susan Smith",
    //   branch: "Computer Science and Engineering - 2020",
    //   job: "One Direct - Full Stack Developer",
    //   image:
    //     "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    //   text: "When you are passionate about what you do, you would have reached halfway towards the goal. I always tried to enhance my skills by participating in technical events conducted in and out of the college. I concentrated on academics and also practiced coding on competitive coding platforms. Placement Center gave me the opportunity to enhance my skills and I was placed in OneDirect as Full Stack Developer with a package of Rs: 20.LPA. I express my profound gratitude for my teachers of BIT for helping me in achieving my goals.",
    // };

    return (
      <div className="wrap-feedback">
        <article className="review">
          <div className="desc-container">
            <h3 className="author">Ananya Madhusudhan</h3>
            <h3 className="branch">Computer Science and Engineering - 2020</h3>
            <h3 className="job">One Direct - Full Stack Developer</h3>
            <p className="info">
              "When you are passionate about what you do, you would have reached
              halfway towards the goal. I always tried to enhance my skills by
              participating in technical events conducted in and out of the
              college. I concentrated on academics and also practiced coding on
              competitive coding platforms. Placement Center gave me the
              opportunity to enhance my skills and I was placed in OneDirect as
              Full Stack Developer with a package of Rs: 20.LPA. I express my
              profound gratitude for my teachers of BIT for helping me in
              achieving my goals."
            </p>
          </div>
          <div className="img-container">
            <img
              src="https://bit-bangalore.edu.in/wp-content/uploads/2020/10/ananya.jpg"
              alt=""
              className="person-img"
            />
          </div>
        </article>

        <article className="review">
          <div className="img-container">
            <img
              src="https://bit-bangalore.edu.in/wp-content/uploads/2020/10/Sathvika.R.V.jpg"
              alt=""
              className="person-img"
            />
          </div>
          <div className="desc-container right">
            <h3 className="author">Sathvika.R.V</h3>
            <h3 className="branch">
              Information Science and Engineering - 2019
            </h3>
            <h3 className="job">CISCO - Network Engineer</h3>
            <p className="info">
              "I am Sathvika RV, alumni of BIT. My journey of four years in the
              college was one of the most memorable ones. Our teaching and
              non-teaching staff was very supportive throughout. Being placed
              through campus, I have the privilege to mention that BIT has one
              of the finest placements records. Our Placement Center gets the
              best possible companies which helps students have the best career
              ahead. I am grateful and proud to be a BITian!!"
            </p>
          </div>
        </article>

        <article className="review">
          <div className="desc-container">
            <h3 className="author">Priya Ravi</h3>
            <h3 className="branch">Computer Science and Engineering – 2019</h3>
            <h3 className="job">Target Corporation</h3>
            <p className="info">
              "I graduated from Computer Science and Engineering from BIT during
              2019. Four years of college had been a rollercoaster of emotions
              that I enjoyed the most. I have immense gratitude towards all my
              lecturers, non-teaching staffs and my friends. They have built me
              up and helped me discover my true potentials. Thanks to the
              guidance and opportunities provided by the placement cell that i'm
              placed in Target with a good package."
            </p>
          </div>
          <div className="img-container">
            <img
              src="https://bit-bangalore.edu.in/wp-content/uploads/2020/10/Priya-Ravi.jpg"
              alt=""
              className="person-img"
            />
          </div>
        </article>

        <article className="review">
          <div className="img-container">
            <img
              src="https://bit-bangalore.edu.in/wp-content/uploads/2020/10/Ajay-Krishna.jpg"
              alt=""
              className="person-img"
            />
          </div>
          <div className="desc-container right">
            <h3 className="author">Ajay Krishna</h3>
            <h3 className="branch">Mechanical Engineering - 2019</h3>
            <h3 className="job">
              Boeing - Mechanical Design and Analysis Engineer
            </h3>
            <p className="info">
              "The college encourages the development of necessary soft-skills
              along with Technical Knowledge. The Training and placement cell
              was instrumental in inviting top companies to visit the campus
              which helped me to start my career in one of the prestigious
              organization Boeing International Corporation India Pvt. Ltd."
            </p>
          </div>
        </article>

        <article className="review">
          <div className="desc-container">
            <h3 className="author">Gunashree G R</h3>
            <h3 className="branch">M.Tech – Computer Science - 2019</h3>
            <h3 className="job">DELL – EMC - Software Enginee</h3>
            <p className="info">
              "Hi, my name is Gunashree G. R. I pursued B.E in Computer Science
              and Engineering from B.I.T It was a really good holistic education
              that I received. I got placed successfully in two companies
              Cognizant and G.E. I worked at Cognizant for 4 years. Later I
              joined for M.Tech in BIT during (20017-2019). With the best
              efforts of the placement cell I have got placed at Dell EMC and
              currently working there and living my dreams".
            </p>
          </div>
          <div className="img-container">
            <img
              src="https://bit-bangalore.edu.in/wp-content/uploads/2020/10/Gunashree-G-R-.jpg"
              alt=""
              className="person-img"
            />
          </div>
        </article>
      </div>
    );
  };

  const AlumniInfo = () => {
    return (
      <div>
        <div className="title-wrapper">
          <div className="title-desc">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore
              earum harum nam sapiente quis rem nihil in cupiditate iusto omnis
              sed qui repellat, temporibus soluta repudiandae facilis magnam
              esse, veniam aliquid accusamus aperiam? Necessitatibus repellat,
              laborum error, labore autem officia quis quo vel eligendi eum
              illum numquam eaque est qui!
            </p>
          </div>
        </div>
        <div className="body-title">
          <h3>Alumni Feedback</h3>
          <AlumniFeedback />
        </div>
      </div>
    );
  };

  const AlumniDsc = () => {
    return (
      <div>
        <VerticalHeader />
        <div className="page-wrapper msn_pw position-relative">
          <div className="description" id="msn_desc" >
            <NavigationLink />
            <AlumniInfo />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <AlumniDsc />
      <Footer />
    </div>
  );
};

export default Alumni;
