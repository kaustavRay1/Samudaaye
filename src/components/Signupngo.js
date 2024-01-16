import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LoginPage from "./LoginPage";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Signupngo.css";

const Signupngo = ({ onClose }) => {
  const [isLoginPagePopupOpen, setLoginPagePopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(true);
  }, []);

  const closeLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(false);
  }, []);

  const onLoginBtnClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <div className="signupngo">
        <div className="sign-up-section">
          <div className="sign-up-section-child" />
          <button
            className="already-registered-container"
            id="alreadyregistered"
            onClick={openLoginPagePopup}
          >
            <span className="already-registered">{`already registered ? `}</span>
            <span className="login">{`login `}</span>
          </button>
          <button
            className="login-btn"
            id="ngosignupbutton"
            onClick={onLoginBtnClick}
          >
            <div className="login-btn-child" />
            <div className="sign-up">Sign up</div>
          </button>
          <div className="password-form">
            <div className="password">Password</div>
            <div className="password-form-child" />
            <img
              className="lock-fill0-wght400-grad0-opsz2-icon"
              alt=""
              src="/lock-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
          <div className="email-form">
            <div className="email-form-child" />
            <div className="email">Email</div>
            <img
              className="mail-fill0-wght400-grad0-opsz2-icon"
              alt=""
              src="/mail-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
          <div className="sign-up-section-item" />
          <div className="sign-up-section-inner" />
          <div className="or">Or</div>
          <div className="name-form">
            <div className="email-form-child" />
            <div className="name1">Name</div>
            <img
              className="mail-fill0-wght400-grad0-opsz2-icon"
              alt=""
              src="/person-fill0-wght400-grad0-opsz24-1.svg"
            />
          </div>
          <img
            className="other-signup-options-icon"
            alt=""
            src="/othersignupoptions.svg"
          />
          <div className="registering-as-ngo">Registering As NGO</div>
        </div>
        <div className="sign-up-video3">
          <img
            className="pexels-cottonbro-studio-659115-icon"
            alt=""
            src="/pexelscottonbrostudio6591155-1.svg"
          />
           <div className="logo3">
            <img className="logo-child1" alt="" src="/group-23.svg" />
            
          </div>
        </div>
        <TextField
          className="signupngo-child"
          color="primary"
          id="ngonamesignup"
          size="medium"
          placeholder="Enter Your Name"
          required={true}
          sx={{ width: 409 }}
          variant="standard"
        />
        <TextField
          className="signupngo-item"
          color="primary"
          id="ngoemailsignup"
          size="medium"
          placeholder="Enter Your Email ID"
          required={true}
          sx={{ width: 408 }}
          variant="standard"
          type="email"
        />
        <TextField
          className="signupngo-inner"
          color="primary"
          id="ngopasswordsignup"
          required={true}
          sx={{ width: 408 }}
          variant="standard"
          type="password"
        />
      </div>
      {isLoginPagePopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeLoginPagePopup}>
          <LoginPage onClose={closeLoginPagePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default Signupngo;
