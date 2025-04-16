import React from "react";
import { FaRegClock } from "react-icons/fa";
import { GrMoney } from "react-icons/gr";
import { MdOutlineSpeed } from "react-icons/md";
import { MdOutlinePerson } from "react-icons/md";

const WorkProcessTwo = () => {
  return (
    <>
      {/*==================== Work Process Two start ====================*/}
      <div className="work-process-area pd-top-120 pd-bottom-90">
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">Üstünlüklər</h2>
            <h6 className="sub-title">
              Biz hər gün milyonlarla müştəri və bizneslərin arzularının
              reallaşmağına dəstək oluruq.
            </h6>
          </div>
          <div className="row">
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <GrMoney />
                </div>
                <div className="details">
                  <p className="process-count">Maliyyə axını</p>
                  <p className="content">
                    Ödənilməmiş fakturalarınızı asanlıqla nağd pula çevirin
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <FaRegClock />
                </div>
                <div className="details">
                  <p className="process-count">Vaxta qənaət</p>
                  <p className="content">
                    Ödənişlərin təqibatı yükündən azad olun
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <MdOutlineSpeed />
                </div>
                <div className="details">
                  <p className="process-count">Sürətli həll</p>
                  <p className="content">
                    Tez və asan maliyyələşmə imkanı əldə edin
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="single-work-process-inner">
                <div className="thumb mb-3">
                  <MdOutlinePerson />
                </div>
                <div className="details">
                  <p className="process-count">Texniki dəstək</p>
                  <p className="content">
                    Yüksək texnologiya və çevik qərar qəbul etmə üstünlüyündən
                    faydalanın
                  </p>
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
