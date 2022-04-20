import React from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
import NavigationLink from "../components/NavigationLink";
// import Footer from "../components/Footer";
import "../assets/css/Dump.css";
import "../assets/css/Mission.css";
import Footer from "../components/Footer";

const Mission = () => {
  document.title = "Mission";

  const VisionMission = () => {
    return (
      <div>
        <div className="vision-desc py-3">
          <p style={{ width: "50%" }}>
            To enhance and equip our students with the conceptualized
            employability and professional skills in meeting the dynamic
            challenges of the corporate world and acquaint our faculty members
            with current industrial trends.
          </p>
        </div>
        <div className="mission">
          <h3>Mission</h3>
          <ol type="1">
            <li>To train the students to meet the industry requirements.</li>
            <li>To guide the students to achieve their career goals.</li>
            <li>
              To provide ample placement opportunities for the students to get
              their dream jobs.
            </li>
            <li>
              To equip our faculty members with the latest industry requisites.
            </li>
          </ol>
        </div>
        <div className="mission">
          <h3>The Objectives of the Centre Are As Under:</h3>
          <ol type="1">
            <li>To enhance industry-institute interaction.</li>
            <li>
              To organize seminar, training programmes and work-shops for
              students so as to help students to learn latest technologies
            </li>
            <li>
              To organize seminars, technical talks by eminent personalities
              from academic institutes and industry to enhance the awareness of
              students
            </li>
            <li>To provide guidance and information for higher studies</li>
            <li>
              To conduct mock tests, interviews, Group Discussions for students
            </li>
            <li>
              To conduct training programs to enhance the communication skills
              and develop inter-personal skills of students.
            </li>
            <li>
              To arrange campus-interviews by inviting leading companies to
              recruit students
            </li>
          </ol>
        </div>
      </div>
    );
  };

  const AboutMission = () => {
    return (
      <div className="page-wrapper msn_pw">
        <div id="msn_desc" className="description ">
          <NavigationLink />
          <div className="title-wrapper">
            <div className="title-desc">
              <p>
                Training and Placement Center was established in the year 1994
                under the visionary leadership of Dr.Aswath.M.U, with the
                objective of making our students self-reliant, capable, skilled
                and competent technocrats. Many milestones have been set by our
                center.
              </p>
              <p id="msn_p" style={{ fontSize: "18px" }}>
                To keep our students professionally updated to the unfolding
                dynamic environment, our center offers apex quality training
                services, many career guidance and development programmes on
                personality development, communication skills, Industry to
                Institute Convergence expert interaction sessions, aptitude
                tests and logical reasoning sessions, confidence grooming
                sessions, Group Discussion and Mock Interview Sessions, Public
                Sector Competitive Exams Training and Industry Internship
                Programs. Due to which our students are well equipped to handle
                the working norms of the industry.
                <br />
                The Center provides employment opportunities for the students in
                acclaimed world class organisations. Every year more than 100
                top notch companies visit our Institution and conduct placement
                activities for the full time recruitment and internship. The
                Training and Placement Centre takes immense pleasure in stating
                that around 70 percent of eligible students are placed in their
                dream companies with attractive packages. The average
                compensation is 6.5 lacs and highest compensation will be 20
                LPA. Leading companies like Infosys, Wipro, Accenture, Cisco,
                Akamai, Microfocus, HPE, SAP, Nokia, Microchip, BEL, Mercedes
                Benz, Bosch, L&T- ECC and Brigade Group recruit our students.
                <br />
                Our resourceful alumnae have set commendable standards in the
                corporate world through their admirable contributions. The
                consistent placement record illustrates our commitment and
                devotion towards creating employment opportunities to our
                students. We have excellent infrastructure facilities in terms
                of full-fledged seminar hall, training hall, conference and
                board rooms, interview cabins, full-fledged computer labs for
                conducting recruitment process.
              </p>
            </div>
          </div>
          <div className="body-title">
            <h3>Vision</h3>
          </div>
          <VisionMission />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <VerticalHEader />
      <AboutMission />
      <Footer />
    </div>
  );
};

export default Mission;
