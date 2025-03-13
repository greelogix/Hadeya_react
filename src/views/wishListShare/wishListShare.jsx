import React from "react";
import "../../assets/css/views/wishListDetail/wishListDetail.scss";
import twitter from "../../assets/images/x-twitter.png";
import wtp from "../../assets/images/wtp-icons.png";
import facebbok from "../../assets/images/facebbok.png";
import instgram from "../../assets/images/instgram.png";
import snapchat from "../../assets/images/snapchat.png";
import share from "../../assets/images/share-vector.png";
import user from "../../assets/images/user-01.png";
import { productList } from "../../system/constants/GlobalConstants";
import FooterComponent from "../../shared/components/footerComponent/footerComponent";
import SingleProductCard from "../../shared/components/singleProductCard/singleProductCard"
import ContactFormCard from "../../shared/components/contactFormCard/contactFormCard";

const WishListShare = () => {
  return (
    <div className="main-container d-flex flex-coulmn justify-content-center">
      <div className="width-90">
        <div className="personal-detail d-flex justify-content-center align-items-center py-5 my-4">
          <div className="text-center border-0  p-4 ">
            <div className="mx-auto profile-container  d-flex justify-content-center align-items-center">
              <img
                src={user}
                alt="Profile"
                className="rounded-circle img-fluid"
              />
            </div>

            <div className="mt-3 d-flex justify-content-center align-items-center gap-2">
              <h5 className="fw-bold mb-0">Fahd Abduallah</h5>
              <div className="p-2 bg-secondary-subtle share-container d-flex justify-content-center align-items-center">
                <img src={share} width="20px" alt="" />
              </div>
            </div>

            <p className="text-muted mt-2 px-3">
              Passionate about tech, sneakers, and coffee. Always looking for{" "}
              <br />
              unique finds to add to my wishlist!
            </p>

            <div className="d-flex justify-content-center gap-3 mt-3">
              <a href="https://whatsapp.com" className="text-success fs-4">
                <img src={wtp} alt="" />
              </a>
              <a href="https://twitter.com" className="text-dark fs-4">
                <img src={twitter} alt="" />{" "}
              </a>
              <a href="https://instagram.com" className="text-danger fs-4">
                <img src={instgram} alt="" />{" "}
              </a>
              <a href="https://snapchat.com" className="text-warning fs-4">
                <img src={snapchat} alt="" />{" "}
              </a>
              <a href="https://facebook.com" className="text-primary fs-4">
                <img src={facebbok} alt="" />{" "}
              </a>
            </div>
          </div>
        </div>
        <section>
          <div className="row product-section mx-auto container justify-content-lg-between justify-content-around p-0 g-5">
            {productList.map((item) => (
              <SingleProductCard
                img={item.img}
                title={item.title}
                description={item.description}
                currency={item.currency}
                targetAmount={item.targetAmount}
                currentAmount={item.currentAmount}
              />
            ))}
          </div>
        </section>
        <ContactFormCard />
        <FooterComponent />
      </div>
    </div>
  );
};

export default WishListShare;
