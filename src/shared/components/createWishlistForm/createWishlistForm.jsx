import React from "react";
import LayoutSelector from "../layoutSelector/layoutSelector";
import ColorPicker from "../colorPicker/colorPicker";
import FontSelector from "../fontSelector/fontSelector";
import "../../../assets/css/components/createWishlistForm/createWishlistForm.scss";
import { useNavigate } from "react-router-dom";

const CreateWishlistForm = ({ formik }) => {
  const navigate = useNavigate();
  return (
    <div className="create-wishlist-form">
      <div className="form-section">
        <h2>Create Wishlist</h2>
        <p className="section-subtitle">
          Create and personalize your wishlist.
        </p>

        <form onSubmit={formik.handleSubmit} noValidate>
          <div className="form-group">
            <label>Wishlist Title</label>
            <input
              type="text"
              {...formik.getFieldProps("title")}
              className={
                formik.errors.title && formik.touched.title ? "error" : ""
              }
              placeholder="Tech Dreams"
            />
            {formik.touched.title && formik.errors.title && (
              <div className="error-message">{formik.errors.title}</div>
            )}
          </div>

          <div className="form-group">
            <label>Font</label>
            <FontSelector
              value={formik.values.font}
              onChange={(value) => formik.setFieldValue("font", value)}
              error={formik.touched.font && formik.errors.font}
            />
          </div>

          <div className="form-group">
            <label>Color</label>
            <ColorPicker
              value={formik.values.color}
              onChange={(value) => formik.setFieldValue("color", value)}
              error={formik.touched.color && formik.errors.color}
            />
          </div>

          <div className="form-group">
            <label>Description</label>
            <textarea
              {...formik.getFieldProps("description")}
              className={
                formik.errors.description && formik.touched.description
                  ? "error"
                  : ""
              }
              placeholder="I add this wishlist for my friends and family to contribute, suggest, and even purchase gifts for special occasions."
            />
            {formik.touched.description && formik.errors.description && (
              <div className="error-message">{formik.errors.description}</div>
            )}
          </div>

          <div className="form-group">
            <label>Layout</label>
            <LayoutSelector
              value={formik.values.layout}
              onChange={(value) => formik.setFieldValue("layout", value)}
              error={formik.touched.layout && formik.errors.layout}
            />
          </div>

          <button
            type="submit"
            className="proceed-button"
            style={{ height: "48px" }}
            onClick={() => navigate("/add-wishList")}
          >
            Proceed
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateWishlistForm;
