import React, {useState} from "react";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash, faCheckCircle} from "@fortawesome/free-solid-svg-icons";

const SetPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const getPasswordStrength = () => {
        if (password.length === 0) {
            return {color: "#E5E7EB", width: "0%"}; // Default state (no progress)
        }

        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumberOrSymbol = /[0-9!@#$%^&*]/.test(password);
        const isValidLength = password.length >= 8;

        if (!isValidLength) {
            return {color: "#FB7185", width: "30%"}; // Fixed red bar at 30%
        }

        if (isValidLength && (!hasUpperCase || !hasNumberOrSymbol)) {
            return {color: "#FBBF24", width: "60%"}; // Fixed yellow bar at 60%
        }

        return {color: "#6EE7B7", width: "100%"}; // Full green when all conditions are met
    };


    const isPasswordMatch = password && confirmPassword && password === confirmPassword;
    const togglePasswordVisibility = () => setShowPassword(!showPassword);

    return (
        <div className="signup-container">
            <div className="container d-flex justify-content-center align-items-center min-vh-100">
                <div className="signup-card">
                    <div className="brand-logo">
                        <img src={hadeyaLogo} alt="Hadeya Logo"/>
                    </div>
                    <h1 className="signup-title">Set a New Password</h1>
                    <p className="signup-subtitle">Create a strong password to secure your account and continue.</p>

                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">New Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control auth-input"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
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
                        <label htmlFor="confirm-password" className="form-label">Confirm New Password</label>
                        <div className="password-input-wrapper">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="form-control auth-input"
                                id="confirm-password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button type="button" className="password-toggle" onClick={togglePasswordVisibility}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye}/>
                            </button>
                        </div>
                        <div className="password-match d-flex align-items-center gap-2 mt-3">
                            <FontAwesomeIcon icon={faCheckCircle} style={{
                                color: isPasswordMatch ? "#6EE7B7" : "#D0D5DD",
                                transition: "color 0.3s ease",
                                width: '20px',
                                height: '20px'
                            }}/>
                            <span className='fs-14'> Password match perfectly.</span>
                        </div>
                    </div>
                    <button type="submit" className="btn auth-btn-primary w-100">
                        Change Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SetPassword;
