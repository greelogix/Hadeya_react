import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import PhoneInput from "react-phone-number-input";
import {parsePhoneNumberFromString} from "libphonenumber-js";
import {Link} from "react-router-dom";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import "react-phone-number-input/style.css";

const Forgot = () => {
    // Formik setup
    const formik = useFormik({
        initialValues: {
            phone: "",
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .required("Phone number is required")
                .test("is-valid-phone", "Please enter a valid phone number.", (value) => {
                    if (!value) return false;
                    const phoneNumber = parsePhoneNumberFromString(value);
                    return phoneNumber && phoneNumber.isValid();
                }),
        }),
        onSubmit: (values) => {
            console.log("Form submitted:", values);
        },
    });

    return (
        <div className="signup-container">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="signup-card">
                    {/* Logo */}
                    <div className="brand-logo">
                        <img src={hadeyaLogo} alt="Hadeya Logo"/>
                    </div>

                    {/* Title & Subtitle */}
                    <h1 className="signup-title">Forget Password ?</h1>
                    <p className="signup-subtitle">
                        Reset your password and regain access to your account securely.
                    </p>

                    {/* Formik Form */}
                    <form onSubmit={formik.handleSubmit}>
                        <div className="auth-input-container">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <PhoneInput
                                className={`auth-input form-control d-flex align-items-center ${
                                    formik.touched.phone && formik.errors.phone ? "is-invalid" : ""
                                }`}
                                international
                                defaultCountry="PK"
                                value={formik.values.phone}
                                onChange={(phone) => formik.setFieldValue("phone", phone)}
                                onBlur={() => formik.setFieldTouched("phone", true)}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn auth-btn-primary w-100">
                           <Link to='/verify' className='text-black'>Send OTP </Link>
                        </button>
                    </form>

                </div>
            </div>

            {/* Copyright Footer */}
            <div className="auth-footer-rights">
                © 2025 Hadeya. All rights reserved.
            </div>
        </div>
    );
};

export default Forgot;
