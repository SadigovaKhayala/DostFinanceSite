import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaArrowRight,
  FaRegFolderOpen,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGroupThree = () => {
  return (
    <>
      {/* blog area start */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/4.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/5.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/6.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/7.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/8.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img
                    className="border-radius-5"
                    src="assets/img/blog/9.png"
                    alt="img"
                  />
                  <p className="date">Wednesday, June 5, 2024</p>
                </div>
                <div className="details">
                  <ul className="blog-meta p-0">
                    <li>
                      <FaRegUser className="mb-1" /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen className="mb-1" /> Category
                    </li>
                  </ul>
                  <h5 className="mb-4">
                    <Link to="/about-us">
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <Link className="btn btn-border-base" to="/about-us">
                    Read More <FaArrowRight className="mb-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <Link className="prev page-numbers" to="#">
              <FaAngleLeft className="mb-1" />
            </Link>
            <Link className="page-numbers" to="#">
              1
            </Link>
            <span className="page-numbers current">2</span>
            <Link className="page-numbers" to="#">
              3
            </Link>
            <Link className="page-numbers" to="#">
              4
            </Link>
            <Link className="next page-numbers" to="#">
              <FaAngleRight className="mb-1" />
            </Link>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </>
  );
};

export default BlogGroupThree;
