import React from "react";
import "../../../assets/css/views/addWishList/addWishList.scss";
const AddWishListProductCard = ({
  img,
  title,
  description,
  currency,
  targetAmount,
  currentAmount,
  commission,
}) => {
  return (
    <>
      {" "}
      <div className="  col-xl-3  col-md-6 my-3 my-lg-0 col-sm-10 col-12">
        <div className="shadow-sm my-4 card border-0  rounded-4 overflow-hidden">
          <div className="p-4">
            <div className="text-center mb-4">
              <img
                src={img}
                className="img-fluid"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>

            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="fw-semibold mb-0 current-amount-style mb-0">
                {title}
              </p>
              <i class="fa-solid fa-location-arrow"></i>
            </div>

            <p
              className="text-muted mb-4 description-style"
              style={{ fontSize: "0.95rem" }}
            >
              {description}
            </p>
            <div className="d-flex justify-content-between">
              <div className="bg-secondary-subtle rounded-4 px-2 py-1 d-flex align-items-center gap-2">
                <i class="fa-solid fa-dollar-sign"></i>
                <p className="mb-0 fs-12">Base Amount</p>
              </div>
              <p className="mb-0 fw-semibold">
                {targetAmount} {currency}
              </p>
            </div>
            <div className="d-flex justify-content-between my-3">
              <div className="bg-secondary-subtle rounded-4 px-2 py-1 d-flex align-items-center gap-2">
                <i class="fa-solid fa-money-check-dollar"></i>
                <p className="mb-0 fs-12">Admin Commission </p>
              </div>
              <p className="mb-0 fw-semibold fs-14">
                {commission} {currency}
              </p>
            </div>

            <div className="">
              <button
                // onClick={onContribute}
                className="align-items-center border-0 btn-style d-flex fw-medium justify-content-center px-3 py-3 w-100 mt-3"
                style={{ height: "40px" }}
              >
                Add Item +{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddWishListProductCard;
