import React from "react";
import {
  FaArrowRight,
  FaCalendarAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterSeven = () => {
  return (
    <>
      {/* footer area start */}
      <footer
        className="footer-area footer-area_7 bg-cover border-base-top-6"
        style={{ background: "#2B2B5E" }}>
        <div className="container">
          <div className="footer-top pt-0">
            <div className="row">
              <div className="col-lg-4">
                <div className="media p-4" style={{ background: "#101A29" }}>
                  <div className="media-left pe-3">
                    <img src="assets/img/home-7/23.png" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">Phone Number</h5>
                    <h6 className="text-white">(505) 555-0125</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="media p-4" style={{ background: "#101A29" }}>
                  <div className="media-left pe-3">
                    <img src="assets/img/home-7/24.png" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">Email Address</h5>
                    <h6 className="text-white">sara.cruz@example.com</h6>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="media p-4" style={{ background: "#101A29" }}>
                  <div className="media-left pe-3">
                    <img src="assets/img/home-7/25.png" alt="img" />
                  </div>
                  <div className="media-body">
                    <h5 className="text-white">
                      1901 Thornridge Cir. Shiloh, Hawaii 81063
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_about">
                <div className="thumb">
                  <h5 className="text-white">About Company</h5>
                </div>
                <div className="details">
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  <ul className="social-media">
                    <li>
                      <Link to="#">
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaInstagram />
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <FaYoutube />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Our Service</h4>
                <ul>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Ui Design
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Web design
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Digital marketing{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Video Editing
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Pc Repairs
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Web Development
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Pay links</h4>
                <ul>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Finance Sector{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Credit industrys
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Reasearch sector
                    </Link>
                  </li>
                  <li>
                    <Link to="/service">
                      <FaArrowRight /> Finance Sector
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Recent Blog</h4>
                <ul>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/1.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2024</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link to="/about-us">
                            Social Media For Promote Business.
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="media">
                      <div className="media-left">
                        <img src="assets/img/widget/2.png" alt="blog" />
                      </div>
                      <div className="media-body align-self-center">
                        <div className="post-info mb-2">
                          <FaCalendarAlt />
                          <span>january 11, 2024</span>
                        </div>
                        <h6 className="title mb-0">
                          <Link to="/about-us">
                            Marketing For Base market watch
                          </Link>
                        </h6>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <p>
              © Copyright 2024 Upgrade Solutions Private Limited – All Rights
              Reserved
            </p>
          </div>
        </div>
      </footer>
      {/* footer area end */}
    </>
  );
};

export default FooterSeven;
