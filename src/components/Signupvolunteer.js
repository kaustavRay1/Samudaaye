import { useState, useCallback } from "react";
import { TextField, InputAdornment, Icon, IconButton } from "@mui/material";
import LoginPage from "./LoginPage";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Signupvolunteer.css";

const Signupvolunteer = ({ onClose }) => {
  const [isLoginPagePopupOpen, setLoginPagePopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleShowPasswordClick = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="signupvolunteer">
        <div className="sign-up-section1">
          <div className="rectangle-div" />
          <button
            className="already-registered-container1"
            id="alreadyregistered"
            onClick={openLoginPagePopup}
          >
            <span className="already-registered1">{`already registered ? `}</span>
            <span className="login1">{`login `}</span>
          </button>
          <button
            className="login-btn1"
            id="volunteersignupbutton"
            onClick={onLoginBtnClick}
          >
            <div className="login-btn-item" />
            <div className="sign-up1">Sign up</div>
          </button>
          <div className="blood-grp-form">
            <div className="blood-group">Blood Group</div>
            <div className="blood-grp-form-child" />
            <div className="check-box">
              <label className="you-want-to" for="check" >You want to donate blood</label>
              <input className="check-box1" type="checkbox" id="check" />
            </div>
          </div>
          <div className="password-form1">
            <div className="password1">Password</div>
            <div className="password-form-item" />
            <img
              className="lock-fill0-wght400-grad0-opsz2-icon1"
              alt=""
              src="/lock-fill0-wght400-grad0-opsz24-11.svg"
            />
          </div>
          <div className="email-form1">
            <div className="email-form-item" />
            <div className="email1">Email</div>
            <img
              className="mail-fill0-wght400-grad0-opsz2-icon1"
              alt=""
              src="/mail-fill0-wght400-grad0-opsz24-11.svg"
            />
          </div>
          <div className="name-form1">
            <div className="name-form-item" />
            <div className="name1">Name</div>
            <img
              className="person-fill0-wght400-grad0-ops-icon1"
              alt=""
              src="/person-fill0-wght400-grad0-opsz24-11.svg"
            />
          </div>
          <img
            className="other-signup-options-icon"
            alt=""
            src="/othersignupoptions.svg"
          />
          <div className="line-div" />
          <div className="sign-up-section-child1" />
          <div className="or1">Or</div>
          <div className="registering-as-volunteer">
            Registering As Volunteer
          </div>
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
          className="signupvolunteer-child"
          color="primary"
          id="volunteernamesignup"
          size="medium"
          placeholder="Enter Your Name"
          required={true}
          sx={{ width: 411 }}
          variant="standard"
          type="text"
        />
        <TextField
          className="signupvolunteer-item"
          color="primary"
          id="volunteeremailsignup"
          size="medium"
          placeholder="Enter Your Email ID"
          required={true}
          sx={{ width: 411 }}
          variant="standard"
        />
        <TextField
          className="signupvolunteer-inner"
          color="primary"
          id="volunteerpasswordsignup"
          size="medium"
          required={true}
          sx={{ width: 188 }}
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
        <TextField
          className="rectangle-textfield"
          color="primary"
          id="volunteerbloodgroupsignup"
          required={true}
          sx={{ width: 141 }}
          variant="standard"
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

export default Signupvolunteer;
