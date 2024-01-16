import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import SignupPage from "./SignupPage";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = ({ onClose }) => {
  const [isSignupPagePopupOpen, setSignupPagePopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

  const openSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(true);
  }, []);

  const closeSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(false);
  }, []);

  const onLoginBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="login-page">
        <div className="login-section">
          <div className="login-section-child" />
          <button
            className="new-user-signup-container"
            id="newusersignup"
            onClick={openSignupPagePopup}
          >
            <span className="new-user">{`New user? `}</span>
            <span className="signup">signup</span>
          </button>
          <button
            className="login-btn2"
            id="loginbutton"
            onClick={onLoginBtnClick}
          >
            <div className="login-btn-inner" />
            <div className="log-in">Log in</div>
          </button>
          <div className="password-form2">
            <div className="password2">Password</div>
            <div className="password-form-inner" />
            <img
              className="visibility-fill0-wght400-grad0-icon"
              alt=""
              src="/visibility-fill0-wght400-grad0-opsz24-1.svg"
            />
            <img
              className="lock-fill0-wght400-grad0-opsz2-icon2"
              alt=""
              src="/lock-fill0-wght400-grad0-opsz24-12.svg"
            />
            <button className="forgot-password" id="forgotpassword">
              Forgot Password?
            </button>
          </div>
          <div className="email-form2">
            <div className="email-form-inner" />
            <div className="email2">Email</div>
            <img
              className="mail-fill0-wght400-grad0-opsz2-icon2"
              alt=""
              src="/mail-fill0-wght400-grad0-opsz24-12.svg"
            />
          </div>
          <img
            className="other-signup-options-icon"
            alt=""
            src="/othersignupoptions.svg"
          />
          <div className="we-need-you">we need you</div>
          <div className="welcome-back">Welcome Back!</div>
        </div>
        <img
          className="login-page-image-icon"
          alt=""
          src="/loginpageimage@2x.png"
        />
        <div className="samudaaye-logo-footer">
          <div className="group1">
            
          </div>
          <div className="group-parent">
            <img className="group-child17" alt="" src="/group-59.svg" />
            <div className="group1">
           
            </div>
          </div>
        </div>
        <TextField
          className="login-page-child"
          color="primary"
          id="loginemail"
          size="medium"
          required={true}
          sx={{ width: 445 }}
          variant="standard"
        />
        <TextField
          className="login-page-item"
          color="primary"
          id="loginpassword"
          required={true}
          sx={{ width: 445 }}
          variant="standard"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleShowPasswordClick}
                  aria-label="toggle password visibility"
                >
                  <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      {isSignupPagePopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeSignupPagePopup}>
          <SignupPage onClose={closeSignupPagePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginPage;
