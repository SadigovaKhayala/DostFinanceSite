import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import ModalVideo from "react-modal-video";
import { Link } from "react-router-dom";
import { IoCloseSharp } from "react-icons/io5";

const BannerThree = () => {
  const [isOpen, setOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("+944 ");

  // Handle phone input formatting
  const handlePhoneChange = (e) => {
    let input = e.target.value.replace(/\D/g, ""); // Remove non-numeric characters
    if (input.startsWith("944")) {
      input = "+944 " + input.slice(3);
    } else {
      input = "+944 " + input;
    }
    if (input.length > 9) {
      input = input.slice(0, 14);
    }
    setPhoneNumber(input);
  };

  return (
    <>
      {/* ================== BannerThree Start ==================*/}
      <div
        className="banner-area bg-relative banner-area-2 bg-cover"
        style={{ backgroundImage: 'url("./assets/img/banner-3/5.png")' }}>
        <img className="bg-img-2" src="assets/img/banner-3/4.png" alt="img" />
        <div className="container">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="banner-inner pe-xl-5">
                <h2
                  className="title"
                  data-aos="fade-right"
                  data-aos-delay="200">
                  <span>Partnyor faktorinqi</span>
                </h2>
                <p
                  className="content pe-xl-5"
                  data-aos="fade-right"
                  data-aos-delay="250">
                  Partnyor faktorinqi pərakəndə satış sektorları, eləcə də
                  xidmət sahələrinin alıcılarına hissə-hissə ödəniş imkanı
                  tanıyan, innovativ həllərimizdən istifadə edərək satış
                  dövriyyənizi elə öz mağazanızda və onlayn formada asanlıqla
                  artırmağınıza kömək edən unikal bir maliyyələşmə üsuludur.
                </p>
                <button
                  className="btn btn-border-base"
                  data-aos="fade-right"
                  data-aos-delay="300"
                  onClick={() => setIsModalOpen(true)}>
                  Müraciət et
                </button>
                <div className="d-inline-block align-self-center wow animated fadeInLeft mt-4 mt-md-0">
                  <span
                    onClick={() => setOpen(true)}
                    className="video-play-btn-hover">
                    <img src="assets/img/video.svg" alt="img" />{" "}
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-10">
              <div
                className="banner-thumb-3"
                data-aos="fade-left"
                data-aos-delay="100">
                <div className="main-img-wrap">
                  <img
                    className="banner-animate-img banner-animate-img-1 left_image_bounce"
                    src="assets/img/banner-3/2.svg"
                    alt="img"
                  />
                  <img
                    className="banner-animate-img banner-animate-img-2 left_image_bounce"
                    src="assets/img/banner-3/3.svg"
                    alt="img"
                  />
                  <img
                    className="main-img"
                    src="assets/img/banner-3/1.png"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================== BannerThree End ==================*/}
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="fsrtlSU7J_4"
        onClose={() => setOpen(false)}
      />

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
              <input
                type="tel"
                value={phoneNumber}
                onChange={handlePhoneChange}
                maxLength="15"
                required
              />

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

export default BannerThree;
