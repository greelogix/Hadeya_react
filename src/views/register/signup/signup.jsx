import React, {useState} from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import "../../../assets/css/views/auth/auth.scss";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {Link} from "react-router-dom";
import OtpForm from "../../../shared/components/otp-form/otp-from";
import AppleIcon from "../../../assets/images/apple.png";
import GoogleIcon from "../../../assets/images/google.png";

const Signup = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [phoneValue, setPhoneValue] = useState('');
    const [showOtpModal, setShowOtpModal] = useState(false); // State for OTP modal


    const formik = useFormik({
        initialValues: {
            name: '',
            username: '',
            phone: '',
            password: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .matches(/^[a-zA-Z\s]*$/, "Only alphabets and spaces are allowed")
                .required("Name is required"),
            username: Yup.string().required("Username is required"),
            phone: Yup.string().required("Please enter a valid phone number."),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters.")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log('Form submitted:', values);
            setShowOtpModal(true); // Open OTP modal on successful submission
        }
    });

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="signup-container">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="signup-card">
                    <div className="brand-logo">
                        <img src={hadeyaLogo} alt="Hadeya Logo"/>
                    </div>

                    <h1 className="signup-title">Sign up</h1>
                    <p className="signup-subtitle">
                        Join Hadeya and start creating and sharing your wishlists today!
                    </p>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="auth-input-container">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control auth-input ${formik.touched.name && formik.errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                id="name"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                required
                            />
                            {formik.touched.name && formik.errors.name ? (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.name}</div>
                            ) : null}
                        </div>

                        <div className="auth-input-container">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input
                                type="text"
                                className="form-control auth-input"
                                id="username"
                                name="username"
                                value={formik.values.username}
                                onChange={formik.handleChange}
                                required
                            />
                        </div>

                        <div className="auth-input-container">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <PhoneInput
                                className={`auth-input ${formik.touched.phone && formik.errors.phone ? 'error' : ''}`}
                                international
                                defaultCountry="PK"
                                value={phoneValue}
                                onChange={(phone) => {
                                    setPhoneValue(phone);
                                    formik.setFieldValue("phone", phone);
                                }}
                            />
                            {formik.touched.phone && formik.errors.phone ? (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.phone}</div>
                            ) : null}
                        </div>

                        <div className="auth-input-container">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-control auth-input ${formik.touched.password && formik.errors.password ? 'error' : ''}`}
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                <button
                                    type="button"
                                    className="password-toggle"
                                    onClick={togglePasswordVisibility}
                                >
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                            {formik.touched.password && formik.errors.password ? (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.password}</div>
                            ) : null}
                        </div>

                        <button type="submit" className="btn auth-btn-primary w-100">
                            Sign Up
                        </button>
                    </form>

                    <div className="divider">
                        <span className="divider-text">OR</span>
                    </div>

                    <button type="button" className="btn-social mb-3">
                        <img src={GoogleIcon} alt=""/>
                        <span className="ms-2">Sign up with Google</span>
                    </button>

                    <button type="button" className="btn-social">
                        <img src={AppleIcon} alt=""/>
                        <span className="ms-2">Sign up with Apple</span>
                    </button>

                    <div className="login-link">
                        Already have an account? <Link to="/login">Log in</Link>
                    </div>
                </div>
            </div>

            <div className="auth-footer-rights">
                © 2025 Hadeya . All rights reserved.
            </div>

            {showOtpModal && (
                <div className="otp-modal-overlay" onClick={() => setShowOtpModal(false)}>
                    <div className="otp-modal-content" onClick={(e) => e.stopPropagation()}>
                        <div className="signup-otp-wrapper">
                            <OtpForm/>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Signup;
