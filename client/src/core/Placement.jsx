import React from "react";
import Header from "../components/Header";
import VerticalHEader from "../components/VerticalHeader";
import NavigationLink from "../components/NavigationLink";
import Companies from "../assets/img/companies.jpg";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useState } from "react";
import "../assets/css/Mission.css";
import Footer from "../components/Footer";

// import Footer from "../components/Footer";

const Placement = () => {
  document.title = "Placement";

  const PlacementGraph = () => {
    const UserData = [
      {
        id: 1,
        year: 2016,
        userGain: 80000,
        userLost: 823,
      },
      {
        id: 2,
        year: 2017,
        userGain: 45677,
        userLost: 345,
      },
      {
        id: 3,
        year: 2018,
        userGain: 78888,
        userLost: 555,
      },
      {
        id: 4,
        year: 2019,
        userGain: 90000,
        userLost: 4555,
      },
      {
        id: 5,
        year: 2020,
        userGain: 4300,
        userLost: 234,
      },
    ];

    const [userData, setUserData] = useState({
      labels: UserData.map((data) => data.year),
      datasets: [
        {
          label: "Users Gained",
          data: UserData.map((data) => data.userGain),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });

    function BarChart({ chartData }) {
      return <Bar data={chartData} />;
    }

    return (
      <div className="d-flex placement_flexdiv">
        <div className="px-3 placement_flexdiv_para" style={{ width: "40%" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum rem
            laudantium, voluptate voluptas facilis quo pariatur ab unde sint
            officia aspernatur a odit. Aperiam corporis illo est harum eligendi
            totam deserunt repudiandae similique repellendus ducimus? Cum saepe
            repellat mollitia ratione, voluptatem soluta blanditiis quasi
            repudiandae necessitatibus cupiditate nesciunt, adipisci molestias.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum eius
            necessitatibus molestiae repellendus dolor enim assumenda non
            voluptates, voluptatibus quasi dignissimos animi, architecto tempora
            fugiat velit nulla eos iure vero dolore natus dolorem. Reprehenderit
            quisquam dolorem nostrum libero ullam? Inventore!
          </p>
        </div>
        <div className="px-2 placement_flexdiv_graph" style={{ width: "60%" }}>
          <BarChart chartData={userData} />
        </div>
      </div>
    );
  };

  const ChartAndCompanies = () => {
    return (
      <div>
        <div className="vision-desc py-5">
          <img src={Companies} alt="" class="resonsive" style={{width:"100%",height:"auto"}} />
        </div>
        <div className="mission">
          <h3>Placement Statistics</h3>
          <PlacementGraph />
        </div>
      </div>
    );
  };

  const AboutPlacement = () => {
    return (
      <div className="page-wrapper msn_pw">
        <div id="msn_desc" className="description">
          <NavigationLink />
          <div className="title-wrapper">
            <div className="title-desc">
              <p>Placement Process in BIT...</p>
              <ol type="1" className="py-2">
                <li>
                  Every year the enrollment process for placements begins when
                  students come to pre final year.
                </li>
                <li>
                  Each department will have one faculty and two student
                  coordinators to facilitate training and placement activities.
                </li>
                <li>
                  The coordinators organize mock test and group discussion in
                  their respective classes. External trainers are invited to
                  train the students on solving the aptitude, prepare for group
                  discussion, interview facing skills and technical skills.
                  Experts from the varied industries are invited to give guest
                  lecture on the latest technologies.
                </li>
                <li>
                  Every year more than three hundred reputed companies are
                  invited to visit our institution to recruit our students for
                  internship and full time jobs.
                </li>
                <li>
                  Several companies send their assessment form to assess our
                  institute before they visit for recruitment. We provide all
                  the required information to the companies. Based on the
                  information provided, companies visit our institution for
                  campus recruitment.
                </li>
                <li>
                  More than one hundred and twenty companies from different
                  sectors visit BIT to recruit students for internship and
                  full-time job. More than five hundred students get their dream
                  jobs through placement center.
                </li>
              </ol>
            </div>
          </div>
          <div className="body-title">
            <h3>Our Recruiters</h3>
          </div>
          <ChartAndCompanies />
        </div>
      </div>
    );
  };

  return (
    <div>
      <Header />
      <VerticalHEader />
      <AboutPlacement />
      <Footer />
    </div>
  );
};

export default Placement;
