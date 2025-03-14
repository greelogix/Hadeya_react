import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "../../../assets/css/components/profileForm/profileForm.scss";
import profile from "../../../assets/images/profile-form.png";

const SocialInput = ({ label, name, formik }) => {
  return (
    <div className="form-group social-input">
      <label>{label}</label>
      <div className="input-wrapper">
        <span className="http-prefix">http://</span>
        <input
          type="text"
          {...formik.getFieldProps(name)}
          className={formik.errors[name] && formik.touched[name] ? "error" : ""}
        />
      </div>
      {formik.touched[name] && formik.errors[name] && (
        <div className="error-message">{formik.errors[name]}</div>
      )}
    </div>
  );
};

const ProfileForm = () => {
  const [previewImage, setPreviewImage] = useState(profile);
  const [isDefaultImage, setIsDefaultImage] = useState(true);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    displayName: Yup.string().required("Display Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    deliveryAddress: Yup.string().required("Delivery Address is required"),
    bio: Yup.string(),
    whatsapp: Yup.string()
      .matches(
        /^[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
        "Please enter a valid domain"
      )
      .nullable(),
    twitter: Yup.string()
      .matches(
        /^[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
        "Please enter a valid domain"
      )
      .nullable(),
    instagram: Yup.string()
      .matches(
        /^[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
        "Please enter a valid domain"
      )
      .nullable(),
    snapchat: Yup.string()
      .matches(
        /^[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
        "Please enter a valid domain"
      )
      .nullable(),
    facebook: Yup.string()
      .matches(
        /^[a-zA-Z0-9-_.]+\.[a-zA-Z0-9-.]+$/,
        "Please enter a valid domain"
      )
      .nullable(),
  });

  const formik = useFormik({
    initialValues: {
      fullName: "",
      displayName: "",
      email: "",
      deliveryAddress: "",
      bio: "",
      whatsapp: "",
      twitter: "",
      instagram: "",
      snapchat: "",
      facebook: "",
      profileImage: null,
    },
    validationSchema,
    onSubmit: (values) => {
      // Transform social media URLs to include http:// if not present
      const transformedValues = {
        ...values,
        whatsapp: values.whatsapp ? `http://${values.whatsapp}` : "",
        twitter: values.twitter ? `http://${values.twitter}` : "",
        instagram: values.instagram ? `http://${values.instagram}` : "",
        snapchat: values.snapchat ? `http://${values.snapchat}` : "",
        facebook: values.facebook ? `http://${values.facebook}` : "",
      };
      console.log("Form Values:", transformedValues);
    },
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        formik.setFieldValue("profileImage", file);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewImage(reader.result);
          setIsDefaultImage(false);
        };
        reader.readAsDataURL(file);
      } else {
        console.error("Please select an image file");
      }
    }
  };

  return (
    <div className="profile-form">
      <h2>My Profile</h2>
      <p className="subtitle">An introduction to who I am.</p>

      <form onSubmit={formik.handleSubmit} noValidate>
        <div className="image-upload-section">
          <div className="align-items-center avatar-preview d-flex justify-content-center">
            <img
              src={previewImage}
              alt="Profile"
              style={
                !isDefaultImage
                  ? { width: "100%", height: "100%", objectFit: "cover" }
                  : undefined
              }
            />
            <input
              type="file"
              id="profileImage"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden-input"
            />
            <label htmlFor="profileImage" className="camera-icon">
              <i className="fa-solid fa-camera"></i>
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Full Name (Hidden)</label>
          <input
            type="text"
            {...formik.getFieldProps("fullName")}
            className={
              formik.errors.fullName && formik.touched.fullName ? "error" : ""
            }
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="error-message">{formik.errors.fullName}</div>
          )}
        </div>

        <div className="form-group">
          <label>Display Name</label>
          <input
            type="text"
            {...formik.getFieldProps("displayName")}
            className={
              formik.errors.displayName && formik.touched.displayName
                ? "error"
                : ""
            }
          />
          {formik.touched.displayName && formik.errors.displayName && (
            <div className="error-message">{formik.errors.displayName}</div>
          )}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            {...formik.getFieldProps("email")}
            className={
              formik.errors.email && formik.touched.email ? "error" : ""
            }
          />
          {formik.touched.email && formik.errors.email && (
            <div className="error-message">{formik.errors.email}</div>
          )}
        </div>

        <div className="form-group">
          <label>Delivery Address</label>
          <input
            type="text"
            {...formik.getFieldProps("deliveryAddress")}
            className={
              formik.errors.deliveryAddress && formik.touched.deliveryAddress
                ? "error"
                : ""
            }
          />
          {formik.touched.deliveryAddress && formik.errors.deliveryAddress && (
            <div className="error-message">{formik.errors.deliveryAddress}</div>
          )}
        </div>

        <div className="form-group">
          <label>Bio (Optional)</label>
          <textarea
            {...formik.getFieldProps("bio")}
            className={formik.errors.bio && formik.touched.bio ? "error" : ""}
          />
        </div>

        <SocialInput
          label="WhatsApp (Optional)"
          name="whatsapp"
          formik={formik}
        />
        <SocialInput
          label="Twitter X (Optional)"
          name="twitter"
          formik={formik}
        />
        <SocialInput
          label="Instagram (Optional)"
          name="instagram"
          formik={formik}
        />
        <SocialInput
          label="Snapchat (Optional)"
          name="snapchat"
          formik={formik}
        />
        <SocialInput
          label="Facebook (Optional)"
          name="facebook"
          formik={formik}
        />

        <button type="submit" className="save-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
