// import React from "react";
// import { FaCheckCircle, FaPlus } from "react-icons/fa";
// import { Link } from "react-router-dom";

// const AboutAreaTwo = () => {
//   return (
//     <>
//       {/* =============== About Area Two End ===============*/}
//       <div className="about-area pd-top-120 pd-bottom-120">
//         <div className="container">
//           <div className="row">
//             <div
//               className="col-lg-6 mb-4 mb-lg-0 "
//               data-aos="fade-right"
//               data-aos-delay="100"
//               data-aos-duration="1500">
//               <div className="about-thumb-inner">
//                 <img
//                   className="main-img"
//                   src="assets/img/about/10.png"
//                   alt="img"
//                 />
//               </div>
//             </div>
//             <div
//               className="col-lg-6 "
//               data-aos="fade-left"
//               data-aos-delay="100"
//               data-aos-duration="1500">
//               <div className="section-title mb-0">
//                 <h2 className="title">
//                   Biznes faktorinqi əldə etmək indi çox asandır
//                 </h2>
//                 <p className="content mb-4">
//                   Biznesinizin nağd pul axınını artırmaq və maliyyə çevikliyini
//                   təmin etmək indi daha asandır. Biznes faktorinqi ilə
//                   ödənişlərinizi tezliklə əldə edin və inkişafınızı
//                   sürətləndirin!
//                 </p>
//                 <div className="row">
//                   <div className="col-md-6">
//                     <ul className="single-list-inner style-check style-heading style-check mb-3">
//                       <li>
//                         <FaCheckCircle /> Uğurlu biznes üçün qarşısını almalı
//                         olduğunuz səhvlər
//                       </li>
//                       <li>
//                         <FaCheckCircle /> Startapınızın bazarda möhkəmlənməsi
//                         üçün əsas prinsiplər
//                       </li>
//                     </ul>
//                   </div>
//                   <div className="col-md-6">
//                     <ul className="single-list-inner style-check style-heading style-check mb-3">
//                       <li>
//                         <FaCheckCircle /> Biznesinizi sürətlə böyütməyin 5 əsas
//                         yolu
//                       </li>
//                       <li>
//                         <FaCheckCircle /> Startapların ən çox buraxdığı səhvlər
//                         və onların həlli
//                       </li>
//                     </ul>
//                   </div>
//                 </div>
//                 <p className="content">
//                   Daha çox məlumat əldə etmək istəyirsinizsə, aşağıdakı formanı
//                   doldurun və komandamız sizinlə əlaqə saxlasın.
//                 </p>
//                 <Link className="btn btn-border-base" to="/about">
//                   Müraciət edin
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* =============== About Area Two End ===============*/}
//     </>
//   );
// };

// export default AboutAreaTwo;
import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const AboutAreaTwo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

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
                <h2 className="title">
                  Biznes faktorinqi əldə etmək indi çox asandır
                </h2>
                <p className="content mb-4">
                  Biznesinizin nağd pul axınını artırmaq və maliyyə çevikliyini
                  təmin etmək indi daha asandır. Biznes faktorinqi ilə
                  ödənişlərinizi tezliklə əldə edin və inkişafınızı
                  sürətləndirin!
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Uğurlu biznes üçün qarşısını almalı
                        olduğunuz səhvlər
                      </li>
                      <li>
                        <FaCheckCircle /> Startapınızın bazarda möhkəmlənməsi
                        üçün əsas prinsiplər
                      </li>
                    </ul>
                  </div>
                  <div className="col-md-6">
                    <ul className="single-list-inner style-check style-heading style-check mb-3">
                      <li>
                        <FaCheckCircle /> Biznesinizi sürətlə böyütməyin 5 əsas
                        yolu
                      </li>
                      <li>
                        <FaCheckCircle /> Startapların ən çox buraxdığı səhvlər
                        və onların həlli
                      </li>
                    </ul>
                  </div>
                </div>
                <p className="content">
                  Daha çox məlumat əldə etmək istəyirsinizsə, aşağıdakı formanı
                  doldurun və komandamız sizinlə əlaqə saxlasın.
                </p>
                <button
                  className="btn btn-border-base"
                  onClick={() => setIsModalOpen(true)}>
                  Müraciət edin
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
            <h3>Faktorinq müraciəti</h3>
            <form>
              <label>S.A.A.*</label>
              <input type="text" required />

              <label>İD seriyası və nömrəsi*</label>
              <input type="text" required />

              <label>Verən orqan</label>
              <input type="text" />

              <label>Verilmə tarixi</label>
              <input type="date" />

              <label>FİN*</label>
              <input type="text" required />

              <label>Doğum tarixi*</label>
              <input type="date" required />

              <label>Qeydiyyat üzrə ünvan*</label>
              <input type="text" required />

              <label>Faktiki ünvan*</label>
              <input type="text" required />

              <label>E-mail</label>
              <input type="email" />

              <label>İş yeri haqqında məlumat</label>
              <input type="text" />

              <label>İşlədiyiniz yer*</label>
              <input type="text" required />

              <label>Vəzifəniz*</label>
              <input type="text" required />

              <label>Əmək haqqı (AZN)*</label>
              <input type="text" required />

              <label>Əlavə gəlirlər (AZN)</label>
              <input type="text" />

              <label>Əlaqə telefonu*</label>
              <input type="tel" required />

              <label>
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => setIsChecked(!isChecked)}
                  className="me-2 chechboxModal"
                />
                <span>
                  {" "}
                  Məlumatlarımın doğruluğunu təsdiq edir, kredit öhdəliklərim
                  barədə məlumatların AKB-dən sorğu edilməsinə, Asan Finans və
                  digər məlumat bazalarından qeydiyyatdan keçirilməsinə razılıq
                  verirəm.{" "}
                </span>
              </label>
              <button
                type="submit"
                className={`submit-btn ${!isChecked ? "disabled-btn" : ""}`}
                disabled={!isChecked}>
                Göndər
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AboutAreaTwo;
