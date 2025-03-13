import React from "react";

const SingleProductCard = ({
  img,
  title,
  description,
  currency,
  targetAmount,
  currentAmount,
}) => {
  const progressPercentage = () => {
    return Math.min(Math.round((currentAmount / targetAmount) * 100), 100);
  };
  return (
    <>
      {" "}
      <div className="  col-lg-4  col-md-7 my-3 my-lg-0 col-sm-10 col-12">
        <div className="shadow-sm card border-0  rounded-4 overflow-hidden" >
          <div className="p-4">
            <div className="text-center mb-4">
              <img
                src={img}
                className="img-fluid"
                style={{ maxHeight: "350px", objectFit: "contain" }}
              />
            </div>

            <div className="d-flex justify-content-between align-items-start mb-2">
              <p className="fw-bold mb-0 current-amount-style mb-0">{title}</p>
              <div className="current-amount-style fw-bold">
                {currentAmount} {currency}
              </div>
            </div>

            <p
              className="text-muted mb-4 description-style"
              style={{ fontSize: "0.95rem" }}
            >
              {description}
            </p>

            <div className="mb-2">
              <div
                className="progress rounded-pill"
                style={{ height: "8px", backgroundColor: "#f0f0f0" }}
              >
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{
                    width: `${progressPercentage()}%`,
                    backgroundColor: "#FF6B81",
                    borderRadius: "10px",
                  }}
                  aria-valuenow={progressPercentage()}
                  aria-valuemin={0}
                  aria-valuemax={100}
                ></div>
              </div>
            </div>

            <div className="d-flex justify-content-end mb-4">
              <span className="fw-bold target-amount-style">
                {targetAmount} {currency}
              </span>
            </div>
            <div className="d-flex justify-content-end">
              <button
                // onClick={onContribute}
                className="align-items-center border-0 btn-style d-flex fw-medium justify-content-center px-3 py-3"
              >
                Contribute
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProductCard;
