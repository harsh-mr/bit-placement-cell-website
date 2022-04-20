import React from "react";
import "../assets/css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="site-footer position-relative">
        <div className="container">
          <div className="d-flex justify-content-between">
            {/* <div className="row"> */}

            <div className="col-xs-6 col-md-3">
              <h6>Reach Us</h6>
              <ul className="reachUs">
                <li>
                  <div className="d-flex">
                    <a href="#">
                      <i class="fas fa-map-marker-alt"></i>
                    </a>
                    <p>
                      Bangalore Institute of Technology, <br />
                      K.R. Road, V.V. Puram <br /> Bengaluru(560004)
                    </p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <a href="#">
                      <i class="fas fa-phone-alt"></i>
                    </a>
                    <p style={{ paddingTop: "18px" }}>+91 01234-56789</p>
                  </div>
                </li>
                <li>
                  <div className="d-flex">
                    <a href="#">
                      <i class="far fa-envelope"></i>
                    </a>
                    <p style={{ paddingTop: "18px" }}>
                      principalbit4@gmail.com
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <a href="#">Home</a>
                </li>
                <li>
                  <a href="#">Mission</a>
                </li>
                <li>
                  <a href="#">Placement</a>
                </li>
                <li>
                  <a href="#">Resource</a>
                </li>
                <li>
                  <a href="#">Alumni</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Map</h6>
              <div className="d-flex justify-content-center">
                {/* <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2606255763544!2d77.57184291474016!3d12.955167590866637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1592715c4e7f%3A0x7dfaf94e52204678!2sBangalore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1643633151652!5m2!1sen!2sin"
                width="300"
                height="200"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
              ></iframe> */}
              </div>
            </div>
            {/* </div> */}
          </div>
        </div>
        <div className="container">
          <div className="d-flex justify-content-center">
            <ul className="social-icons">
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
                <a className="dribbble" href="#" target="_blank">
                  <i className="fa fa-dribbble"></i>
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
    </footer>
  );
};

export default Footer;
