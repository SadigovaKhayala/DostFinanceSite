import React, { useState } from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPinterestP,
  FaPlus,
  FaRegEnvelope,
  FaSearch,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const NavbarSeven = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }
  return (
    <>
      {/* search popup start*/}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup "}
        id="td-search-popup">
        <div className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Search....."
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </div>
      </div>
      {/* search popup end*/}
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id="body-overlay"></div>
      <div className="navbar-top NavbarSeven pe-3 bg-gray d-lg-block d-none">
        <div className="container custom-container">
          <div className="row">
            <div className="col-lg-8">
              <ul>
                <li>
                  <FaRegEnvelope className="mb-1" /> info@example.com
                </li>
                <li>
                  <FaMapMarkerAlt className="mb-1" /> 6391 Elgin St. Celina,
                  10299
                </li>
              </ul>
            </div>
            <div className="col-lg-4 text-lg-end">
              <ul className="topbar-right">
                <li>Follow On: </li>
                <li>
                  <Link to="#">
                    <FaFacebookF className="mb-1" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaTwitter className="mb-1" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaLinkedinIn className="mb-1" />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <FaPinterestP className="mb-1" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* navbar start */}
      <nav className="navbar navbar-area navbar-area_7 navbar-area-2 navbar-area-7 navbar-expand-lg bg-white">
        <div className="container nav-container custom-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>
          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo.png" alt="img" />
            </Link>
          </div>
          <div className="nav-right-part nav-right-part-mobile">
            <Link className="search-bar-btn" to="#" onClick={searchActive}>
              <FaSearch />
            </Link>
          </div>
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-center ps-lg-5">
              <li className="menu-item-has-children">
                <Link to="#">Home</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/">IT / Softwer Agency</Link>
                  </li>
                  <li>
                    <Link to="/index-2">SaaS App Landing</Link>
                  </li>
                  <li>
                    <Link to="/index-3">Payments Solution</Link>
                  </li>
                  <li>
                    <Link to="/index-4">Software Company</Link>
                  </li>
                  <li>
                    <Link to="/index-5">Artificial Intelligence</Link>
                  </li>
                  <li>
                    <Link to="/index-6">NFT Service</Link>
                  </li>
                  <li>
                    <Link to="/index-7">Cyber Security</Link>
                  </li>
                  <li>
                    <Link to="/index-8">Hardware Service</Link>
                  </li>
                  <li>
                    <Link to="/index-9">ICO Landing</Link>
                  </li>
                  <li>
                    <Link to="/index-10">Personal Portfolio</Link>
                  </li>
                  <li>
                    <Link to="/index-11">SEO Service</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Service</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/service">Service 01</Link>
                  </li>
                  <li>
                    <Link to="/service-2">Service 02</Link>
                  </li>
                  <li>
                    <Link to="/service-3">Service 03</Link>
                  </li>
                  <li>
                    <Link to="/service-4">Service 04</Link>
                  </li>
                  <li>
                    <Link to="/service-5">Service 05</Link>
                  </li>
                  <li>
                    <Link to="/service-details">Service Single</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children">
                <Link to="#">Pages</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/about">About Us</Link>
                  </li>
                  <li>
                    <Link to="/team">Team 01</Link>
                  </li>
                  <li>
                    <Link to="/team-2">Team 02</Link>
                  </li>
                  <li>
                    <Link to="/team-3">Team 03</Link>
                  </li>
                  <li>
                    <Link to="/team-details">Team Details</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing 01</Link>
                  </li>
                  <li>
                    <Link to="/pricing-2">Pricing 02</Link>
                  </li>
                </ul>
              </li>
              <li className="menu-item-has-children mega-menu">
                <Link to="#">Mega Menu</Link>
                <div className="sub-menu">
                  <div className="row">
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/">IT / Softwer Agency</Link>
                        </li>
                        <li>
                          <Link to="/index-2">SaaS App Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-3">Payments Solution</Link>
                        </li>
                        <li>
                          <Link to="/index-4"> Software Company</Link>
                        </li>
                        <li>
                          <Link to="/index-5">Artificial Intelligence</Link>
                        </li>
                        <li>
                          <Link to="/index-6">NFT Service</Link>
                        </li>
                        <li>
                          <Link to="/index-7">Cyber Security</Link>
                        </li>
                        <li>
                          <Link to="/index-8">Hardware Service</Link>
                        </li>
                        <li>
                          <Link to="/index-9">ICO Landing</Link>
                        </li>
                        <li>
                          <Link to="/index-10">Personal Portfolio</Link>
                        </li>
                        <li>
                          <Link to="/index-11">SEO Service</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/service">Service 01</Link>
                        </li>
                        <li>
                          <Link to="/service-2">Service 02</Link>
                        </li>
                        <li>
                          <Link to="/service-3">Service 03</Link>
                        </li>
                        <li>
                          <Link to="/service-4">Service 04</Link>
                        </li>
                        <li>
                          <Link to="/service-5">Service 05</Link>
                        </li>
                        <li>
                          <Link to="/service-details">Service Single</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/project">Project 01</Link>
                        </li>
                        <li>
                          <Link to="/project-2">Project 02</Link>
                        </li>
                        <li>
                          <Link to="/project-3">Project 03</Link>
                        </li>
                        <li>
                          <Link to="/project-details">Case Study Details</Link>
                        </li>
                        <li>
                          <Link to="/pricing">Pricing 01</Link>
                        </li>
                        <li>
                          <Link to="/pricing-2">Pricing 02</Link>
                        </li>
                      </ul>
                    </div>
                    <div className=" mb-lg-4 col-lg-4 col-xl-3">
                      <ul>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        <li>
                          <Link to="/team">Team 01</Link>
                        </li>
                        <li>
                          <Link to="/team-2">Team 02</Link>
                        </li>
                        <li>
                          <Link to="/team-3">Team 03</Link>
                        </li>
                        <li>
                          <Link to="/team-details">Team Details</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li className="menu-item-has-children">
                <Link to="#">Blog</Link>
                <ul className="sub-menu">
                  <li>
                    <Link to="/blog">Blog 01</Link>
                  </li>
                  <li>
                    <Link to="/blog-2">Blog 02</Link>
                  </li>
                  <li>
                    <Link to="/blog-3">Blog 03</Link>
                  </li>
                  <li>
                    <Link to="/blog-4">Blog 04</Link>
                  </li>
                  <li>
                    <Link to="/about-us">Blog Details</Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right-part nav-right-part-desktop d-lg-inline-flex align-item-center">
            <a className="navbar-phone d-xl-inline-block d-none" href="tel:">
              <span className="icon">
                <img src="assets/img/icon/1.png" alt="img" />
              </span>
              <span>Need help?</span>
              <h5>(808) 555-0111</h5>
            </a>
            <Link
              className="search-bar-btn mt-0 me-4"
              to="#"
              onClick={searchActive}>
              <FaSearch />
            </Link>
            <Link className="btn btn-border-base" to="/about">
              Discover More <FaPlus />
            </Link>
          </div>
        </div>
      </nav>

      {/* navbar end */}
    </>
  );
};

export default NavbarSeven;
