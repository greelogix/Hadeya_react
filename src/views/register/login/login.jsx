import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import "../../../assets/css/views/auth/auth.scss";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import PhoneInput from "react-phone-number-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import AppleIcon from "../../../assets/images/apple.png";
import GoogleIcon from "../../../assets/images/google.png";
import parsePhoneNumberFromString from "libphonenumber-js";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    // Formik Setup
    const formik = useFormik({
        initialValues: {
            phone: "",
            password: ""
        },
        validationSchema: Yup.object({
            phone: Yup.string()
                .test("is-valid-phone", "Please enter a valid phone number.", (value) => {
                    if (!value) return false;
                    const phoneNumber = parsePhoneNumberFromString(value);
                    return phoneNumber ? phoneNumber.isValid() : false;
                })
                .required("Phone number is required"),
            password: Yup.string()
                .min(6, "Password must be at least 6 characters.")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[a-z]/, "Password must contain at least one lowercase letter")
                .matches(/[0-9]/, "Password must contain at least one number")
                .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
                .required("Password is required"),
        }),
        onSubmit: (values) => {
            console.log("Form submitted:", values);
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

                    <h1 className="signup-title">Sign in</h1>
                    <p className="signup-subtitle">
                        Access your account and continue creating and sharing wishlists.
                    </p>

                    {/* Form Start */}
                    <form onSubmit={formik.handleSubmit}>
                        {/* Phone Input */}
                        <div className="auth-input-container">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <PhoneInput
                                className={`form-control auth-input d-flex align-items-center ${formik.touched.phone && formik.errors.phone ? 'is-invalid' : ''}`}
                                international
                                defaultCountry="PK"
                                value={formik.values.phone}
                                onChange={(phone) => formik.setFieldValue("phone", phone)}
                                onBlur={() => formik.setFieldTouched("phone", true)}
                            />
                            {formik.touched.phone && formik.errors.phone && (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.phone}</div>
                            )}
                        </div>

                        {/* Password Input */}
                        <div className="auth-input-container">
                            <label htmlFor="password" className="form-label">Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className={`form-control auth-input ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                                    id="password"
                                    name="password"
                                    value={formik.values.password}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    required
                                />
                                {!formik.errors.password && ( // Hide the icon if there's an error
                                    <button
                                        type="button"
                                        className="password-toggle"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                    </button>
                                )}
                            </div>
                            {formik.touched.password && formik.errors.password && (
                                <div className="text-danger error-text"
                                     style={{fontSize: '10px', marginTop: '5px'}}>{formik.errors.password}</div>
                            )}
                        </div>

                        {/* Remember Me & Forgot Password */}
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <div className="form-check">
                                <input className="form-check-input custom-checkbox" type="checkbox" id="rememberMe"/>
                                <label className="form-check-label custom-check-label" htmlFor="rememberMe">Remember
                                    Me</label>
                            </div>
                            <Link to="/forgot-password" className="forgot-link fw-semibold">Forgot password?</Link>
                        </div>

                        {/* Submit Button */}
                        <button type="submit" className="btn auth-btn-primary w-100">
                            Sign in
                        </button>
                    </form>

                    {/* OR Divider */}
                    <div className="divider">
                        <span className="divider-text">OR</span>
                    </div>

                    {/* Social Login Buttons */}
                    <button type="button" className="btn-social mb-3">
                        <img src={GoogleIcon} alt=""/>
                        <span className="ms-2">Sign in with Google</span>
                    </button>

                    <button type="button" className="btn-social">
                        <img src={AppleIcon} alt=""/>
                        <span className="ms-2">Sign in with Apple</span>
                    </button>

                    <div className="login-link">
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>

            <div className="auth-footer-rights">© 2025 Hadeya . All rights reserved.</div>
        </div>
    );
};

export default Login;
