import React, {useState} from "react";
import {useFormik} from "formik";
import * as Yup from "yup";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";

const SetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    const formik = useFormik({
        initialValues: {
            password: "",
            confirmPassword: ""
        },
        validationSchema: Yup.object({
            password: Yup.string()
                .min(8, "Password must be at least 8 characters")
                .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
                .matches(/[0-9!@#$%^&*]/, "Password must contain at least one number or symbol")
                .required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref("password"), null], "Passwords must match")
                .required("Confirm Password is required")
        }),
        onSubmit: (values) => {
            console.log("Form Submitted", values);
        }
    });

    const getPasswordStrength = () => {
        const password = formik.values.password;
        if (password.length === 0) return {color: "#E5E7EB", width: "0%"};

        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumberOrSymbol = /[0-9!@#$%^&*]/.test(password);
        const isValidLength = password.length >= 8;

        if (!isValidLength) return {color: "#FB7185", width: "30%"};
        if (isValidLength && (!hasUpperCase || !hasNumberOrSymbol)) return {color: "#FBBF24", width: "60%"};
        return {color: "#6EE7B7", width: "100%"};
    };

    const hasStartedTypingConfirm = formik.values.confirmPassword.length > 0;
    const isPasswordMatch = hasStartedTypingConfirm && formik.values.password === formik.values.confirmPassword;


    return (
        <div className="signup-container">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="signup-card">
                    <div className="brand-logo">
                        <img src={hadeyaLogo} alt="Hadeya Logo"/>
                    </div>
                    <h1 className="signup-title">Set a New Password</h1>
                    <p className="signup-subtitle">Create a strong password to secure your account and continue.</p>

                    <form onSubmit={formik.handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">New Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control auth-input"
                                    id="password"
                                    {...formik.getFieldProps("password")}
                                />
                                <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                            <div className="password-strength-container"
                                 style={{backgroundColor: '#E5E7EB', borderRadius: '10px'}}>
                                <div className="password-strength" style={{
                                    backgroundColor: getPasswordStrength().color,
                                    width: getPasswordStrength().width,
                                    height: "6px",
                                    transition: "width 0.3s ease-in-out",
                                    marginTop: '15px',
                                    borderRadius: '10px'
                                }}></div>
                            </div>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="confirmPassword" className="form-label">Confirm New Password</label>
                            <div className="password-input-wrapper">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    className="form-control auth-input"
                                    id="confirmPassword"
                                    {...formik.getFieldProps("confirmPassword")}
                                />
                                <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                                </button>
                            </div>
                            <div className="password-match d-flex align-items-center gap-2 mt-3">
                                <FontAwesomeIcon
                                    icon={hasStartedTypingConfirm ? (isPasswordMatch ? faCheckCircle : faTimesCircle) : faCheckCircle}
                                    style={{
                                        color: hasStartedTypingConfirm ? (isPasswordMatch ? "#6EE7B7" : "#FB7185") : "#A0A0A0",
                                        transition: "color 0.3s ease",
                                        width: '20px',
                                        height: '20px'
                                    }}
                                />
                                <span className='fs-14'
                                      style={{color: hasStartedTypingConfirm ? (isPasswordMatch ? "#6EE7B7" : "#FB7185") : "#A0A0A0"}}>
                                    {hasStartedTypingConfirm ? (isPasswordMatch ? "Password match perfectly." : "Password is not matched.") : "Type to confirm password"}</span>
                            </div>
                        </div>
                        <button type="submit" className="btn auth-btn-primary w-100">
                            Change Password
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
