import React, {useState} from "react";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import PhoneInput from "react-phone-number-input";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";


const Forgot = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [value, setValue] = useState()
    const [formData, setFormData] = useState({
        phone: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };
    const handlePhoneChange = (phone) => {
        setValue(phone);
        setFormData({...formData, phone});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

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

                    <h1 className="signup-title">Forget Password ?</h1>
                    <p className="signup-subtitle">
                        Reset your password and regain access to your account securely.
                    </p>

                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="phone" className="form-label">Phone</label>
                            <PhoneInput
                                className='auth-input'
                                international
                                defaultCountry="PK"
                                value={value}
                                onChange={handlePhoneChange}
                            />
                        </div>
                        <button type="submit" className="btn auth-btn-primary w-100">
                            Send OTP
                        </button>
                    </form>
                </div>
            </div>
            <div className="auth-footer-rights">
                © 2025 Hadeya . All rights reserved.
            </div>
        </div>
    );

}

export default Forgot;
