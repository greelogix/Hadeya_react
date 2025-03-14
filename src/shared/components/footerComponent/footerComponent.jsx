import React from "react";
import logo_img from "../../../assets/images/hadeya-logo-img.png";
import x_img from "../../../assets/images/x-vector.png";
import insta_img from "../../../assets/images/insta-vector.png";
import wtp_img from "../../../assets/images/wtp-vector.png";
import arrow_up from "../../../assets/images/arrow-up.png";

const FooterComponent = () => {
  return (
    <>
      <div
        className="social-section py-5 px-sm-5 d-md-flex align-items-center gap-4"
        style={{
          margin: "auto",
          textAlign: "center",
        }}
      >
        <div className="logo-container">
          <img src={logo_img} alt="" />
        </div>
        <div className="pt-4 pt-sm-0">
          <p className="text-white px-3 lead">
            Hadeya empowers users to create, share, and contribute to
            personalized wishlists, making dreams come true through
            collaboration and generosity.
          </p>

          <div className="d-flex justify-content-center gap-3 mt-4 flex-wrap">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-4 py-2 d-flex align-items-center gap-2"
              style={{ borderRadius: "50px", fontWeight: "bold" }}
            >
              <img src={insta_img} alt="" /> <p className="mb-0 text-white">Instagram</p>{" "}
              <img src={arrow_up} alt="" />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-4 py-2 d-flex  align-items-center gap-2 social-text"
              style={{ borderRadius: "50px", fontWeight: "bold" }}
            >
              <img src={x_img} alt="" /> <p className="mb-0 text-white">Twitter "x" </p>{" "}
              <img src={arrow_up} alt="" />
            </a>

            <a
              href="https://whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light px-4 py-2 d-flex align-items-center gap-2"
              style={{ borderRadius: "50px", fontWeight: "bold" }}
            >
              <img src={wtp_img} alt="" /> <p className="mb-0 text-white">Whatsapp </p>{" "}
              <img src={arrow_up} alt="" />
            </a>
          </div>
        </div>
      </div>
      <hr className="my-4" />
      <div
        className="footer d-flex justify-content-center gray-text text-center"
        style={{ height: "70px" }}
      >
        <p>© 2025 Hadeya . All rights reserved.</p>
      </div>
    </>
  );
};

export default FooterComponent;
