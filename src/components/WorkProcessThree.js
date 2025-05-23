import React from "react";
import { useTranslation } from "react-i18next";

const WorkProcessThree = () => {
  const { t } = useTranslation();

  return (
    <>
      {/*==================== Work Process Three start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-9">
              <div className="section-title text-center">
                <h2 className="title">
                  <span>{t("partners_title")}</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner-3 text-center">
                <h5 className="mb-4">{t("furniture")}</h5>
                <img src="assets/img/testimonial/7.png" alt="img" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner-3 text-center">
                <h5 className="mb-4">
                  {t("electronics_and_household_appliances")}
                </h5>
                <img src="assets/img/testimonial/9.png" alt="img" />
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner-3 text-center">
                <h5 className="mb-4">{t("mobile_devices")}</h5>
                <img src="assets/img/testimonial/8.png" alt="img" />
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="single-work-process-inner-3 text-center">
                <h5 className="mb-4">{t("diger")}</h5>
                <img src="assets/img/testimonial/6.png" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessThree;
