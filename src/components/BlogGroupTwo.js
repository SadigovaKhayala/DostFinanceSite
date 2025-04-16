import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaRegUser,
  FaRegComments,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGroupTwo = () => {
  return (
    <>
      {/* blog area start */}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/4.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/5.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    June 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/6.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/7.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      Transforming businesses, one pixel at a time
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/8.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    June 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      The Importance of a Strong Digital for Strategy
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-blog-list">
                <div className="thumb">
                  <img src="assets/img/blog/9.png" alt="img" />
                </div>
                <div className="details">
                  <p className="date mb-3">
                    <FaCalendarAlt className="mb-1" />
                    October 19, 2023
                  </p>
                  <h5>
                    <Link to="/about-us">
                      Creating Engaging Content: A Guide for Digital
                    </Link>
                  </h5>
                  <div className="meta">
                    <div className="row">
                      <div className="col-6">
                        <p>
                          <FaRegUser className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                      <div className="col-6 text-end">
                        <p>
                          <FaRegComments className="mb-1" />
                          Sam Curren
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pagination">
            <Link className="prev page-numbers" to="#">
              <FaAngleLeft />
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
              <FaAngleRight />
            </Link>
          </div>
        </div>
      </div>
      {/* blog area end */}
    </>
  );
};

export default BlogGroupTwo;
