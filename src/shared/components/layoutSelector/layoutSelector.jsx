import React from "react";
import "../../../assets/css/components/layoutSelector/layoutSelector.scss";
import share from "../../../assets/images/share-vector.png";
import gift2 from "../../../assets/images/gift-2.png";

const layouts = [
  {
    id: "layout-1",
    name: "Layout 1",
    type: "grid-below",
    index: 0,

    gridItems: 4,
    gridColumns: 2,
    description: "2x2 Grid with content below",
  },
  {
    id: "layout-2",
    name: "Layout 2",
    type: "content-first",
    index: 1,
    gridItems: 4,
    gridColumns: 2,
    description: "2x2 Grid with content above",
  },
  {
    id: "layout-3",
    name: "Layout 3",
    type: "grid-below",
    index: 2,
    gridItems: 4,
    gridColumns: 4,
    description: "2x4 Grid with content below",
  },
];

const LayoutSelector = ({ value, onChange, error }) => {
  const handleLayoutSelect = (layout) => {
    onChange(layout); // Pass the entire layout object instead of just the ID
  };

  const selectedLayout =
    layouts.find((layout) => layout.id === value?.id) || layouts[0];

  return (
    <div className="layout-selector">
      <div className="layouts-grid">
        {layouts.map((layout) => (
          <div
            key={layout.id}
            className={`layout-option ${
              selectedLayout.id === layout.id ? "selected" : ""
            }`}
            onClick={() => handleLayoutSelect(layout)}
          >
            <div className={`layout-preview p-2 p-md-3 shadow ${layout.type}`}>
              {layout.type == "content-first" ? (
                <>
                  <div className="content-section">
                    <div className="header">
                      <h3>Title</h3>
                      <span>Amount</span>
                    </div>
                    <p>Description</p>
                  </div>
                  <div
                    className="gift-grid"
                    style={{
                      gridTemplateColumns: `repeat(${layout.gridColumns}, 1fr)`,
                      gridTemplateRows: `repeat(${Math.ceil(
                        layout.gridItems / layout.gridColumns
                      )}, 1fr)`,
                    }}
                  >
                    {Array(layout.gridItems)
                      .fill()
                      .map((_, index) => (
                        <div key={index} className="gift-box">
                          <img
                            src={gift2}
                            width="100%"
                            style={{ maxWidth: "50px" }}
                            alt=""
                          />
                        </div>
                      ))}
                  </div>
                  <div className="track-section">
                    <div className="amount-display">
                      <span>300</span>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>0</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="col-10">
                        <button className="d-flex justify-content-center track-button w-100">
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
                </>
              ) : (
                <>
                  <div
                    className="gift-grid"
                    style={{
                      gridTemplateColumns: `repeat(${layout.gridColumns}, 1fr)`,
                      gridTemplateRows: `repeat(${Math.ceil(
                        layout.gridItems / layout.gridColumns
                      )}, 1fr)`,
                    }}
                  >
                    {Array(layout.gridItems)
                      .fill()
                      .map((_, index) => (
                        <div key={index} className="gift-box">
                          <img
                            src={gift2}
                            width="100%"
                            style={{ maxWidth: "50px" }}
                            alt=""
                          />
                        </div>
                      ))}
                  </div>
                  <div className="content-section">
                    <div className="header">
                      <h3>Title</h3>
                      <span>Amount</span>
                    </div>
                    <p>Description</p>
                  </div>
                  <div className="track-section">
                    <div className="amount-display">
                      <span>300</span>
                      <div className="progress-bar">
                        <div
                          className="progress"
                          style={{ width: "60%" }}
                        ></div>
                      </div>
                      <span>0</span>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="col-10">
                        <button className="d-flex justify-content-center track-button w-100">
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {error && <div className="error-message">{error}</div>}
    </div>
  );
};

export default LayoutSelector;
