import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const AboutAreaTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      {/* About Section */}
      <div className="about-area pd-top-120 pd-bottom-120">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-6 mb-4 mb-lg-0"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div className="about-thumb-inner">
                <img
                  className="main-img"
                  src="assets/img/about/10.png"
                  alt="img"
                />
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div className="section-title mb-0">
                <h2 className="title">{t("business_factoring_easy")}</h2>{" "}
                {/* Translated title */}
                <p className="content mb-4">
                  {t("business_factoring_description")}
                </p>{" "}
                {/* Translated description */}
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> {t("business_mistakes")}{" "}
                        {/* Translated list item */}
                      </li>
                      <li>
                        <FaCheckCircle /> {t("startup_principles")}{" "}
                        {/* Translated list item */}
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> {t("grow_your_business")}{" "}
                        {/* Translated list item */}
                      </li>
                      <li>
                        <FaCheckCircle /> {t("common_startup_mistakes")}{" "}
                        {/* Translated list item */}
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="content">{t("more_information_prompt")}</p>{" "}
                {/* Translated prompt */}
                <button
                  className="btn btn-border-base"
                  onClick={() => setIsModalOpen(true)}>
                  {t("apply_button")} {/* Translated button */}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-container">
          <div className="modal-content">
            <button className="close-btn" onClick={() => setIsModalOpen(false)}>
              <IoCloseSharp />
            </button>
            <h3>{t("factoring_application")}</h3> {/* Translated modal title */}
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
              <input type="tel" required />
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

export default AboutAreaTwo;
