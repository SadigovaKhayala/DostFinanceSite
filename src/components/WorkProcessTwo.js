import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const WorkProcessTwo = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      {/*==================== Work Process Two start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">{t("advantages_title")}</h2>{" "}
            {/* Using translation */}
            <h6 className="sub-title">{t("advantages_subtitle")}</h6>{" "}
            {/* Using translation */}
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <GrMoney />
                </div>
                <div className="details">
                  <p className="process-count">{t("financial_flow")}</p>{" "}
                  {/* Using translation */}
                  <p className="content">
                    {t("convert_invoices_to_cash")}
                  </p>{" "}
                  {/* Using translation */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <FaRegClock />
                </div>
                <div className="details">
                  <p className="process-count">{t("time_saving")}</p>{" "}
                  {/* Using translation */}
                  <p className="content">
                    {t("free_from_payment_follow_up")}
                  </p>{" "}
                  {/* Using translation */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <MdOutlineSpeed />
                </div>
                <div className="details">
                  <p className="process-count">{t("fast_solution")}</p>{" "}
                  {/* Using translation */}
                  <p className="content">{t("quick_and_easy_funding")}</p>{" "}
                  {/* Using translation */}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <MdOutlinePerson />
                </div>
                <div className="details">
                  <p className="process-count">{t("technical_support")}</p>{" "}
                  {/* Using translation */}
                  <p className="content">
                    {t("high_technology_and_agile_decision_making")}
                  </p>{" "}
                  {/* Using translation */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Work Process Two end ====================*/}
    </>
  );
};

export default WorkProcessTwo;
