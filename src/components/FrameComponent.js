import { useState, useCallback } from "react";
import LoginPage from "./LoginPage";
import PortalPopup from "./PortalPopup";
import SignupPage from "./SignupPage";
import "./FrameComponent.css";

const FrameComponent = ({ onClose }) => {
  const [isLoginPagePopupOpen, setLoginPagePopupOpen] = useState(false);
  const [isSignupPagePopupOpen, setSignupPagePopupOpen] = useState(false);

  const openLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(true);
  }, []);

  const closeLoginPagePopup = useCallback(() => {
    setLoginPagePopupOpen(false);
  }, []);

  const openSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(true);
  }, []);

  const closeSignupPagePopup = useCallback(() => {
    setSignupPagePopupOpen(false);
  }, []);

  return (
    <>
      <div className="group-root">
        <div className="vector-parent">
          <img className="group-child20" alt="" src="/rectangle-342.svg" />
          <button className="settings">settings</button>
          <button className="login2" onClick={openLoginPagePopup}>
            login
          </button>
          <button className="profile">profile</button>
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

export default FrameComponent;
