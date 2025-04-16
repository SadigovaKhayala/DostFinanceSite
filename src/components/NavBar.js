import React, { useState, useEffect } from "react";
import { FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState({});

  const menuActive = () => {
    setActive(!active);
  };

  const searchActive = () => {
    setSearchShow(!searchShow);
  };

  // 🛠️ Fix: Run this only after the component mounts
  useEffect(() => {
    const items = document.querySelectorAll(".menu-item-has-children > a");

    items.forEach((item) => {
      item.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        const subMenu = this.parentElement.querySelector(".sub-menu");
        if (subMenu) {
          subMenu.classList.toggle("active");
          this.classList.toggle("open");
        }
      });
    });

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      items.forEach((item) => {
        item.removeEventListener("click", function () {});
      });
    };
  }, []); // Runs only once after component mounts

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
              placeholder="Search....."
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
                  Faktorinq{" "}
                  {dropdownOpen ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul className={`sub-menu ${dropdownOpen ? "active" : ""}`}>
                  <li>
                    <Link to="/business-factoring" className="pt-3 pb-3">
                      Biznes Faktorinqi
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner-factoring" className="pt-3 pb-3">
                      Partnyor Faktorinqi
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="menu-item-has-children"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}>
                <Link to="#">
                  Lizinq{" "}
                  {dropdownOpen ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul className={`sub-menu ${dropdownOpen ? "active" : ""}`}>
                  <li>
                    <Link to="/leasing" className="pt-3 pb-3">
                      Avtomobil Lizinqi{" "}
                    </Link>
                  </li>
                </ul>
              </li>

              <li
                className="menu-item-has-children"
                onMouseEnter={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: true })
                }
                onMouseLeave={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: false })
                }>
                <Link to="#">
                  Mağazalar şəbəkəsi{" "}
                  {dropdownOpen.stores ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul
                  className={`sub-menu ${dropdownOpen.stores ? "active" : ""}`}>
                  <li>
                    <Link to="/store-list" className="pt-3 pb-3">
                      Mebel
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner-stores" className="pt-3 pb-3">
                      Məişət{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/partner-stores" className="pt-3 pb-3">
                      Elektronika
                    </Link>
                  </li>{" "}
                  <li>
                    <Link to="/partner-stores" className="pt-3 pb-3">
                      Mobil telefonlar{" "}
                    </Link>
                  </li>{" "}
                  <li>
                    <Link to="/partner-stores" className="pt-3 pb-3">
                      Digər
                    </Link>
                  </li>{" "}
                </ul>
              </li>

              <li>
                <Link to="/vacancies">Vakansiyalar</Link>
              </li>
              <li
                className="menu-item-has-children me-4"
                onMouseEnter={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: true })
                }
                onMouseLeave={() =>
                  setDropdownOpen({ ...dropdownOpen, stores: false })
                }>
                <Link to="#" className="me-4">
                  Ödəniş et
                  {dropdownOpen.stores ? (
                    <FaChevronUp className="dropdownLinkIcon" />
                  ) : (
                    <FaChevronDown className="dropdownLinkIcon" />
                  )}
                </Link>
                <ul
                  className={`sub-menu ${dropdownOpen.stores ? "active" : ""}`}>
                  <li>
                    <li className="pt-3 pb-3">
                      <a
                        href="https://www.million.az/services/bank/DostFinance"
                        target="_blank"
                        rel="noopener noreferrer">
                        {" "}
                        Milli Ön
                      </a>
                    </li>{" "}
                  </li>
                  <li>
                    <li className="pt-3 pb-3">
                      <a
                        href="https://expresspay.az/payment/service/1612"
                        target="_blank"
                        rel="noopener noreferrer">
                        {" "}
                        Expresspay
                      </a>
                    </li>{" "}
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
