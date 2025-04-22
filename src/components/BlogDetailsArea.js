import React from "react";
import {
  FaCalendarAlt,
  FaCheckCircle,
  FaFacebookF,
  FaRegFolderOpen,
  FaInstagram,
  FaQuoteRight,
  FaTwitter,
  FaRegUser,
  FaChevronRight,
  FaChevronLeft,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogDetailsArea = () => {
  return (
    <>
      {/* ==================== Blog Details Area start ====================*/}
      <div className="blog-area blog-area_details pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-12  d-flex align-items-center  flex-column justify-content-start">
              <h4 className="title mb-5">
                {" "}
                <span>Haqqımızda </span>
              </h4>
              <div className="blog-details-page-content d-flex align-items-center  flex-column justify-content-center">
                <div className="single-blog-inner">
                  <div className="thumb d-flex align-items-center  flex-column justify-content-center">
                    <img src="assets/img/blog/1.png" alt="img" />
                  </div>
                  <div className="details d-flex align-items-center justify-content-center  flex-column">
                    <blockquote>
                      <FaQuoteRight />
                      <p>
                        2023-cü ildə təsis olunan Dost Finans, qısa müddətdə
                        innovativ yanaşması, şəffaf şərtləri və müştəri yönümlü
                        xidmət modeli ilə maliyyə bazarında özünü fərqləndirməyi
                        bacarmışdır. Məqsədimiz – istər fərdi, istərsə də biznes
                        müştərilərə uyğun maliyyə həlləri təqdim edərək onların
                        inkişafına və maliyyə sabitliyinə real dəstək olmaqdır.
                        Fəaliyyət sahələrimizə faktorinq, lizinq və mağazalar
                        şəbəkəsi üzrə nisyə satış kimi müasir maliyyə alətləri
                        daxildir. Bu xidmətlər müştərilərimizə alış proseslərini
                        asanlaşdırmaq, maliyyə axınlarını effektiv şəkildə idarə
                        etmək və məqsədlərinə daha sürətlə çatmaq imkanı
                        yaradır. Biz müştərilərimizə sadəcə xidmət göstərmirik –
                        onların maliyyə məqsədlərinə doğru yolda etibarlı dost
                        olmağa çalışırıq. Dost Finans – Sizin maliyyə dostunuz.
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="col-lg-4 col-12">
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
                            <Link to="/about-us">
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
            </div> */}
          </div>
        </div>
      </div>
      {/* ==================== Blog Details Area End ====================*/}
    </>
  );
};

export default BlogDetailsArea;
