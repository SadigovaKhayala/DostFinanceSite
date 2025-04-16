import React from "react";
import { FaRegFolder, FaUserAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
const BlogAreaSix = () => {
  return (
    <>
      {/*===================== Blog Area  start =====================*/}
      <div className="blog-area pd-top-115 pd-bottom-90">
        <div className="container">
          <div className="section-title">
            <div className="row">
              <div className="col-xl-4 col-lg-8">
                <h6 className="color-base">Latest News</h6>
                <h2 className="title">Data Security is Our Top Priority</h2>
              </div>
              <div className="col-xl-8 text-lg-end align-self-end">
                <Link className="btn btn-base" to="#">
                  Explore More
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="details">
                  <ul className="blog-meta ps-0">
                    <li>
                      <FaUserAlt /> By Admin
                    </li>
                    <li>
                      <FaRegFolder /> Category
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                </div>
                <div className="thumb">
                  <img
                    className="border-radius-5 img-fluid"
                    src="assets/img/blog/4.png"
                    alt="img"
                  />
                  <Link className="date-2" to="#">
                    11May,2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="details">
                  <ul className="blog-meta ps-0">
                    <li>
                      <FaUserAlt /> By Admin
                    </li>
                    <li>
                      <FaRegFolder /> Category
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                </div>
                <div className="thumb">
                  <img
                    className="border-radius-5 img-fluid"
                    src="assets/img/blog/4.png"
                    alt="img"
                  />
                  <Link className="date-2" to="#">
                    11May,2023
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="details">
                  <ul className="blog-meta ps-0">
                    <li>
                      <FaUserAlt /> By Admin
                    </li>
                    <li>
                      <FaRegFolder /> Category
                    </li>
                  </ul>
                  <h5 className="mb-3">
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <p>
                    Melbourne is simply is dumiomy is text Lorem Ipsum is simply
                  </p>
                </div>
                <div className="thumb">
                  <img
                    className="border-radius-5 img-fluid"
                    src="assets/img/blog/4.png"
                    alt="img"
                  />
                  <Link className="date-2" to="#">
                    11May,2023
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===================== BlogAreaFour End =====================*/}
    </>
  );
};

export default BlogAreaSix;
