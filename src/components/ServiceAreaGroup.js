import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import serviceList from "../scripts/serviceList";

const ServiceAreaGroup = () => {
  return (
    <>
      {/*=================== service area start ===================*/}
      <div className="service-area bg-relative pd-top-100">
        <img
          className="position-bottom-left top_image_bounce"
          src="assets/img/icon/4.png"
          alt="img"
        />
        <div className="container">
          <div className="section-title text-center">
            <h2 className="title">
              <span>Vakansiyalar</span>
            </h2>
            <h6 className="sub-title mt-3">
              {" "}
              Aktiv vakansiyalarımızı buradan izləyə bilərsiniz.{" "}
            </h6>
          </div>
          <div className="row">
            {serviceList.map((data, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <div className="single-service-inner text-center">
                  {/* <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div> */}
                  <div className="details">
                    <h5>
                      <Link to="/service-details">{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className="btn btn-border-base" to="/service-details">
                      Ətraflı
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== service area end ===================*/}
    </>
  );
};

export default ServiceAreaGroup;
