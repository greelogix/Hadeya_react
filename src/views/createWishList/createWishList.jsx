import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import CreateWishlistForm from "../../shared/components/createWishlistForm/createWishlistForm";
import WishlistPreview from "../../shared/components/wishlistPreview/wishlistPreview";
import "../../assets/css/views/createWishList/createWishList.scss";
import FooterComponent from "../../shared/components/footerComponent/footerComponent";

const CreateWishList = () => {
  const validationSchema = Yup.object({
    title: Yup.string().required("Wishlist Title is required"),
    font: Yup.string().required("Font selection is required"),
    color: Yup.string().required("Color selection is required"),
    description: Yup.string(),
    layout: Yup.object().required("Layout selection is required"),
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      font: "",
      color: "",
      description: "",
      layout: {
        id: "layout-1",
        name: "Layout 1",
        type: "grid-below",
        gridItems: 4,
        gridColumns: 2,
        description: "2x2 Grid with content below",
      },
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Form submitted with values:", values);
    },
  });

  return (
    <div className="create-wishlist-container d-flex flex-coulmn justify-content-center">
      <div className="width-90 pt-4">
        <h1 className="heading">Create Your Wishlist</h1>
        <p className="subtitle">
          Customize your list and start turning dreams into reality.
        </p>

        <div className="row justify-content-between mt-4">
          <div className="col-lg-6">
            <CreateWishlistForm formik={formik} />
          </div>
          <div className="col-lg-4">
            <WishlistPreview formValues={formik.values} />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <FooterComponent/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateWishList;
