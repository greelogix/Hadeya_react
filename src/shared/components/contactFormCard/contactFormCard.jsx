import React from "react";

const ContactFormCard = () => {
  return (
    <>
      <div className="get-touch-section my-5">
        <div className="row align-items-center p-4 p-sm-5 rounded shadow-lg justify-content-between">
          {/* Left Section - Text */}
          <div className="col-lg-5 col-md-6 text-white">
            <p className="fw-bold heading mb-0">Get in Touch with Us</p>
            <p className="fst-italic heading">Let's Start</p>
            <p className="mt-3 lead">
              Have questions, feedback, or need assistance? We're here to help!
              Drop us a message, and we'll get back to you soon.
            </p>
            <div className="mb-4 pt-4 mb-md-0 line-container m-auto text-centerline-container m-auto m-md-0 text-center text-md-start">
              <div class="title-line mt-3">
                <span class="dot"></span>
              </div>
            </div>
          </div>

          <div className="col-lg-5 col-md-6 form-style p-4">
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email
                </label>
                <input type="email" className="form-control p-3" id="email" />
              </div>
              <div className="mb-3 pt-4">
                <label htmlFor="message" className="form-label fw-bold">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="5"
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn w-100"
                style={{
                  background: "#6EC6D1",
                  borderRadius: "25px",
                  height: "50px",
                }}
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFormCard;
