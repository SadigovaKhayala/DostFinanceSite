import React from "react";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCalendarAlt,
  FaChevronRight,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaPlus,
  FaTwitter,
  FaRegUser,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogGroup = () => {
  return (
    <>
      {/* =============== Blog Group start ===============*/}
      <div className="blog-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/1.png" alt="img" />
                  <span className="date">15 DEC</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <FaRegUser /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Category
                    </li>
                  </ul>
                  <h2 className="title">
                    <Link to="/about-us">
                      A Beginner's Guide to Running a Successful Agricultural
                    </Link>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className="btn btn-border-base mt-3"
                    to="/service-details">
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/2.png" alt="img" />
                  <span className="date">15 DEC</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <FaRegUser /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Category
                    </li>
                  </ul>
                  <h2 className="title">
                    <Link to="/about-us">
                      Successful Agricultural Guide to Running Beginner
                    </Link>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className="btn btn-border-base mt-3"
                    to="/service-details">
                    Touch More <FaPlus />
                  </Link>
                </div>
              </div>
              <div className="single-blog-inner">
                <div className="thumb">
                  <img src="assets/img/blog/3.png" alt="img" />
                  <span className="date">15 DEC</span>
                </div>
                <div className="details">
                  <ul className="blog-meta">
                    <li>
                      <FaRegUser /> By Admin
                    </li>
                    <li>
                      <FaRegFolderOpen /> Category
                    </li>
                  </ul>
                  <h2 className="title">
                    <Link to="/about-us">
                      A Beginner's Guide to Running a Successful Agricultural
                    </Link>
                  </h2>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout. The point of using Lorem Ipsum is that it has a
                    more-or-less normal distribut It is a long established fact
                    that a reader will be distracted by the readable content of
                    a page when looking at its layout.
                  </p>
                  <Link
                    className="btn btn-border-base mt-3"
                    to="/service-details">
                    Touch More <FaPlus />
                  </Link>
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
            <div className="col-lg-4 col-12">
              <div className="td-sidebar">
                <div className="widget widget_author text-center">
                  <div className="thumb">
                    <img src="assets/img/about/7.png" alt="img" />
                  </div>
                  <div className="details">
                    <h5>Leslie Alexander</h5>
                    <h6>(480) 555-0103</h6>
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
                    </ul>
                  </div>
                </div>
                <div className="widget widget_search">
                  <form className="search-form">
                    <div className="form-group">
                      <input type="text" placeholder="Key word" />
                    </div>
                    <button className="submit-btn" type="submit">
                      <FaChevronRight />
                    </button>
                  </form>
                </div>
                <div className="widget widget-recent-post">
                  <h4 className="widget-title">Recent News</h4>
                  <ul>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/1.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="/about-us">
                              Empowering future with solar.
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/2.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="blog-details">
                              Marketing For Base market watch
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li>
                      <div className="media">
                        <div className="media-left">
                          <img src="assets/img/widget/3.png" alt="blog" />
                        </div>
                        <div className="media-body align-self-center">
                          <h6 className="title">
                            <Link to="/about-us">
                              Condtum Integer urna at faucibus
                            </Link>
                          </h6>
                          <div className="post-info">
                            <FaCalendarAlt />
                            <span>15 October</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_catagory">
                  <h4 className="widget-title">Catagory</h4>
                  <ul className="catagory-items">
                    <li>
                      <Link to="/blog">
                        Business <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Finance <span>7</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Web Design <span>2</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        Counsiling <span>3</span>
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog">
                        IT Service <span>5</span>
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="widget widget_tag_cloud mb-0">
                  <h4 className="widget-title">Tags</h4>
                  <div className="tagcloud">
                    <Link to="#">Information</Link>
                    <Link to="#">Learn</Link>
                    <Link to="#">ICT</Link>
                    <Link to="#">Business</Link>
                    <Link to="#">Portfolio</Link>
                    <Link to="#">Project</Link>
                    <Link to="#">Personal</Link>
                    <Link to="#">Server</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =============== Blog Group End ===============*/}
    </>
  );
};

export default BlogGroup;
