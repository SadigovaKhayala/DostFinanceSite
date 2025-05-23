import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+944 ");
  const { t } = useTranslation(); // Initialize the translation hook

  // Handle phone input formatting
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (input.startsWith("944")) {
      input = "+944 " + input.slice(3);
    } else {
      input = "+944 " + input;
    }
    if (input.length > 9) {
      input = input.slice(0, 14);
    }
    setPhoneNumber(input);
  };

  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}>
        <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200">
                  <span>{t("partner_factoring_title")}</span>{" "}
                  {/* Translated title */}
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250">
                  {t("partner_factoring_description")}{" "}
                  {/* Translated description */}
                </p>
                <button
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  onClick={() => setIsModalOpen(true)}>
                  {t("apply_button")} {/* Translated button */}
                </button>
                <div className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0">
                  <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover">
                    <img src="assets/img/video.svg" alt="img" />
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div
                className="banner-thumb-3"
                data-aos="fade-left"
                data-aos-delay="100">
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-3/2.svg"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-3/3.svg"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-3/1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="fsrtlSU7J_4"
        onClose={() => setOpen(false)}
      />

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <IoCloseSharp />
            </button>
            <h3>{t("factoring_application_title")}</h3>{" "}
            {/* Translated modal title */}
            <form>
              <label>{t("saa_label")}*</label> {/* Translated label */}
              <input type="text" required />
              <label>{t("id_series_number_label")}*</label>{" "}
              {/* Translated label */}
              <input type="text" required />
              <label>{t("issuing_authority_label")}</label>{" "}
              {/* Translated label */}
              <input type="text" />
              <label>{t("issuance_date_label")}</label> {/* Translated label */}
              <input type="date" />
              <label>{t("fin_label")}*</label> {/* Translated label */}
              <input type="text" required />
              <label>{t("birth_date_label")}*</label> {/* Translated label */}
              <input type="date" required />
              <label>{t("registration_address_label")}*</label>{" "}
              {/* Translated label */}
              <input type="text" required />
              <label>{t("actual_address_label")}*</label>{" "}
              {/* Translated label */}
              <input type="text" required />
              <label>{t("email_label")}</label> {/* Translated label */}
              <input type="email" />
              <label>{t("workplace_info_label")}</label>{" "}
              {/* Translated label */}
              <input type="text" />
              <label>{t("employer_label")}*</label> {/* Translated label */}
              <input type="text" required />
              <label>{t("position_label")}*</label> {/* Translated label */}
              <input type="text" required />
              <label>{t("salary_label")} (AZN)*</label> {/* Translated label */}
              <input type="text" required />
              <label>{t("additional_income_label")} (AZN)</label>{" "}
              {/* Translated label */}
              <input type="text" />
              <label>{t("contact_phone_label")}*</label>{" "}
              {/* Translated label */}
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength="15"
                required
              />
              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="me-2 chechboxModal"
                />
                <span>
                  {t("data_confirmation_text")} {/* Translated text */}
                </span>
              </label>
              <button
                type="submit"
                className={`submit-btn ${!isChecked ? "disabled-btn" : ""}`}
                disabled={!isChecked}>
                {t("submit_button")} {/* Translated button */}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default BannerThree;
