import React, { useEffect, useRef } from "react";
// import "./WishlistItem.scss";
import "../../../assets/css/components/multipleProductCard/multipleProductCard.scss";

const MultipleProductCard = ({ item }) => {
  const progressPercentage = (item.currentAmount / item.totalAmount) * 100;
  const productImageRef = useRef(null);
  const moreItemsRef = useRef(null);
  const displayedItems = 3; // Number of items we're displaying
  const remainingItems = item.items.length > displayedItems ? 
    item.items.length - displayedItems : 0;

  useEffect(() => {
    const matchHeight = () => {
      if (productImageRef.current && moreItemsRef.current) {
        const imageHeight = productImageRef.current.offsetHeight;
        const parentHeight = productImageRef.current.parentElement.offsetHeight;
        moreItemsRef.current.style.height = `${imageHeight}px`;
        moreItemsRef.current.parentElement.style.height = `${parentHeight}px`;
      }
    };
    matchHeight();
    window.addEventListener("resize", matchHeight);
    return () => {
      window.removeEventListener("resize", matchHeight);
    };
  }, []);

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case "public":
        return "bg-purple";
      case "pending":
        return "bg-pink";
      case "fulfilled":
        return "bg-success";
      case "approved":
        return "bg-info";
      default:
        return "bg-warning";
    }
  };

  return (
    <div className="col-lg-3 col-md-6 col-12 mb-4">
      <div className="wishlist-item bg-white p-4 radius-16 h-100">
        <div className="product-grid">
          {item.items.slice(0, displayedItems).map((product, index) => (
            <div key={index}>
              <div
                className="product-image"
                ref={index === 0 ? productImageRef : null}
              >
                <img src={product.image} alt={product.title} />
              </div>
              <p className="product-title pt-2 fs-12">{product.title}</p>
            </div>
          ))}
          <div className="more-items-wrapper">
            <div className="more-items" ref={moreItemsRef}>
              <span>+{remainingItems}</span>
            </div>
            <p className="product-title pt-2 fs-12">&nbsp;</p>
          </div>
        </div>

        <div className="wishlist-details mt-3">
          <div className="mb-2">
            <div className="d-flex justify-content-between mb-2">
              <h3 className="item-title">{item.title}</h3>
              <h3 className="total-amount">
                {item.totalAmount} {item.currency}
              </h3>
            </div>
            <div>
              <p className="item-description text-muted">{item.description}</p>
            </div>
          </div>

          <div className="progress-container mb-3 row align-items-center">
            <div className="progress col-9 p-0" style={{ height: "8px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                style={{
                  width: `${progressPercentage}%`,
                  backgroundColor:
                    progressPercentage === 0
                      ? "#10B981"
                      : progressPercentage === 100
                      ? "#FF0000"
                      : "#FFD700",
                }}
                aria-valuenow={progressPercentage}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
            <div className="col-3">
              <p className="fs-16 fw-semibold">
                {item.currentAmount} {item.currency}
              </p>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-2">
              <span
                className={`badge rounded-pill text-white fw-medium ${getStatusClass(
                  item.status
                )}`}
              >
                {item.items.length} items
              </span>
              <span
                className={`badge rounded-pill text-white fw-medium ${getStatusClass(
                  item.status
                )}`}
              >
                {item.status}
              </span>
            </div>
            <div className="action-buttons d-flex align-items-center gap-3">
              <button className="btn btn-link p-0 me-3">
                <i className="fa-regular fa-eye fs-20"></i>
              </button>
              <button className="btn btn-link p-0 me-3">
                <i className="fa-regular fa-trash-can fs-20"></i>
              </button>
              <button className="btn btn-link p-0">
                <i className="fa-regular fa-pen-to-square fs-20"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultipleProductCard;
