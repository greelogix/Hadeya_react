import "../../../assets/css/views/auth/auth.scss";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import React, { useState, useRef } from "react";
import success from "../../../assets/images/success.svg";
import {Link} from "react-router-dom";

const OtpForm = ({ length = 6 }) => {
    const [otp, setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);
    const [verified, setVerified] = useState(false); // New state to track verification

    const handleChange = (index, event) => {
        const value = event.target.value.replace(/[^0-9]/g, ""); // Allow only numbers
        if (value) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            // Move to the next input
            if (index < length - 1 && inputRefs.current[index + 1]) {
                inputRefs.current[index + 1].focus();
            }
        }
    };

    const handleKeyDown = (index, event) => {
        if (event.key === "Backspace") {
            if (otp[index]) {
                // If input has a value, clear it
                const newOtp = [...otp];
                newOtp[index] = "";
                setOtp(newOtp);
            } else if (index > 0) {
                // Move to the previous input
                inputRefs.current[index - 1].focus();
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setVerified(true); // Set verification as successful
    };

    return (
        <div className="signup-container">
            <div className="container d-flex justify-content-center align-items-center">
                <div className="signup-card">
                    <div className="brand-logo">
                        <img src={hadeyaLogo} alt="Hadeya Logo" />
                    </div>

                    {!verified ? (
                        <>
                            <h1 className="signup-title">Verify Your Account</h1>
                            <p className="signup-subtitle">
                                Enter the 6-digit code sent to your phone to complete verification.
                            </p>

                            <form onSubmit={handleSubmit}>
                                <div className="d-flex justify-content-center align-items-center">
                                    {otp.map((digit, index) => (
                                        <React.Fragment key={index}>
                                            <input
                                                ref={(el) => (inputRefs.current[index] = el)}
                                                type="text"
                                                className="otp-input form-control text-center"
                                                maxLength="1"
                                                value={digit}
                                                onChange={(e) => handleChange(index, e)}
                                                onKeyDown={(e) => handleKeyDown(index, e)}
                                            />
                                            {index === 2 && <span className="mx-2 fs-4" style={{ color: '#D1D5DB' }}>-</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                                <div className="d-flex justify-content-between align-items-center my-3">
                                    <div>
                                        <p className="m-0">
                                            Didn’t receive the code? <a href="#" className="text-hedeya-primary">Resend</a>
                                        </p>
                                    </div>
                                    <div>
                                        <span style={{ color: '#D8B4E2' }}>01:50</span>
                                    </div>
                                </div>
                                <Link to='/set-password' type="submit" className="btn auth-btn-primary w-100">
                                    Verify
                                </Link>
                            </form>
                        </>
                    ) : (
                        <>
                            <div className="verification-success">
                                <div className='mb-5'>
                                    <img src={success} alt=""/>
                                </div>
                                <h2 className='fw-semibold'>Verification Successful!</h2>
                                <p>Your account has been verified successfully. You're all set to continue!</p>
                                <button className="btn auth-btn-primary w-100 mt-3" onClick={() => console.log("Go to dashboard")}>
                                    Get Started
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </div>

            <div className="auth-footer-rights">
                © 2025 Hadeya . All rights reserved.
            </div>
        </div>
    );
};

export default OtpForm;
