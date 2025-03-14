import React from "react";
import "../../../assets/css/components/wishlistPreview/wishlistPreview.scss";
import share from "../../../assets/images/share-vector.png";
import gift from "../../../assets/images/gift.png";
import gift2 from "../../../assets/images/gift-2.png";

const getColorValue = (color) => {
  const colorMap = {
    "Baby Blue": "#89CFF0",
    "Pastel Pink": "#FFB6C1",
    Purple: "#DDA0DD",
    "Mint Green": "#98FF98",
    Yellow: "#FFE4B5",
    Lavender: "#E6E6FA",
    "Soft Yellow": "#FFFACD",
    "Peach": "#FFE5B4",
    "Lilac": "#D8B4E2"
  };
  return colorMap[color] || "";
};

const WishlistPreview = ({ formValues }) => {
  const { title, description, layout, color, font } = formValues;
  const selectedColor = getColorValue(color);
  const layoutType = layout?.type || "grid-below";
  const gridColumns = layout?.gridColumns || 2;
  const gridItems = layout?.gridItems || 4;

  const contentSection = (
    <div className="content-section">
      <div className="header">
        <h3 style={{ fontFamily: font || "inherit" }}>{title || "Title"}</h3>
        <span>Amount</span>
      </div>
      <p style={{ fontFamily: font || "inherit" }}>
        {description || "Description"}
      </p>
    </div>
  );

  const gridSection = (
    <div
      className="gift-grid"
      style={{
        gridTemplateColumns: `repeat(${gridColumns}, 1fr)`,
        gridTemplateRows: `repeat(${Math.ceil(gridItems / gridColumns)}, 1fr)`,
      }}
    >
      {Array(gridItems)
        .fill()
        .map((_, index) => (
          <div
            key={index}
            className="gift-box"
            style={{
              backgroundColor: selectedColor ? `white` : "#FFE4E6",
            }}
          >
            <img src={gift2} width="100%" style={{ maxWidth: "50px" }} alt="" />
          </div>
        ))}
    </div>
  );

  const trackSection = (
    <div className="track-section">
      <div className="amount-display">
        <span>300</span>
        <div className="progress-bar">
          <div
            className="progress"
            style={{
              width: "60%",
              backgroundColor: selectedColor,
            }}
          ></div>
        </div>
        <span>0</span>
      </div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="col-10">
          <button className="d-flex justify-content-center track-button w-100 bg-white">
            Track Payments
          </button>
        </div>
        <div className="col-2 d-flex justify-content-end">
          <div className="p-3 rounded-5 bg-secondary-subtle share-container d-flex justify-content-center align-items-center">
            <img src={share} width="20px" alt="" />
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div
      className={`wishlist-preview ${layoutType}`}
      style={{
        backgroundColor: selectedColor ? `${selectedColor}20` : "white",
      }}
    >
      {layoutType === "content-first" ? (
        <>
          {contentSection}
          {gridSection}
          {trackSection}
        </>
      ) : (
        <>
          {gridSection}
          {contentSection}
          {trackSection}
        </>
      )}
    </div>
  );
};

export default WishlistPreview;
