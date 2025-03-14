import React from "react";
import "../../assets/css/views/myWishListDetail/myWishListDetail.scss";
import avatar from "../../assets/images/Avatar.png";
import twitter from "../../assets/images/x-twitter.png";
import wtp from "../../assets/images/wtp-icons.png";
import facebbok from "../../assets/images/facebbok.png";
import instgram from "../../assets/images/instgram.png";
import snapchat from "../../assets/images/snapchat.png";
import single_logo from "../../assets/images/single-logo.png";
import Chart from "../../shared/components/chart/chart";
import {
  pieChartData,
  techWishlistItems,
} from "../../system/constants/GlobalConstants";
import Modal from "../../shared/components/modal/modal";
import MultipleProductCard from "../../shared/components/multipleProductCard/multipleProductCard";
import FooterComponent from "../../shared/components/footerComponent/footerComponent";
import { connect } from "react-redux";
import { modalActions } from "../../redux/actions/modal.actions/modal.actions";
import ProfileForm from "../../shared/components/profileForm/profileForm";

const MyWishList = (props) => {
  const handleModal = () => props.handleModal();

  return (
    <div className="main-container d-flex flex-coulmn justify-content-center">
      <div className="width-90 my-wishlist">
        <div className="head-section mt-5">
          <p className="fw-semibold heading">My Wishlist</p>
          <p className="fs-16 gray-lite-clr">
            Manage your lists with ease—track, edit, and fulfill your wishes.
          </p>
        </div>

        <div className="profile-detail-container mt-5">
          <div className="row m-0">
            <div className="col-lg-6 col-12 bg-white radius-16 p-4">
              <div className="d-flex justify-content-between">
                <div className="d-flex gap-3">
                  <div className="avatar-container">
                    <img src={avatar} alt="" />
                  </div>
                  <div>
                    <p className="fw-semibold fs-16 mb-0">Fahd Abduallah </p>
                    <p className="fs-14">Fahd Abduallah Ahmed Al-Sabah</p>
                  </div>
                </div>
                <div className="d-flex justify-content-center align-items-center edit-btn">
                  <i
                    onClick={handleModal}
                    class="fa-regular fa-pen-to-square pointer"
                  ></i>
                </div>
              </div>
              <p className="fs-18 py-3">
                Passionate about tech, sneakers, and coffee. Always looking for
                unique finds to add to my wishlist!
              </p>
              <div className="d-flex gap-2 pt-1 pb-2 pb-sm-3">
                <i class="fa-regular fa-envelope"></i>
                <p className="fs-12">fahd@gmail.com</p>
              </div>
              <div className="d-flex gap-2 pt-1 pb-2 pb-sm-3">
                <i class="fa-solid fa-location-dot"></i>{" "}
                <p className="fs-12">
                  Villa 17, Street 42, Al-Qamar District, Kuwait City, 15005,
                  Kuwait.
                </p>
              </div>
              <div className="d-flex gap-2 pt-1 pb-2 pb-sm-3">
                <i class="fa-solid fa-phone"></i>{" "}
                <p className="fs-12">+965 555 2222</p>
              </div>
              <div className="d-flex social-wishlist-section gap-2 mt-1 mt-sm-3">
                <a href="https://whatsapp.com" className="text-success fs-4">
                  <img src={wtp} width="22px" alt="" />
                </a>
                <a href="https://twitter.com" className="text-dark fs-4">
                  <img src={twitter} width="22px" alt="" />{" "}
                </a>
                <a href="https://instagram.com" className="text-danger fs-4">
                  <img src={instgram} width="22px" alt="" />{" "}
                </a>
                <a href="https://snapchat.com" className="text-warning fs-4">
                  <img src={snapchat} width="22px" alt="" />{" "}
                </a>
                <a href="https://facebook.com" className="text-primary fs-4">
                  <img src={facebbok} width="22px" alt="" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="create-wishlist-container mt-5">
          <div className="row m-0 justify-content-between mb-5">
            <div className="col-lg-6 col-12 radius-16 p-4 create-section">
              <div className="row h-100">
                <div className="col-sm-6 d-flex flex-column justify-content-center order-last order-sm-first">
                  <p className="fs-24 text-white fw-semibold">
                    Create a Wishlist
                  </p>
                  <p className="fs-16 text-white fw-semibold py-4">
                    Start building your wishlist by adding items and
                    personalizing it to match your goals.
                  </p>
                  <button className="btn radius-30 bg-white w-100 height-48">
                    Create Wishlist +
                  </button>
                </div>
                <div className="col-sm-6 d-flex justify-content-center align-items-center order-sm-last  logo-section py-3 py-sm-0">
                  <img src={single_logo} alt="" />
                </div>
              </div>
            </div>
            <div className="col-lg-5 col-12 shadow-sm bg-white p-4  border-0 radius-16 mt-3 mt-lg-0">
              <Chart data={pieChartData} />
            </div>
          </div>
        </div>

        <div className="products-section mt-5">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <p className="fs-20 fw-semibold text-black mb-2">Wishlists</p>
              <p className="fs-14 text-muted">
                View, manage, and update all your wishlists in one place
              </p>
            </div>
          </div>
          <hr className="my-4" />
          <div className="wishlist-items row">
            {techWishlistItems.map((item) => (
              <MultipleProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <FooterComponent />
      </div>

      <Modal centered={true} show={props.modalOpen} handleClose={handleModal}>
        <ProfileForm />
      </Modal>
    </div>
  );
};
const mapStateToProps = (state) => ({
  modalOpen: state.modalReducer.modalOpen,
});
const mapDispatchToProps = (dispatch) => ({
  handleModal: () => dispatch(modalActions.handleModal()),
});
export default connect(mapStateToProps, mapDispatchToProps)(MyWishList);
