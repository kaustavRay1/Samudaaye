import { useState, useCallback } from "react";
import LoginPage from "./LoginPage";
import PortalPopup from "./PortalPopup";
import SignupPage from "./SignupPage";
import { useNavigate } from "react-router-dom";
import "./FrameComponent1.css";

const FrameComponent1 = ({ onClose }) => {
  const [isLoginPagePopupOpen, setLoginPagePopupOpen] = useState(false);
  const [isSignupPagePopupOpen, setSignupPagePopupOpen] = useState(false);
  const navigate = useNavigate();

  const openLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(true);
  }, []);

  const closeLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(false);
  }, []);

  const onProfileClick = useCallback(() => {
    navigate("/userprofile");
  }, [navigate]);

  const openSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(true);
  }, []);

  const closeSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(false);
  }, []);

  return (
    <>
      <div className="group-top">
        <div className="vector-parent2">
          <img className="group-child41" alt="" src="/rectangle-342.svg" />
          <button className="settings">settings</button>
          <button className="login2" onClick={openLoginPagePopup}>
            login
          </button>
          <button className="profile1" onClick={onProfileClick}>
            profile
          </button>
          <button className="sign-up2" onClick={openSignupPagePopup}>
            sign up
          </button>
        </div>
      </div>
      {isLoginPagePopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeLoginPagePopup}>
          <LoginPage onClose={closeLoginPagePopup} />
        </PortalPopup>
      )}
      {isSignupPagePopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeSignupPagePopup}>
          <SignupPage onClose={closeSignupPagePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default FrameComponent1;
