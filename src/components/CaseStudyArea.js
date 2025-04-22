import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import FaqAreaOne from "./FaqAreaOne";
const CaseStudyArea = () => {
  // Phone Input Formatting
  const [phoneNumber, setPhoneNumber] = useState("+944 ");

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
      {/* ====================  Case Study Area Start ====================*/}
      <div className="service-area pd-bottom-90 bg-cover  ">
        <FaqAreaOne />
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            {/* Left Sidebar */}

            {/* Main Content */}
            <div className="col-lg-12 d-flex align-items-center justify-content-center row">
              <div className="blog-details-page-content">
                <div className="single-blog-inner mb-0"></div>
              </div>
            </div>

            <div className="application-form mt-4 col-12 d-flex align-items-center justify-content-center row">
              <h4 className="mb-3">Müraciət Forması</h4>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <label>S.A.A.*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>İD seriyası və nömrəsi*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Verən orqan</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>Verilmə tarixi</label>
                    <input type="date" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>FİN*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Doğum tarixi*</label>
                    <input type="date" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Qeydiyyat üzrə ünvan*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Faktiki ünvan*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>E-mail</label>
                    <input type="email" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>İş yeri haqqında məlumat</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>İşlədiyiniz yer*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Vəzifəniz*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Əmək haqqı (AZN)*</label>
                    <input type="text" className="form-control" required />
                  </div>
                  <div className="col-md-6">
                    <label>Əlavə gəlirlər (AZN)</label>
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col-md-6">
                    <label>Əlaqə telefonu*</label>
                    <input
                      type="tel"
                      className="form-control"
                      value={phoneNumber}
                      onChange={handlePhoneChange}
                      maxLength="15"
                      required
                    />
                  </div>
                  <div className="col-12 mt-3">
                    <label className="d-flex align-items-center">
                      <input
                        type="checkbox"
                        className="me-3 chechboxModal "
                        required
                      />
                      <span>
                        {" "}
                        Məlumatlarımın doğruluğunu təsdiq edir, kredit
                        öhdəliklərim barədə məlumatların AKB-dən sorğu
                        edilməsinə, Asan Finans və digər məlumat bazalarından
                        qeydiyyatdan keçirilməsinə razılıq verirəm.{" "}
                      </span>
                    </label>
                  </div>
                  <div className="col-3 mt-3 d-flex align-items-center justify-content-center row">
                    <button type="submit" className="btn btn-primary">
                      Göndər
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* ====================  Case Study Area End ====================*/}
    </>
  );
};

export default CaseStudyArea;
