import React from "react";
import { FaRegHandshake } from "react-icons/fa6";
import { LuShoppingCart } from "react-icons/lu";
import { BsPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const AboutAreaOne = () => {
  return (
    <>
      {/* ================== AboutAreaOne start About Faktorinq  ==================*/}
      <div className="about-area pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="about-thumb-inner pe-xl-5 me-xl-5 "
                data-aos="fade-right"
                data-aos-delay="100"
                data-aos-duration="1500">
                <img
                  className="animate-img-1 top_image_bounce"
                  src="assets/img/about/2.png"
                  alt="img"
                />
                <img
                  className="animate-img-2 left_image_bounce"
                  src="assets/img/about/3.png"
                  alt="img"
                />
                <img
                  className="animate-img-3 top_image_bounce"
                  src="assets/img/banner/5.svg"
                  alt="img"
                />
                <img
                  className="main-img"
                  src="assets/img/about/1.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div className="section-title mt-5 mt-lg-0">
                {/* <h6 className="sub-title">ABOUT US</h6> */}
                <h2 className="title">
                  <span>Faktorinq </span> nədir?
                </h2>
                <p className="content mb-4 mb-xl-5">
                  Faktorinq, daxili və xarici ticarət əməliyyatlarında istifadə
                  olunan və xüsusilə qısamüddətli maliyyə ehtiyaclarını
                  qarşılamaq üçün nəzərdə tutulan bir kredit alətidir. Bu
                  xidmətdə üç əsas tərəf iştirak edir:
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <FaRegHandshake />
                      </div>
                      <div className="details">
                        <h5>Müştəri və ya Satıcı</h5>
                        <p>Faktorinq xidmətinə müraciət edən tərəf.</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <LuShoppingCart />
                      </div>
                      <div className="details">
                        <h5>Borclu və ya Alıcı </h5>
                        <p>Ödənişləri həyata keçirən tərəf.</p>
                      </div>
                    </div>
                  </div>{" "}
                  <div className="col-md-6 mt-4">
                    <div className="single-about-inner">
                      <div className="thumb mb-3">
                        <BsPersonFill />
                      </div>
                      <div className="details">
                        <h5>Faktor </h5>
                        <p>
                          Faktorinq xidmətini təqdim edən maliyyə təşkilatı.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-100 d-flex justify-content-center col-md-12 mt-4">
                    <Link
                      className="btn btn-border-base"
                      data-aos="fade-right"
                      data-aos-delay="300"
                      data-aos-duration="1500"
                      to="/about">
                      Ətraflı bax
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutAreaOne End  ==================*/}
    </>
  );
};

export default AboutAreaOne;
