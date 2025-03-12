import img_bg from "../../assets/images/landing-hero-bg.jpeg";
import about_vector from "../../assets/images/about-vector.png";
import create_vector from "../../assets/images/create-vector.png";
import recieve_vector from "../../assets/images/recieve-vector.png";
import share_vector from "../../assets/images/share-vector.png";

import "../../assets/css/views/landing/landing.scss";

const Landing = (props) => {
  return (
    <div className="main-container d-flex flex-coulmn justify-content-center">
      <div className="width-90">
        <div className="hero-container position-relative mt-5 d-none">
          <div className="hero-text-container gap-4 pb-5 row col-8 position-absolute">
            <div className="col-5">
              {" "}
              <p className="heading">Bring Dreams to Life</p>
            </div>

            <div className="col-6 px-4">
              <p className="description mt-4">
                Create, share, and contribute to wishlists for yourself and
                others. Together, let’s make dreams a reality.
              </p>
              <button className="btn  w-100">Get Started</button>
            </div>
          </div>
          <div className="hero-container-inner">
            <img src={img_bg} alt="" />
          </div>
        </div>
        <div class="about-section">
          <div class="">
            <div class="align-items-center justify-content-between row">
              <div class="   col-md-5 ">
                <div className="mb-4 mb-md-0 line-container m-auto text-centerline-container m-auto m-md-0 text-center text-md-start">
                  <h2 class="title">About Hadeya</h2>
                  <div class="title-line mt-3">
                    <span class="dot"></span>
                  </div>
                  <img src={about_vector} className="pt-3" alt="" />
                </div>
              </div>
              <div class="col-lg-5 col-md-6 ">
                <p class="description">
                  Hadeya is a platform designed to connect people through
                  wishlists. Whether you want to save for your dreams or
                  contribute to someone else's, Hadeya makes it easy, fun, and
                  collaborative. From gadgets to education, we’re here to help
                  you achieve and give back.
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="how-works-section my-5 py-5">
          <div className="text-center mb-5">
            <h2 className="heading fw-bold mb-3">How it Works?</h2>
            <p className="lead">
              Start creating, sharing, and contributing to wishlists in three
              simple steps.
            </p>
          </div>

          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#8CDCD1", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img
                      src={create_vector}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">01</p>
                      <p className="mb-3 title fw-bold">Create a Wishlist</p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Gather your dream items in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#E4C6F0", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img src={share_vector} width="40px" height="30px" alt="" />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">02</p>
                      <p className="mb-3 title fw-bold">Share a Wishlist</p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Let friends and family know what you love.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#FFD1D1", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img
                      src={recieve_vector}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">03</p>
                      <p className="mb-3 title fw-bold">
                        Receive Contributions
                      </p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Get thoughtful gifts and support from others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="why-hadeya-section my-5 py-5">
          <div className="text-center mb-5 d-flex">
            <p className="heading fw-bold mb-3">Why Hadeya?</p>
            <p className="lead">
              Start creating, sharing, and contributing to wishlists in three
              simple steps.
            </p>
          </div>

          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#8CDCD1", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img
                      src={create_vector}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">01</p>
                      <p className="mb-3 title fw-bold">Create a Wishlist</p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Gather your dream items in one place.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#E4C6F0", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img src={share_vector} width="40px" height="30px" alt="" />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">02</p>
                      <p className="mb-3 title fw-bold">Share a Wishlist</p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Let friends and family know what you love.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-4">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#FFD1D1", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <img
                      src={recieve_vector}
                      width="40px"
                      height="40px"
                      alt=""
                    />
                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">03</p>
                      <p className="mb-3 title fw-bold">
                        Receive Contributions
                      </p>
                    </div>
                  </div>
                  <hr className="border-dark opacity-50 my-3" />
                  <p className="card-text">
                    Get thoughtful gifts and support from others.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Landing;
