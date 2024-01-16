import { useState, useRef, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./UserProfile.css";

const UserProfile = () => {
  const frameButtonRef = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onCommunityClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  return (
    <>
      <div className="user-profile">
        <img className="user-profile-child" alt="" src="/group-11.svg" />
        <div className="user-profile-item" />
        <div className="user-profile-inner" />
        <div className="rectangle-div" />
        <img className="more-vertical-icon" alt="" src="/morevertical.svg" />
        <div className="welcome">{`Welcome,  `}</div>
        <div className="username">@username</div>
        <img className="user-profile-child1" alt="" src="/ellipse-14@2x.png" />
        <div className="total-donated">total donated</div>
        <div className="name">name</div>
        <div className="post">Post</div>
        <div className="followers">followers</div>
        <div className="following">following</div>
        <div className="username1">@username</div>
        <div className="edit-profile-btn">
          <div className="edit-profile-btn-child" />
          <div className="edit-profile">edit profile</div>
        </div>
        <div className="div2">00</div>
        <div className="div3">00</div>
        <div className="div4">00</div>
        <div className="div5">00</div>
        <div className="group-div">
          <div className="demo-post-parent">
            <img className="demo-post-icon" alt="" src="/demopost.svg" />
            <img className="demo-post-icon1" alt="" src="/demopost1.svg" />
            <img className="demo-post-icon2" alt="" src="/demopost2.svg" />
          </div>
          <div className="demo-post-group">
            <img className="demo-post-icon3" alt="" src="/demopost3.svg" />
            <img className="demo-post-icon4" alt="" src="/demopost4.svg" />
            <img className="demo-post-icon5" alt="" src="/demopost5.svg" />
          </div>
          <div className="demo-post-container">
            <img className="demo-post-icon6" alt="" src="/demopost6.svg" />
            <img className="demo-post-icon7" alt="" src="/demopost7.svg" />
            <img className="demo-post-icon8" alt="" src="/demopost8.svg" />
          </div>
        </div>
        <div className="perks">Perks</div>
        <div className="pin-board">Pin Board</div>
        <img className="user-profile-child2" alt="" src="/line-179.svg" />
        <img className="polygon-icon" alt="" src="/polygon-1.svg" />
        <img className="user-profile-child3" alt="" src="/polygon-2.svg" />
        <img className="user-profile-child4" alt="" src="/polygon-2.svg" />
        <div className="bio">bio..</div>
        <div className="user-profile-child5" />
        <div className="component-41">
          <div className="nav-bar2">
            <div className="nav-bar-inner" />
            <button className="home2" onClick={onHomeClick}>
              home
            </button>
            <button className="community3" onClick={onCommunityClick}>
              community
            </button>
            <div className="ngo2">NGO</div>
            <div className="donate2">Donate</div>
            <img className="profile-icon1" alt="" src="/profile@2x.png" />
            <div className="what-we-do-group">
              <div className="what-we-do3">what we do</div>
              <img className="arrow-down-icon2" alt="" src="/arrowdown2.svg" />
            </div>
            <img
              className="samudaaye-logo-1-12"
              alt=""
              src="/samudaayelogo-1-1.svg"
            />
          </div>
          <button
            className="frame-button"
            ref={frameButtonRef}
            onClick={openFramePopup}
          >
            <button className="group-button">
              <img className="group-child4" alt="" src="/profile21@2x.png" />
            </button>
            <button className="group-button">
              <img className="group-child4" alt="" src="/profile21@2x.png" />
            </button>
          </button>
        </div>
        <div className="your-recent-activity-parent">
          <div className="your-recent-activity">your recent activity</div>
          <img className="group-child6" alt="" src="/line-158.svg" />
          <div className="ellipse-div" />
          <div className="group-child7" />
          <div className="donated-to">{`donated to `}</div>
          <div className="parent">
            <div className="div6">00.00</div>
            <img
              className="rupee-sign-solid-1-icon"
              alt=""
              src="/rupeesignsolid-1.svg"
            />
          </div>
          <div className="on-23rd-nov">on 23rd nov 2023</div>
          <div className="group-child8" />
        </div>
        <div className="footer-section1">
          <div className="footer-section-item" />
          <div className="samudaaye2">Samudaaye</div>
          <div className="samudaaye-logo-footer1">
            <div className="group2">
              <div className="s2">S</div>
              <div className="a6">a</div>
              <div className="m2">m</div>
              <div className="u2">u</div>
              <div className="d2">d</div>
              <div className="a7">a</div>
              <div className="a8">a</div>
              <div className="y2">y</div>
              <div className="e2">e</div>
            </div>
            <div className="group-parent1">
              <img className="group-child9" alt="" src="/group-59@2x.png" />
              <div className="group2">
                <div className="s3">S</div>
                <div className="a9">a</div>
                <div className="m3">m</div>
                <div className="u2">u</div>
                <div className="d2">d</div>
                <div className="a7">a</div>
                <div className="a8">a</div>
                <div className="y2">y</div>
                <div className="e2">e</div>
              </div>
            </div>
          </div>
          <div className="samudaaye-2023-all1">
            ©Samudaaye 2023, All rights reserved.
          </div>
          <div className="vector-group">
            <img className="vector-icon2" alt="" src="/vector.svg" />
            <img className="insta-icon1" alt="" src="/insta.svg" />
            <img className="layer1-icon1" alt="" src="/layer11.svg" />
          </div>
          <div className="policy1">Policy</div>
          <div className="privacy-policy1">Privacy Policy</div>
          <div className="terms-of-use1">Terms of Use</div>
          <div className="support1">Support</div>
          <div className="faqs1">FAQ’s</div>
          <div className="about-us1">About Us</div>
          <div className="contact-us1">Contact US</div>
          <a className="supportsamudaayein1" href="mailto:support@samudaaye.in">
            support@samudaaye.in
          </a>
          <a className="a12">+91-85878759608</a>
          <img className="call-icon1" alt="" src="/call.svg" />
          <img className="sms-icon1" alt="" src="/sms.svg" />
          <div className="follow-us1">Follow Us</div>
        </div>
        <div className="user-profile-child6" />
        <div className="user-profile-child7" />
        <img className="vector-icon3" alt="" src="/vector1.svg" />
        <div className="star-parent">
          <img className="star-icon" alt="" src="/star-1.svg" />
          <div className="group4">
            <b className="p">P</b>
            <b className="r">r</b>
            <b className="o">o</b>
            <b className="j">j</b>
            <b className="e4">e</b>
            <b className="c">c</b>
            <b className="t">t</b>
            <b className="b"> </b>
            <b className="c1">C</b>
            <b className="l">l</b>
            <b className="e5">e</b>
            <b className="a13">a</b>
            <b className="n">n</b>
            <b className="b1"> </b>
            <b className="e6">E</b>
            <b className="a14">a</b>
            <b className="r1">r</b>
            <b className="t1">t</b>
            <b className="h">h</b>
          </div>
          <div className="x">x</div>
          <img className="group-child10" alt="" src="/group-99.svg" />
          <b className="green-horizon-foundation">Green Horizon Foundation</b>
          <b className="green-horizon-foundation">Green Horizon Foundation</b>
          <b className="samudaaye3">Samudaaye</b>
          <div className="donator">
            <b className="r2">r</b>
            <b className="o1">o</b>
            <b className="t2">t</b>
            <b className="a15">a</b>
            <b className="n1">n</b>
            <b className="o2">o</b>
            <b className="d4">D</b>
          </div>
        </div>
        <div className="user-profile-child8" />
        <img className="vector-icon4" alt="" src="/vector1.svg" />
        <div className="star-group">
          <img className="star-icon" alt="" src="/star-1.svg" />
          <div className="donator1">
            <b className="r2">r</b>
            <b className="o1">o</b>
            <b className="t2">t</b>
            <b className="a15">a</b>
            <b className="n1">n</b>
            <b className="o2">o</b>
            <b className="d4">D</b>
          </div>
          <div className="generosity-champion">
            <b className="n3">n</b>
            <b className="o5">o</b>
            <b className="i">i</b>
            <b className="p1">p</b>
            <b className="m4">m</b>
            <b className="a17">a</b>
            <b className="h1">h</b>
            <b className="c2">C</b>
            <b className="b2">{` `}</b>
            <b className="y4">y</b>
            <b className="t4">t</b>
            <b className="i1">i</b>
            <b className="s4">s</b>
            <b className="o6">o</b>
            <b className="r4">r</b>
            <b className="e7">e</b>
            <b className="n4">n</b>
            <b className="e8">e</b>
            <b className="g">G</b>
          </div>
          <img className="group-child12" alt="" src="/group-107@2x.png" />
          <div className="x1">x</div>
          <b className="green-horizon-foundation2">Green Horizon Foundation</b>
          <b className="samudaaye4">Samudaaye</b>
        </div>
        <img className="arrow-right-icon" alt="" src="/arrowright.svg" />
        <div className="view-more">view more</div>
      </div>
      {isFramePopupOpen && (
        <PortalPopup
          placement="Top left"
          top={-200}
          left={-10}
          relativeLayerRef={frameButtonRef}
          onOutsideClick={closeFramePopup}
        >
          <FrameComponent1 onClose={closeFramePopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default UserProfile;
