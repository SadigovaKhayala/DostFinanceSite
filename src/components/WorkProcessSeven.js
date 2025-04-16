import React from "react";
import { TbClock24 } from "react-icons/tb";
import { SiDigitalocean } from "react-icons/si";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const WorkProcessSeven = () => {
  return (
    <>
      {/*==================== Work Process start ====================*/}
      <div className="work-process-area pd-top-90 pb-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8">
              <div className="section-title text-center">
                <h2 className="title">Üstünlüklər</h2>
                <h6 className="bg-none color-base mb-3 mt-4">
                  Faktorinq xidməti sayəsində biznesinizi dayanıqlı maliyyə
                  axını ilə təmin edərkən, həm də bir sıra üstünlüklər əldə
                  edirsiniz.
                </h6>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-5 text-center">
                <div className="thumb block mb-3">
                  <TbClock24 />
                </div>
                <div className="details">
                  <h5 className="mb-3">7/24 dəstək xidməti</h5>
                  <p className="content">
                    Müştərilərinizə uyğun ödəniş üsulları təklif etməyinizə
                    kömək edirik və beləcə rəqiblərinizdən bir addım önə
                    keçirsiniz.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-5 text-center">
                <div className="thumb block mb-3">
                  <SiDigitalocean />
                </div>
                <div className="details">
                  <h5 className="mb-3">Rəqəmsal həllər</h5>
                  <p className="content">
                    E-imza texnologiyamız vasitəsilə müştəriniz müqaviləni
                    onlayn imzalayaraq satış prosesini evdən çıxmadan tamamlamış
                    olur.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="single-work-process-inner-5 text-center">
                <div className="thumb block mb-3">
                  <FaMoneyBillTransfer />
                </div>
                <div className="details">
                  <h5 className="mb-3">Asan maliyyə axını</h5>
                  <p className="content">
                    Müraciət təsdiqləndikdən 48 saat ərzində pul sizin
                    hesabınıza daxil olur.
                  </p>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>

      {/* ==================== Work Process Three end ====================*/}
    </>
  );
};

export default WorkProcessSeven;
