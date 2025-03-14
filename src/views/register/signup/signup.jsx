import React, { useState } from "react";
import "../../../assets/css/views/auth/auth.scss";
import hadeyaLogo from "../../../assets/images/hedeya-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name" && !/^[a-zA-Z\s]*$/.test(value)) {
      return; // Prevent updating state if the value contains numbers or special characters
    }
    setFormData({ ...formData, [name]: value });
  };
  const handlePhoneChange = (phone) => {
    setValue(phone);
    setFormData({ ...formData, phone });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="signup-container">
      <div className="container d-flex justify-content-center align-items-center min-vh-100">
        <div className="signup-card">
          <div className="brand-logo">
            <img src={hadeyaLogo} alt="Hadeya Logo" />
          </div>

          <h1 className="signup-title">Sign up</h1>
          <p className="signup-subtitle">
            Join Hadeya and start creating and sharing your wishlists today!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control auth-input"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control auth-input"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <PhoneInput
                className="auth-input"
                international
                defaultCountry="PK"
                value={value}
                onChange={handlePhoneChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <div className="password-input-wrapper">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control auth-input"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={togglePasswordVisibility}
                >
                  <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>

            <button type="submit" className="btn auth-btn-primary w-100">
              Sign Up
            </button>
          </form>

          <div className="divider">
            <span className="divider-text">OR</span>
          </div>

          <button type="button" className="btn-social mb-3">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.1712 8.36791H17.5V8.33332H10V11.6667H14.6096C13.9522 13.6071 12.1024 15 10 15C7.23858 15 5.00001 12.7614 5.00001 10C5.00001 7.23857 7.23858 5 10 5C11.2741 5 12.4382 5.48878 13.3282 6.28975L15.6095 4.00846C14.1878 2.66209 12.2066 1.83333 10 1.83333C5.39763 1.83333 1.66667 5.56428 1.66667 10C1.66667 14.4357 5.39763 18.1667 10 18.1667C14.6024 18.1667 18.3333 14.4357 18.3333 10C18.3333 9.44495 18.2738 8.9045 18.1712 8.36791Z"
                fill="#4285F4"
              />
              <path
                d="M2.62744 6.12592L5.26108 8.02683C5.963 6.28575 7.81474 5 10 5C11.2741 5 12.4382 5.48875 13.3282 6.28975L15.6095 4.00846C14.1878 2.66209 12.2066 1.83333 10 1.83333C6.83237 1.83333 4.11259 3.60469 2.62744 6.12592Z"
                fill="#EA4335"
              />
              <path
                d="M10 18.1667C12.1546 18.1667 14.0945 17.3808 15.5111 16.0992L13.0121 13.9875C12.1794 14.6452 11.1283 15 10 15C7.9057 15 6.06171 13.618 5.39979 11.6892L2.7754 13.7333C4.24537 16.3071 6.95045 18.1667 10 18.1667Z"
                fill="#34A853"
              />
              <path
                d="M18.1712 8.36789H17.5V8.33331H10V11.6666H14.6096C14.2952 12.5902 13.7206 13.3844 12.9999 13.9873L12.9999 13.9871L15.4989 16.0989C15.3144 16.2689 18.3333 14 18.3333 9.99998C18.3333 9.44493 18.2738 8.90447 18.1712 8.36789Z"
                fill="#4285F4"
              />
            </svg>
            <span className="ms-2">Sign up with Google</span>
          </button>

          <button type="button" className="btn-social">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.2206 10.1788C15.2376 8.98755 15.82 7.9406 16.7823 7.229C16.2326 6.44624 15.3323 5.95157 14.1441 5.73858C13.0214 5.5324 11.8185 6.0002 11.2195 6.0002C10.5937 6.0002 9.54348 5.7593 8.6709 5.7763C7.48616 5.79311 6.38029 6.37429 5.77402 7.31125C4.51646 9.22172 5.4638 12.0403 6.66945 13.6003C7.27139 14.3678 7.97607 15.2116 8.90371 15.1782C9.80025 15.1423 10.151 14.603 11.2363 14.603C12.3047 14.603 12.6386 15.1782 13.5856 15.1592C14.5671 15.1423 15.171 14.3963 15.7561 13.6214C16.2199 13.0039 16.5707 12.3026 16.7823 11.5471C15.6259 11.044 15.2206 10.1991 15.2206 10.1788Z"
                fill="black"
              />
              <path
                d="M13.8688 4.88025C14.3832 4.26065 14.6664 3.47252 14.6328 2.6665C13.8535 2.71631 13.1212 3.00988 12.5561 3.49955C12.0023 3.97425 11.7072 4.64362 11.7506 5.3701C12.5682 5.38693 13.3616 5.13149 13.8688 4.88025Z"
                fill="black"
              />
            </svg>
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
    </div>
  );
};

export default Signup;
