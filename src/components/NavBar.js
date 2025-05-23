import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavBar = () => {
  const { t, i18n } = useTranslation(); // Using the translation hook
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const menuActive = () => {
    setActive(!active);
  };

  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // Language change handler
  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang); // Change language using react-i18next
  };

  const isLoggedIn = localStorage.getItem("userLoggedIn");

  useEffect(() => {
    const items = document.querySelectorAll(".menu-item-has-children > a");

    items.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault();
        const subMenu = this.parentElement.querySelector(".sub-menu");
        if (subMenu) {
          subMenu.classList.toggle("active");
          this.classList.toggle("open");
        }
      });
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", function () {});
      });
    };
  }, []);

  return (
    <>
      {/* Search Popup */}
      <div
        className={searchShow ? "td-search-popup active" : "td-search-popup"}
        id="td-search-popup">
        <form action="/" className="search-form">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder={t("search_placeholder")} // Use translation for the placeholder
            />
          </div>
          <button type="submit" className="submit-btn">
            <FaSearch />
          </button>
        </form>
      </div>

      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id="body-overlay"></div>

      {/* Navbar */}
      <nav className="navbar navbar-area navbar-area_1 navbar-expand-lg">
        <div className="container nav-container">
          <div className="responsive-mobile-menu">
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target="#itech_main_menu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="icon-left" />
              <span className="icon-right" />
            </button>
          </div>

          <div className="logo">
            <Link to="/">
              <img src="assets/img/logo.png" alt="img" />
            </Link>
          </div>

          <div className="nav-right-part nav-right-part-mobile">
            <span className="search-bar-btn" onClick={searchActive}>
              <FaSearch />
            </span>
          </div>

          <div
            className={
              active
                ? "collapse navbar-collapse sopen "
                : "collapse navbar-collapse"
            }
            id="itech_main_menu">
            <ul className="navbar-nav menu-open text-lg-end">
              <li
                className="menu-item-has-children"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="#">
                  {t("faktorinq")}{" "}
                  {dropdownOpen ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul className={`sub-menu ${dropdownOpen ? "active" : ""}`}>
                  <li>
                    <Link to="/business-factoring" className="pt-3 pb-3">
                      {t("biznesFaktorinqi")}
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner-factoring" className="pt-3 pb-3">
                      {t("partnyorFaktorinqi")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="menu-item-has-children"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="#">
                  {t("lizinq")}{" "}
                  {dropdownOpen ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul className={`sub-menu ${dropdownOpen ? "active" : ""}`}>
                  <li>
                    <Link to="/leasing" className="pt-3 pb-3">
                      {t("avtomobilLizinqi")}
                    </Link>
                  </li>
                </ul>
              </li>

              <li>
                <Link to="/vacancies">{t("vakansiyalar")}</Link>
              </li>

              <li
                className="menu-item-has-children "
                onMouseEnter={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: true })
                }
                onMouseLeave={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: false })
                }>
                <Link to="#" className="">
                  {t("odemek")}
                  {dropdownOpen.stores ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul
                  className={`sub-menu ${dropdownOpen.stores ? "active" : ""}`}>
                  <li>
                    <a
                      href="https://www.million.az/services/bank/DostFinance"
                      target="_blank"
                      rel="noopener noreferrer">
                      {" "}
                      Milli Ön
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://expresspay.az/payment/service/1612"
                      target="_blank"
                      rel="noopener noreferrer">
                      {" "}
                      Expresspay
                    </a>
                  </li>
                </ul>
              </li>

              {isLoggedIn ? (
                <li>
                  <Link to="/profile">{t("profile")}</Link>
                </li>
              ) : (
                <li>
                  <Link to="/login">{t("login")}</Link>
                </li>
              )}

              {/* Language Switcher */}
              <li
                className="menu-item-has-children"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="#">
                  {i18n.language.toUpperCase()}
                  {dropdownOpen ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul className={`sub-menu ${dropdownOpen ? "active" : ""}`}>
                  <li onClick={() => handleLanguageChange("az")}>
                    <Link className="pt-3 pb-3">AZ</Link>
                  </li>
                  <li onClick={() => handleLanguageChange("ru")}>
                    <Link className="pt-3 pb-3">RU</Link>
                  </li>
                  <li onClick={() => handleLanguageChange("en")}>
                    <Link className="pt-3 pb-3">EN</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
