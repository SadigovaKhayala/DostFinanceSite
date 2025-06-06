import React from "react";
import LeasingCalculator from "./LeasingCalculator";
import { Link } from "react-router-dom";
///Lizinq page
const FaqAreaOne = () => {
  return (
    <>
      {/*==================== Faq area start ====================*/}
      <div
        className="faq-area  bg-cover  pd-bottom-110"
        style={{ backgroundImage: 'url("./assets/img/bg/3.png")' }}>
        <div className="container">
          <div className="row pd-top-120">
            <div
              className="col-xl-5 col-lg-6 col-md-8 order-lg-last"
              data-aos="fade-left"
              data-aos-delay="100"
              data-aos-duration="1500">
              <LeasingCalculator />
            </div>
            <div
              className="col-xl-7 col-lg-6"
              data-aos="fade-right"
              data-aos-delay="100"
              data-aos-duration="1500">
              <div className="section-title mb-0 mt-4 mt-lg-0">
                <h2 className="title mt-4">
                  Avtomobil <span>Lizinqi </span>şərtləri
                </h2>
                <div className="mt-5 lizinqshertleri">
                  <div>
                    <label>
                      Lizinqin növü:
                      <span>
                        Minik avtomobilləri və Kommersiya məqsədli avtomobillər
                      </span>
                    </label>
                  </div>
                  <div>
                    <label>
                      Kreditin təminatı: <span>Lizinq obyekti</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      Yaş həddi: <span>24 – 65 Yaş</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      Kredit Məbləği: <span>5000- 150 000 AZN</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      İlkin ödəniş : <span> 20% dən başlayaraq</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      Kredit müddəti: <span> 3-60 ay</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      İllik faiz dərəcəsi: <span>22-32%</span>
                    </label>
                  </div>
                  <div>
                    {" "}
                    <label>
                      Komissiya: <span>2-6 %</span>
                    </label>
                  </div>
                  <div>
                    <label>
                      Tələb olunan sənədlər:{" "}
                      <span>
                        Şəxsiyyət vəsiqəsi, VÖEN və Sürücülük vəsiqəsi
                      </span>
                    </label>
                  </div>
                </div>
                <div className="w-100 d-flex justify-content-start col-md-12 mt-2"></div>
              </div>
              {/* <div
                className="accordion accordion-inner style-2 accordion-icon-left mt-3"
                id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne">
                      What services do you offer?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwo"
                      aria-expanded="false"
                      aria-controls="collapseTwo">
                      How long does it take for you to complete a project?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThree"
                      aria-expanded="false"
                      aria-controls="collapseThree">
                      How much does it cost to work with your agency?
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                      Many desktop publishing packages and web page editors now
                      use Lorem Ipsum as their default model text, search for
                      'lorem ipsum' will uncover
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* ==================== Faq area end ====================*/}
    </>
  );
};

export default FaqAreaOne;
