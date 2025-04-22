import React from "react";
import {
  FaChevronRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { IoMdMail } from "react-icons/io";

const FooterSix = () => {
  return (
    <>
      {/* ================== Footer  Start ==================*/}
      <footer className="footer-area footer-area_6 footer-area-2 bg-gray mt-0 pd-top-120">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 ps-xl-5">
              <div className="widget widget_nav_menu">
                <h4 className="widget-title">Xidmətlərimiz</h4>
                <ul>
                  <li>
                    <Link to="/business-factoring">Biznes Faktorinqi </Link>
                  </li>
                  <li>
                    <Link to="/partner-factoring">Partnyor Faktorinqi</Link>
                  </li>
                  <li>
                    <Link to="/leasing">Avtomobil Lizinqi </Link>
                  </li>
                  <li>
                    <Link to="">Mağazalar şəbəkəsi</Link>
                  </li>
                  <li>
                    <Link to="/vacancies">Vakansiyalar</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-5 col-md-6">
              <div className="widget widget-recent-post">
                <h4 className="widget-title">Əlaqə</h4>
                <div className="widget widget_contact">
                  <ul className="details footer-6-links">
                    <li>Bakı, Nərimanov ray., Ə.Rəcəbli 46 N (Royal Plaza)</li>
                    <li className="mt-3">
                      <FaPhoneAlt />
                      (+994) 55 300 21 10
                    </li>
                    <li className="mt-2">
                      <IoMdMail />
                      office@dostfinans.az
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="widget widget_about p-0 ps-xl-4"
                style={{ backgroundColor: "transparent" }}>
                <h4 className="widget-title">Yeniliklərdən xəbərdar ol</h4>
                <div className="details">
                  <div className="subscribe mt-4">
                    <input type="text" placeholder="E-mail" />
                    <button className="">
                      <FaChevronRight />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 align-self-center">
                <Link to="index-1">
                  <img src="assets/img/logo.png" alt="img" />
                </Link>
              </div>
              <div className="col-lg-4 align-self-center">
                <ul className="social-media text-lg-center mt-lg-0 mt-3 mb-lg-0 mb-3">
                  <li>
                    <Link className="border-radius-50 bg-white smedia" to="#">
                      <FaFacebookF />
                    </Link>
                  </li>
                  <li>
                    <Link className="border-radius-50 bg-white smedia" to="#">
                      <FaTwitter />
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="border-radius-50 bg-white smedia"
                      to="https://www.instagram.com/dostfinans?igsh=YXR0dHR2NTh4N
WN0)">
                      <FaInstagram />
                    </Link>
                  </li>
                  <li>
                    <Link className="border-radius-50 bg-white smedia" to="#">
                      <FaYoutube />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4  align-self-center text-lg-end">
                <p className="mb-0">© Dost Finans | All Rights Reserved</p>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* ================== Footer Two  end ==================*/}
    </>
  );
};

export default FooterSix;
