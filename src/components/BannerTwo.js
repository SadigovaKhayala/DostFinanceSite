import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import ModalVideo from "react-modal-video";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const BannerTwo = () => {
  const [isOpen, setOpen] = useState(false);
  const { t } = useTranslation(); // Initialize the translation hook

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
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500">
                  <span>{t("business_factoring")}</span>{" "}
                  {/* Using translation */}
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250"
                  data-aos-duration="1500">
                  {t("business_factoring_description")}{" "}
                  {/* Using translation */}
                </p>
                {/* Uncomment the following if you want the "Discover More" button back */}
                {/* <Link
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                  to="/about">
                  {t("discover_more")} <FaPlus />
                </Link> */}
                <div
                  className="d-inline-block align-self-center mt-4 mt-md-0"
                  data-aos="fade-right"
                  data-aos-delay="350"
                  data-aos-duration="1500">
                  <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover">
                    <img src="assets/img/video.svg" alt="img" />
                    <h6 className="d-inline-block">
                      {t("business_factoring_video_title")}
                    </h6>{" "}
                    {/* Using translation */}
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 col-md-9"
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
