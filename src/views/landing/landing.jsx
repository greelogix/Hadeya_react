import img_bg from "../../assets/images/landing-hero-bg.jpeg";
import about_vector from "../../assets/images/about-vector.png";
import "../../assets/css/views/landing/landing.scss";

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
              <div class="col-lg-4  ">
                <div className="mb-5 mb-md-0 line-container m-auto text-centerline-container m-auto m-md-0 text-center text-md-start">
                  <h2 class="title">About Hadeya</h2>
                  <div class="title-line mt-3">
                    <span class="dot"></span>
                  </div>
                  <img src={about_vector} className="pt-3" alt="" />
                </div>
              </div>
              <div class="col-lg-6">
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
      </div>
    </div>
  );
};

export default Landing;
