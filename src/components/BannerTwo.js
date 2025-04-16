import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
const BannerTwo = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      {/* ================== BannerTwo Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/bg/8.png")' }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h2
                  className="title "
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500">
                  {" "}
                  <span>Biznes </span> Faktorinqi
                </h2>
                <p
                  className="content pe-xl-5 "
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500">
                  Biznes faktorinqi biznes sahiblərinin müəssisə (və ya şirkət)
                  daxilində nağd pul axınını yaxşılaşdırmaq üçün ödənilməli
                  invoyslarının bir hissəsini və ya hamısını faktorinq şirkətinə
                  satması ilə həyata keçirilən maliyyələşdirmə prosesidir.
                </p>
                {/* <Link
                  className="btn btn-border-base "
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  to="/about">
                  Discover More <FaPlus />
                </Link> */}
                <div
                  className="d-inline-block align-self-center mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500">
                  <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover">
                    <img src="assets/img/video.svg" alt="img" />{" "}
                    <h6 className="d-inline-block">Biznes faktorinqi nədir?</h6>
                  </span>

                  <div></div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9 "
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div className="banner-thumb-2 mt-4 mt-lg-0">
                <img
                  className="banner-animate-img banner-animate-img-4"
                  src="assets/img/banner-2/3.png"
                  alt="img"
                />
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-2/4.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-2/5.png"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-3 top_image_bounce"
                    src="assets/img/banner-2/2.png"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-2/1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerTwo End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="UWTjmsOseQA" // Extracted ID from URL
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default BannerTwo;
