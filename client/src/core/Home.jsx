import React, { useEffect } from "react";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../assets/css/Home.css";
import "../assets/css/Home3.css";
import { Pie } from "react-chartjs-2";
import Bell from "../assets/img/bell.svg";
import Student1 from "../assets/img/student1.jpg";
import Student2 from "../assets/img/student2.jpg";
import Student3 from "../assets/img/student3.jpg";
import Carousel from "react-material-ui-carousel";
import { Line } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import axios from "axios";

const url = "http://localhost:8000";
const Home = () => {
  document.title = "Home";

  const [list, setList] = useState([]);
  useEffect(() => {
    const Fetchdata = async () => {
      await axios({
        method: "get",
        url: `${url}/upcoming`,
      })
        .then((da) => {
          setList(da.data);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(list);
    };
    Fetchdata();
  }, []);

  const Reminder = () => {
    return (
      <div
        className="py-2 position-sticky"
        style={{ width: "100%", background: "#F8FCFF", top: "2rem" }}
      >
        <div className="container">
          <div className="container-fluid" style={{ padding: "0" }}>
            <div className="m-2">
              <h3 className="py-1">Upcoming Events</h3>
              <div className="scroll-bar-wrap">
                <div className="scroll-box">




                {list.map((shre) => {
        var dat = new Date(shre.date).toDateString();
        console.log(dat);
        return (
          
          <div
          className="d-flex my-3 py-1"
          style={{
            border: "1px solid black",
            background: "#fff",
            borderRadius: "4px",
          }}
        >
          <div
            className="my-2"
            style={{ width: "20%", borderRight: "2px solid black" }}
          >
            <h3
              className="text-center fw-normal fs-3"
              style={{ margin: "0" }}
            >
             {dat.substring(8, 10)}
            </h3>
            <h3
              className="text-center fw-normal fs-5"
              style={{ margin: "0" }}
            >
              {dat.substring(4, 7)}
            </h3>
          </div>
          <div className="m-2" style={{ width: "60%" }}>
            <h3
              className="fw-normal fs-5 mt-1"
              style={{ margin: "0" }}
            >
              {shre.companyname}
            </h3>
            <p
              className="my-2"
              style={{ margin: "0", fontSize: "12px" }}
            >
              <span>Role : {shre.job} </span> | <span>{shre.ctc} : </span>
            </p>
          </div>
          <div className="m-2 my-auto" style={{ width: "20%" }}>
            <div className="d-flex justify-content-center">
              <img src={Bell} style={{ height: "25px" }} />
            </div>
          </div>
        </div>


        );
      })}













                 












                  {/* <div
                    className="d-flex my-3 py-1"
                    style={{
                      border: "1px solid black",
                      background: "#fff",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="my-2"
                      style={{ width: "20%", borderRight: "2px solid black" }}
                    >
                      <h3
                        className="text-center fw-normal fs-3"
                        style={{ margin: "0" }}
                      >
                        02
                      </h3>
                      <h3
                        className="text-center fw-normal fs-5"
                        style={{ margin: "0" }}
                      >
                        FEB
                      </h3>
                    </div>
                    <div className="m-2" style={{ width: "60%" }}>
                      <h3
                        className="fw-normal fs-5 mt-1"
                        style={{ margin: "0" }}
                      >
                        Amazon
                      </h3>
                      <p
                        className="my-2"
                        style={{ margin: "0", fontSize: "12px" }}
                      >
                        <span>Role : </span> | <span>CTC : </span>
                      </p>
                    </div>
                    <div className="m-2 my-auto" style={{ width: "20%" }}>
                      <div className="d-flex justify-content-center">
                        <img src={Bell} style={{ height: "25px" }} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex my-3 py-2"
                    style={{
                      border: "1px solid black",
                      background: "#fff",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="my-2"
                      style={{ width: "20%", borderRight: "2px solid black" }}
                    >
                      <h3
                        className="text-center fw-normal fs-3"
                        style={{ margin: "0" }}
                      >
                        02
                      </h3>
                      <h3
                        className="text-center fw-normal fs-5"
                        style={{ margin: "0" }}
                      >
                        FEB
                      </h3>
                    </div>
                    <div className="m-2" style={{ width: "60%" }}>
                      <h3
                        className="fw-normal fs-5 mt-1"
                        style={{ margin: "0" }}
                      >
                        Amazon
                      </h3>
                      <p
                        className="my-2"
                        style={{ margin: "0", fontSize: "12px" }}
                      >
                        <span>Role : </span> | <span>CTC : </span>
                      </p>
                    </div>
                    <div className="m-2 my-auto" style={{ width: "20%" }}>
                      <div className="d-flex justify-content-center">
                        <img src={Bell} style={{ height: "25px" }} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex my-3 py-2"
                    style={{
                      border: "1px solid black",
                      background: "#fff",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="my-2"
                      style={{ width: "20%", borderRight: "2px solid black" }}
                    >
                      <h3
                        className="text-center fw-normal fs-3"
                        style={{ margin: "0" }}
                      >
                        02
                      </h3>
                      <h3
                        className="text-center fw-normal fs-5"
                        style={{ margin: "0" }}
                      >
                        FEB
                      </h3>
                    </div>
                    <div className="m-2" style={{ width: "60%" }}>
                      <h3
                        className="fw-normal fs-5 mt-1"
                        style={{ margin: "0" }}
                      >
                        Amazon
                      </h3>
                      <p
                        className="my-2"
                        style={{ margin: "0", fontSize: "12px" }}
                      >
                        <span>Role : </span> | <span>CTC : </span>
                      </p>
                    </div>
                    <div className="m-2 my-auto" style={{ width: "20%" }}>
                      <div className="d-flex justify-content-center">
                        <img src={Bell} style={{ height: "25px" }} />
                      </div>
                    </div>
                  </div>
                  <div
                    className="d-flex my-3 py-2"
                    style={{
                      border: "1px solid black",
                      background: "#fff",
                      borderRadius: "4px",
                    }}
                  >
                    <div
                      className="my-2"
                      style={{ width: "20%", borderRight: "2px solid black" }}
                    >
                      <h3
                        className="text-center fw-normal fs-3"
                        style={{ margin: "0" }}
                      >
                        02
                      </h3>
                      <h3
                        className="text-center fw-normal fs-5"
                        style={{ margin: "0" }}
                      >
                        FEB
                      </h3>
                    </div>
                    <div className="m-2" style={{ width: "60%" }}>
                      <h3
                        className="fw-normal fs-5 mt-1"
                        style={{ margin: "0" }}
                      >
                        Amazon
                      </h3>
                      <p
                        className="my-2"
                        style={{ margin: "0", fontSize: "12px" }}
                      >
                        <span>Role : </span> | <span>CTC : </span>
                      </p>
                    </div>
                    <div className="m-2 my-auto" style={{ width: "20%" }}>
                      <div className="d-flex justify-content-center">
                        <img src={Bell} style={{ height: "25px" }} />
                      </div>
                    </div>
                  </div> */}











                </div>
                <div class="cover-bar"></div>
              </div>
              <div className="d-flex">
                <div style={{ width: "80%", paddingTop: "65px" }}>
                  <p className="fw-bold" style={{ margin: "0" }}>
                    Bangalore Institute of Technology, <br />
                    K.R. Road, V.V. Puram <br /> Bengaluru(560004)
                  </p>
                </div>
                <div className="d-flex flex-column" style={{ width: "20%" }}>
                  <ul className="social-icons" style={{ paddingLeft: "35px" }}>
                    <li>
                      <a
                        className="facebook"
                        href="https://www.facebook.com/bitsince1979"
                        target="_blank"
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="twitter"
                        href="https://twitter.com/bitsince1979"
                        target="_blank"
                      >
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="linkedin" href="#" target="_blank">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const Companies = () => {
    return (
      <div>
        <h3 className="mx-4 my-4 py-2 fs-2">Top Recruiters</h3>
        <div className="companiesBackground d-flex position-relative">
          <div className="leftSide pt-4 position-absolute">
            <div className="companyGrid d-flex">
              <div className="company1"></div>
              <div className="company2"></div>
            </div>
            <div className="companyGrid d-flex ">
              <div className="company3"></div>
              <div className="company4"></div>
            </div>
          </div>
          <div className="rightSide position-absolute">
            <div className="package">
              <h4
                className="packageHeading fs-5 my-4"
                style={{
                  borderBottom: "1px solid white",
                  display: "inline",
                  paddingBottom: "5px",
                }}
              >
                Highest Package
              </h4>
              <h3 className="packageHeading mt-5 fs-3">Rishabh Sabarwal</h3>
              <h2 className="packageHeading fs-1">25 LPA</h2>
              <h4 className="packageHeading fs-5">Amazon</h4>
            </div>
          </div>
        </div>
      </div>
    );
  };

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
        borderWidth: 1,
      },
    ],
  });

  function BarChart({ chartData, chartOptions }) {
    return <Bar data={chartData} options={chartOptions} />;
  }

  function LineChart({ chartData }) {
    return <Line data={chartData} />;
  }

  const PieChart = () => {
    var data = {
      labels: ["Not Placed", "Placed"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 15, 26],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    };

    var options = {
      maintainAspectRatio: false,
      scales: {},
      legend: {
        labels: {
          fontSize: 25,
        },
      },
    };

    return (
      <div>
        <Pie data={data} height={220} options={options} />
      </div>
    );
  };

  const Graphs = () => {
    return (
      <div>
        <h3 className="mx-4 my-4 py-2 fs-2" style={{ textAlign: "end" }}>
          Placement Statistics
        </h3>
        <div className="placementBackground d-flex position-relative">
          <div className="PlacementLeft position-absolute">
            <div className="placementGraph">
              <h4 className=" fs-5 mt-4">Placement :</h4>
              <h4
                className=" fs-5"
                style={{
                  borderBottom: "1px solid black",
                  display: "inline",
                  paddingBottom: "5px",
                }}
              >
                Over the Years
              </h4>
              <div className="my-5">
                {/* chartOptions={chartOptions} */}
                <BarChart chartData={userData} />
                <div style={{ height: "50px" }}></div>
                <LineChart chartData={userData} className="py-5" />
              </div>
              {/* <h3 className="packageHeading mt-5 fs-3">Rishabh Sabarwal</h3>
              <h2 className="packageHeading fs-1">25 LPA</h2>
              <h4 className="packageHeading fs-5">Amazon</h4> */}
            </div>
          </div>
          <div className="PlacementRight pt-4 position-absolute">
            <div className="companyGrid d-flex">
              <div className="placement1 p-4">
                <h2
                  className="placementHeading mt-4 text-center"
                  style={{ fontSize: "60px" }}
                >
                  13
                </h2>
                <h4 className="placementHeading fs-5 text-center">
                  Companies offering package of Rs 15 LPA or more.
                </h4>
              </div>
              <div className="placement2 p-4">
                <div>
                  <h4
                    className="placementHeading fs-5"
                    style={{
                      borderBottom: "1px solid white",
                      display: "inline",
                      paddingBottom: "5px",
                    }}
                  >
                    Total Placments
                  </h4>
                  <h2
                    className="placementHeading mt-5"
                    style={{ fontSize: "60px" }}
                  >
                    942
                  </h2>
                  <h4 className="placementHeading fs-5">(2022)</h4>
                </div>
              </div>
            </div>
            <div className="companyGrid d-flex ">
              <div className="placement3 py-2">
                <PieChart />
              </div>
              <div className="placement4 p-4">
                <h4 className="placementHeading fs-5">Total Companies </h4>
                <h4
                  className="placementHeading fs-5"
                  style={{
                    borderBottom: "1px solid white",
                    display: "inline",
                    paddingBottom: "5px",
                  }}
                >
                  Visited
                </h4>
                <h2
                  className="placementHeading mt-4"
                  style={{ fontSize: "60px" }}
                >
                  113
                </h2>
                <h4 className="placementHeading fs-5">(2022)</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const HomeCarousel = () => {
    return (
      <div style={{ width: "100%" }}>
        <Carousel
          autoPlay={true}
          animation="slide"
          indicators={false}
          navButtonsAlwaysVisible={false}
          cycleNavigation={true}
          navButtonsProps={{
            style: {
              background: "#ffffff",
              color: "#494949",
              borderRadius: "0",
              margin: "0",
            },
          }}
        >
          <img
            src={Student1}
            alt=""
            style={{
              objectFit: "cover",
              width: "1198px",
              height: "667px",
            }}
          />
          <img
            src={Student3}
            alt=""
            style={{
              objectFit: "cover",
              width: "1198px",
              height: "667px",
            }}
          />
          <img
            src={Student2}
            alt=""
            style={{
              objectFit: "cover",
              width: "1198px",
              height: "667px",
            }}
          />
        </Carousel>
      </div>
    );
  };

  return (
    <div style={{ scrollBehavior: "smooth" }}>
      <Header />
      <div className="d-flex">
        <div style={{ width: "30%", backgroundColor: "#f8fcff" }}>
          <Reminder />
        </div>
        <div style={{ width: "70%", position: "relative" }}>
          <HomeCarousel />
          <Companies />
          <Graphs />
        </div>
      </div>
    </div>
  );
};

export default Home;

// {
//    <section
//   class="l-section-1 timelinesection"
//   id="upcoming-events"
//   style={{ padding: "0" }}
// >
//   <div id="timelinediv" class="l-row l-row--1024" style={{ margin: "0" }}>
//     <div
//       id="timelinediv"
//       class="l-row--800 l-margin-bottom-64"
//       style={{ margin: "0" }}
//     >
//       <hr id="timelinehr" class="l-card-divider l-margin-top-0" />

//       {list.map((shre) => {
//         var dat = new Date(shre.date).toDateString();
//         console.log(dat);
//         return (
//           <div id="timelinediv" class="l-card-3 m-other-event-card homeShadow ">
//             <div id="timelinediv" class="l-card-3__col-1 mc_timeline">
//               <div id="timelinediv" class="l-card-3__date-1 ">
//                 <p id="timelineptag" class="m-card-3__date-1-desc">
//                   Starts On
//                 </p>
//                 <div
//                   id="timelinediv"
//                   class="l-card-3__date-1-text timeline_date"
//                 >
//                   <p id="timelineptag" class="m-card-3__day">
//                     {dat.substring(8, 10)}
//                   </p>
//                   <p id="timelineptag" class="m-card-3__month timeline_month">
//                     {dat.substring(4, 7)}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div id="timelinediv" class="l-card-3__col-2">
//               <div id="timelinediv" class="l-card-3__info">
//                 <h3 id="timelineh3" class="m-card-3__head">
//                   {shre.companyname}
//                 </h3>
//                 <p id="timelineptag" class="m-card-3__desc timeline_job">
//                   <span class="m-card-3__desc-type">Job:{shre.job}</span>|
//                   <span class="m-card-3__time-clock">
//                     <i class="i-clock-grey l-margin-right-8"></i>
//                     CTC:
//                     {shre.ctc}
//                   </span>
//                 </p>
//               </div>
//             </div>
//             <div id="timelinediv" class="l-card-3__col-3 timeline_btn">
//               <div id="timelinediv" class="l-card-3__dtl-btn">
//                 <a
//                   id="timelineatag"
//                   href="#"
//                   class="m-card-3__dtl-btn"
//                   target="_blank"
//                 >
//                   {" "}
//                   Set Reminder<i class="i-arrow-no-tail-blue"></i>
//                 </a>
//               </div>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   </div>
// </section>;
// }

// const CompanyCards = () => {
//   return (
//     <section class="light">
//       <div class="container py-2">
//         <article class="postcard light yellow">
//           <a class="postcard__img_link" href="#">
//             <img
//               class="postcard__img"
//               src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToFFn_7pkTLHFGafZPYHfTdTL2X1MQXqHlkw&usqp=CAU"
//               alt="Image Title"
//             />
//           </a>
//           <div class="postcard__text t-dark">
//             <h1 class="postcard__title yellow">
//               <a href="#">Amazon</a>
//             </h1>
//             <div class="postcard__subtitle small">
//               <p>Software Development Engineer</p>
//             </div>
//             <div class="postcard__bar"></div>
//             <div class="postcard__preview-txt">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
//               fugiat asperiores inventore beatae accusamus odit minima enim,
//               commodi quia, doloribus eius! Ducimus nemo accusantium maiores
//               velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
//               ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
//               dolores nobis enim quidem excepturi, illum quos!
//             </div>
//           </div>
//         </article>
//         <article class="postcard light red">
//           <a class="postcard__img_link" href="#">
//             <img
//               class="postcard__img"
//               src="data:image/png;base64,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"
//               alt="Image Title"
//             />
//           </a>
//           <div class="postcard__text t-dark">
//             <h1 class="postcard__title red">
//               <a href="#">Adobe</a>
//             </h1>
//             <div class="postcard__subtitle small">
//               <p>Software Development Engineer</p>
//             </div>
//             <div class="postcard__bar"></div>
//             <div class="postcard__preview-txt">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
//               fugiat asperiores inventore beatae accusamus odit minima enim,
//               commodi quia, doloribus eius! Ducimus nemo accusantium maiores
//               velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
//               ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
//               dolores nobis enim quidem excepturi, illum quos!
//             </div>
//           </div>
//         </article>
//         <article class="postcard light green">
//           <a class="postcard__img_link" href="#">
//             <img
//               class="postcard__img"
//               src="data:image/png;base64,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"
//               alt="Image Title"
//             />
//           </a>
//           <div class="postcard__text t-dark">
//             <h1 class="postcard__title green">
//               <a href="#">Google</a>
//             </h1>
//             <div class="postcard__subtitle small">
//               <p>Software Development Engineer</p>
//             </div>
//             <div class="postcard__bar"></div>
//             <div class="postcard__preview-txt">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
//               fugiat asperiores inventore beatae accusamus odit minima enim,
//               commodi quia, doloribus eius! Ducimus nemo accusantium maiores
//               velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
//               ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
//               dolores nobis enim quidem excepturi, illum quos!
//             </div>
//           </div>
//         </article>
//         <article class="postcard light black">
//           <a class="postcard__img_link" href="#">
//             <img
//               class="postcard__img"
//               src="data:image/jpeg;base64,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"
//               alt="Image Title"
//             />
//           </a>
//           <div class="postcard__text t-dark">
//             <h1 class="postcard__title black">
//               <a href="#">Mercedes</a>
//             </h1>
//             <div class="postcard__subtitle small">
//               <p>Software Development Engineer</p>
//             </div>
//             <div class="postcard__bar"></div>
//             <div class="postcard__preview-txt">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
//               fugiat asperiores inventore beatae accusamus odit minima enim,
//               commodi quia, doloribus eius! Ducimus nemo accusantium maiores
//               velit corrupti tempora reiciendis molestiae repellat vero. Eveniet
//               ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum
//               dolores nobis enim quidem excepturi, illum quos!
//             </div>
//           </div>
//         </article>
//       </div>
//     </section>
//   );
// };
