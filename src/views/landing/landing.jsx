import img_bg from "../../assets/images/landing-hero-bg.jpeg";
import about_vector from "../../assets/images/about-vector.png";
import create_vector from "../../assets/images/create-vector.png";
import recieve_vector from "../../assets/images/recieve-vector.png";
import share_vector from "../../assets/images/share-vector.png";
import pencil_vector from "../../assets/images/pencil-vector.png";
import lock_vector from "../../assets/images/lock-vector.png";
import progress_vector from "../../assets/images/progress-vector.png";
import box_vector from "../../assets/images/box-vector.png";
import user_vector from "../../assets/images/user-vector.png";
import bell_vector from "../../assets/images/bell-vector.png";
import pink_vector from "../../assets/images/pink-vector.png";
import orange_vector from "../../assets/images/orange-vector.png";
import green_vector from "../../assets/images/green-vector.png";

import "../../assets/css/views/landing/landing.scss";

import { accordionList } from "../../system/constants/GlobalConstants";
import FooterComponent from "../../shared/components/footerComponent/footerComponent";
import ContactFormCard from "../../shared/components/contactFormCard/contactFormCard";

const Landing = (props) => {
  return (
    <div className="main-container d-flex flex-coulmn justify-content-center">
      <div className="width-90">
        <div className="hero-container position-relative mt-5">
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
          <div className=" mb-5 row justify-content-between">
            <div className="col-md-4 col-12">
              <p className="heading text-center fw-bold mb-3 text-md-start">
                Why Hadeya?
              </p>
            </div>
            <div className="col-md-6 col-12">
              <p className="lead text-center text-md-start">
                Discover how Hadeya helps you create, share, and contribute to
                wishlists, making dreams achievable through collaboration and
                generosity.
              </p>
              <div className="mb-4 mb-md-0 line-container m-auto text-centerline-container m-auto m-md-0 text-center text-md-start">
                <div class="title-line mt-3">
                  <span class="dot"></span>
                </div>
                <img src={about_vector} className="pt-3" alt="" />
              </div>
            </div>
          </div>

          <div className="row justify-content-between g-4">
            <div className="col-xl-3 col-md-6">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img
                        src={pencil_vector}
                        width="40px"
                        height="40px"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Create and Share Wishlists
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Easily design and share your personalized wishlists with
                    friends and family.{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 my-2 my-md-0">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img
                        src={lock_vector}
                        width="40px"
                        height="40px"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Secure Contributions{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Enjoy peace of mind with secure payments for all
                    contributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 my-2 my-md-0">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img
                        src={progress_vector}
                        width="40px"
                        height="40px"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Track Your Progress{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Monitor your wishlist’s funding progress closely and stay
                    constantly motivated.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6 my-2 my-md-0">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img src={box_vector} width="40px" height="40px" alt="" />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Explore Diverse Categories{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Discover and contribute to wishlists across a variety of
                    categories.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 mt-4">
            <div className="col-md-6 col-md-4  my-md-0">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img
                        src={user_vector}
                        width="40px"
                        height="40px"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Collaborate and Give Back{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Support others' goals and make meaningful connections
                    through shared contributions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-md-4 my-2 my-md-0">
              <div
                className="card border-0 h-100"
                style={{ backgroundColor: "#F9FAFB", borderRadius: "8px" }}
              >
                <div className="card-body p-4">
                  <div className="d-flex flex-column justify-content-between mb-3">
                    <div className="d-flex justify-content-center align-items-center vector-container">
                      <img
                        src={bell_vector}
                        width="40px"
                        height="40px"
                        alt=""
                      />
                    </div>

                    <div className="mt-4 d-flex align-items-center gap-3">
                      <p className=" fw-bold number text-dark">
                        Real-Time Notifications{" "}
                      </p>
                    </div>
                  </div>
                  <p className="card-text">
                    Stay updated with instant alerts on contributions, funding
                    milestones, and wishlist updates.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section my-5 py-5">
          <div className=" mb-5 row justify-content-between">
            <div className="col-md-4 col-12">
              <p className="heading text-center fw-bold mb-3 text-md-start">
                FAQ Section{" "}
              </p>
            </div>
            <div className="col-md-6 col-12">
              <p className="lead text-center text-md-start">
                Find clear and concise answers to the most common questions
                about Hadeya .
              </p>
              <div className="mb-4 mb-md-0 line-container m-auto text-centerline-container m-auto m-md-0 text-center text-md-start">
                <div class="title-line mt-3">
                  <span class="dot"></span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-7 ">
              <div className="accordion" id="accordionExample">
                {accordionList.map((item, index) => {
                  const itemId = `accordion-item-${index}`;
                  const isFirst = index === 0;

                  return (
                    <div className="accordion-item" key={itemId}>
                      <h2 className="accordion-header" id={`heading-${index}`}>
                        <button
                          className={`accordion-button text-black ${
                            !isFirst ? "collapsed" : ""
                          }`}
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#${itemId}`}
                          aria-expanded={isFirst ? "true" : "false"}
                          aria-controls={itemId}
                        >
                          {item.title}
                        </button>
                      </h2>
                      <div
                        id={itemId}
                        className={`accordion-collapse collapse ${
                          isFirst ? "show" : ""
                        }`}
                        aria-labelledby={`heading-${index}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">{item.description}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-lg-7 col-md-5">
              <div className="d-flex justify-content-end">
                <img src={orange_vector} alt="" />
              </div>
              <div className="d-flex justify-content-center">
                <img src={pink_vector} alt="" />
              </div>
              <div className="d-flex justify-content-end">
                <img src={green_vector} alt="" />
              </div>
            </div>
          </div>
        </section>
        <ContactFormCard />
        <FooterComponent />
      </div>
    </div>
  );
};

export default Landing;
