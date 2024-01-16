import { useState, useRef, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const frameButtonRef = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const onCommunityClick = useCallback(() => {
    navigate("/community");
  }, [navigate]);

  return (
    <>
      <div className="home-page">
        <div className="ngos-section">
          <div className="explore-btn">
            <div className="explore-btn-child" />
            <div className="explore">{`Explore `}</div>
          </div>
          <div className="ngo4">
            <div className="ngo-item" />
            <img className="ngo-child" alt="" src="/rectangle-44@2x.png" />
            <b className="green-horizon-foundation3">
              Green Horizon Foundation
            </b>
            <div className="green-horizon-foundation4">
              Green Horizon Foundation is dedicated to promoting environmental
              sustainability and creating a greener future. Our mission is to
              plant trees, promote eco-friendly practices, and raise awareness
              about the importance of environmental conservation.
            </div>
            <div className="donate-now-btn">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo5">
            <div className="ngo-item" />
            <img className="ngo-inner" alt="" src="/rectangle-46@2x.png" />
            <b className="green-horizon-foundation5">
              Green Horizon Foundation
            </b>
            <div className="green-horizon-foundation6">
              Green Horizon Foundation is dedicated to promoting environmental
              sustainability and creating a greener future. Our mission is to
              plant trees, promote eco-friendly practices, and raise awareness
              about the importance of environmental conservation.
            </div>
            <div className="donate-now-btn">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo6">
            <div className="ngo-item" />
            <img className="ngo-child2" alt="" src="/rectangle-441@2x.png" />
            <b className="hope-for-all">Hope for All Foundation</b>
            <div className="hope-for-all1">
              Hope for All Foundation is committed to improving the lives of
              underprivileged communities by providing access to education,
              healthcare, and basic amenities. Our mission is to bring hope and
              positive change to those in need.
            </div>
            <div className="donate-now-btn2">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo7">
            <div className="ngo-item" />
            <img className="ngo-inner" alt="" src="/rectangle-46@2x.png" />
            <b className="hope-for-all2">Hope for All Foundation</b>
            <div className="hope-for-all3">
              Hope for All Foundation is committed to improving the lives of
              underprivileged communities by providing access to education,
              healthcare, and basic amenities. Our mission is to bring hope and
              positive change to those in need.
            </div>
            <div className="donate-now-btn2">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo8">
            <div className="ngo-item" />
            <img className="ngo-child6" alt="" src="/rectangle-442@2x.png" />
            <b className="empowerhim-foundation">EmpowerHIM Foundation</b>
            <div className="empowerher-foundation-focuses">
              EmpowerHER Foundation focuses on empowering women and girls
              through education, skill development, and entrepreneurship
              opportunities. Our mission is to create a world where every woman
              has the tools and resources to thrive.
            </div>
            <div className="donate-now-btn4">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo9">
            <div className="ngo-item" />
            <img className="ngo-inner" alt="" src="/rectangle-46@2x.png" />
            <b className="empowerhim-foundation1">EmpowerHIM Foundation</b>
            <div className="empowerher-foundation-focuses1">
              EmpowerHER Foundation focuses on empowering women and girls
              through education, skill development, and entrepreneurship
              opportunities. Our mission is to create a world where every woman
              has the tools and resources to thrive.
            </div>
            <div className="donate-now-btn4">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo10">
            <div className="ngo-item" />
            <img className="ngo-child10" alt="" src="/rectangle-443@2x.png" />
            <b className="hope-for-all">EmpowerHIM Foundation</b>
            <div className="hope-for-all1">
              EmpowerHER Foundation focuses on empowering women and girls
              through education, skill development, and entrepreneurship
              opportunities. Our mission is to create a world where every woman
              has the tools and resources to thrive.
            </div>
            <div className="donate-now-btn6">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
          <div className="ngo11">
            <div className="ngo-item" />
            <img className="ngo-child12" alt="" src="/rectangle-46@2x.png" />
            <b className="hope-for-all2">EmpowerHIM Foundation</b>
            <div className="hope-for-all3">
              EmpowerHER Foundation focuses on empowering women and girls
              through education, skill development, and entrepreneurship
              opportunities. Our mission is to create a world where every woman
              has the tools and resources to thrive.
            </div>
            <div className="donate-now-btn6">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
          </div>
        </div>
        <div className="search-bar1">
          <div className="rectangle-group">
            <div className="group-child38" />
            <img
              className="search-fill0-wght300-grad0-ops-icon"
              alt=""
              src="/search-fill0-wght300-grad0-opsz24-1.svg"
            />
          </div>
          <div className="search-for-tags">search for tags</div>
        </div>
        <b className="ngos">NGOs</b>
        <div className="featured-project-section">
          <div className="featured-project">
            <div className="featured-project-child" />
            <img
              className="feature-proj-img-icon"
              alt=""
              src="/featureprojimg@2x.png"
            />
            <div className="get-involved-btn">
              <div className="get-involved-btn-child" />
              <b className="donate-now">get involved</b>
            </div>
            <div className="donate-now-btn8">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
            <b className="project-clean-earth">Project Clean Earth</b>
            <div className="a-campaign-to">
              A campaign to organize community clean-up drives and reduce
              plastic pollution.
            </div>
            <div className="featured-project-item" />
            <img
              className="message-circle-icon"
              alt=""
              src="/messagecircle.svg"
            />
            <div className="complition-bar">
              <div className="complition-bar-child" />
              <div className="complition-bar-item" />
            </div>
            <div className="green-horizon-foundation7">
              Green Horizon Foundation
            </div>
          </div>
          <div className="featured-project1">
            <div className="featured-project-inner" />
            <img
              className="feature-proj-img-icon"
              alt=""
              src="/featureprojimg1@2x.png"
            />
            <div className="donate-now-btn9">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
            <div className="get-involved-btn1">
              <div className="get-involved-btn-child" />
              <b className="donate-now">get involved</b>
            </div>
            <b className="green-schools-initiative">Green Schools Initiative</b>
            <div className="a-campaign-to">
              Implementing eco-friendly practices in schools and educating
              students about environmental conservation.
            </div>
            <div className="featured-project-item" />
            <img
              className="message-circle-icon1"
              alt=""
              src="/messagecircle1.svg"
            />
            <div className="green-horizon-foundation7">
              Green Horizon Foundation
            </div>
            <div className="complition-bar">
              <div className="complition-bar-child" />
              <div className="complition-bar-item" />
            </div>
          </div>
          <div className="featured-project2">
            <div className="featured-project-child" />
            <img
              className="feature-proj-img-icon"
              alt=""
              src="/featureprojimg2@2x.png"
            />
            <div className="donate-now-btn10">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
            <div className="get-involved-btn2">
              <div className="get-involved-btn-inner" />
              <b className="get-involved2">get involved</b>
            </div>
            <b className="project-clean-earth1">Project Clean Earth</b>
            <div className="a-campaign-to1">
              A campaign to organize community clean-up drives and reduce
              plastic pollution.
            </div>
            <div className="featured-project-item" />
            <img
              className="message-circle-icon"
              alt=""
              src="/messagecircle1.svg"
            />
            <div className="green-horizon-foundation7">
              Green Horizon Foundation
            </div>
            <div className="complition-bar2">
              <div className="complition-bar-child" />
              <div className="complition-bar-item" />
            </div>
          </div>
          <div className="featured-project3">
            <div className="featured-project-child" />
            <img
              className="feature-proj-img-icon"
              alt=""
              src="/featureprojimg2@2x.png"
            />
            <div className="donate-now-btn10">
              <div className="donate-now-btn-child" />
              <b className="donate-now">Donate Now</b>
            </div>
            <div className="get-involved-btn3">
              <div className="get-involved-btn-child" />
              <b className="donate-now">get involved</b>
            </div>
            <b className="project-clean-earth1">Green Schools Initiative</b>
            <div className="a-campaign-to1">
              Implementing eco-friendly practices in schools and educating
              students about environmental conservation.
            </div>
            <div className="featured-project-child5" />
            <img
              className="message-circle-icon3"
              alt=""
              src="/messagecircle1.svg"
            />
            <div className="green-horizon-foundation7">
              Green Horizon Foundation
            </div>
            <div className="complition-bar2">
              <div className="complition-bar-child" />
              <div className="complition-bar-item" />
            </div>
          </div>
        </div>
        <b className="featured-project4">Featured Project</b>
        <div className="stats-section">
          <img className="stats-section-child" alt="" src="/line-167.svg" />
          <img className="stats-section-item" alt="" src="/line-167.svg" />
          <div className="community6">Community</div>
          <div className="ngo-stats">
            <div className="ngo-stats-child" />
            <div className="ngos1">NGOs</div>
            <div className="div7">100+</div>
          </div>
          <div className="commune-stats">
            <div className="ngo-stats-child" />
            <div className="members">Members</div>
            <div className="div8">100+</div>
          </div>
          <div className="donation-stats">
            <div className="donation-stats-child" />
            <div className="donated">Donated</div>
            <div className="container">
              <div className="div9">10000</div>
              <img
                className="rupee-sign-solid-2-icon"
                alt=""
                src="/rupeesignsolid-2.svg"
              />
            </div>
          </div>
        </div>
        <div className="nav-bar5">
          <div className="nav-bar-child2" />
          <button
            className="nav-bar-inner3"
            ref={frameButtonRef}
            onClick={openFramePopup}
          >
            <button className="ellipse-wrapper4">
              <img className="group-child39" alt="" src="/profile21@2x.png" />
            </button>
          </button>
          <div className="what-we-do5">
            <div className="what-we-do6">what we do</div>
            <img className="arrow-down-icon4" alt="" src="/arrowdown2.svg" />
          </div>
          <div className="donate4">Donate</div>
          <button className="community7" onClick={onCommunityClick}>
            community
          </button>
          <div className="ngo12">NGOs</div>
          <div className="nav-bar-child3" />
          <div className="home4">home</div>
          <div className="samudaaye-logo">
            <img
              className="samudaaye-logo-child"
              alt=""
              src="/group-25@2x.png"
            />
            <div className="group12">
              <div className="s15">S</div>
              <div className="a49">a</div>
              <div className="m15">m</div>
              <div className="u14">u</div>
              <div className="d16">d</div>
              <div className="a50">a</div>
              <div className="a51">a</div>
              <div className="y15">y</div>
              <div className="e19">e</div>
            </div>
          </div>
        </div>
        <div className="footer-section3">
          <div className="footer-section-child1" />
          <div className="samudaaye7">Samudaaye</div>
          <div className="samudaaye-logo-footer4">
            <div className="group13">
              <div className="s16">S</div>
              <div className="a52">a</div>
              <div className="m16">m</div>
              <div className="u15">u</div>
              <div className="d17">d</div>
              <div className="a53">a</div>
              <div className="a54">a</div>
              <div className="y16">y</div>
              <div className="e20">e</div>
            </div>
            <div className="group-parent5">
              <img className="group-child40" alt="" src="/group-59@2x.png" />
              <div className="group13">
                <div className="s17">S</div>
                <div className="a55">a</div>
                <div className="m17">m</div>
                <div className="u15">u</div>
                <div className="d17">d</div>
                <div className="a53">a</div>
                <div className="a54">a</div>
                <div className="y16">y</div>
                <div className="e20">e</div>
              </div>
            </div>
          </div>
          <div className="samudaaye-2023-all3">
            ©Samudaaye 2023, All rights reserved.
          </div>
          <div className="vector-parent1">
            <img className="vector-icon32" alt="" src="/vector.svg" />
            <img className="insta-icon3" alt="" src="/insta.svg" />
            <img className="layer1-icon3" alt="" src="/layer11.svg" />
          </div>
          <div className="policy3">Policy</div>
          <div className="privacy-policy3">Privacy Policy</div>
          <div className="terms-of-use3">Terms of Use</div>
          <div className="support3">Support</div>
          <div className="faqs3">FAQ’s</div>
          <div className="about-us3">About Us</div>
          <div className="contact-us3">Contact US</div>
          <a className="supportsamudaayein3" href="mailto:support@samudaaye.in">
            support@samudaaye.in
          </a>
          <a className="a58">+91-85878759608</a>
          <img className="call-icon3" alt="" src="/call.svg" />
          <img className="sms-icon3" alt="" src="/sms.svg" />
          <div className="follow-us3">Follow Us</div>
        </div>
        <div className="bg-map-section" />
        <div className="map-section">
          <div className="view-map-btn">
            <div className="view-map-btn-child" />
            <b className="view-map">View Map</b>
          </div>
          <div className="montclair-map-1">
            <img className="vector-icon33" alt="" src="/vector9.svg" />
            <img className="vector-icon34" alt="" src="/vector10.svg" />
            <img className="vector-icon35" alt="" src="/vector12.svg" />
            <img className="vector-icon36" alt="" src="/vector13.svg" />
            <img className="vector-icon37" alt="" src="/vector14.svg" />
            <img className="vector-icon38" alt="" src="/vector15.svg" />
            <img className="vector-icon39" alt="" src="/vector16.svg" />
            <img className="vector-icon40" alt="" src="/vector17.svg" />
            <img className="vector-icon41" alt="" src="/vector18.svg" />
            <img className="vector-icon42" alt="" src="/vector19.svg" />
            <img className="vector-icon43" alt="" src="/vector20.svg" />
            <img className="vector-icon44" alt="" src="/vector22.svg" />
            <img className="vector-icon45" alt="" src="/vector23.svg" />
            <img className="vector-icon46" alt="" src="/vector24.svg" />
            <img className="vector-icon47" alt="" src="/vector25.svg" />
            <img className="vector-icon48" alt="" src="/vector26.svg" />
            <div className="group15">
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group.svg"
              />
              <img
                className="clip-path-group1"
                alt=""
                src="/clip-path-group1@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group2.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group3.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group4.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group5.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group6.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group7.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group8.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group9.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group10.svg"
              />
              <img
                className="clip-path-group11"
                alt=""
                src="/clip-path-group11@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group12.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group13.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group14.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group15.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group17"
                alt=""
                src="/clip-path-group17@2x.png"
              />
              <img
                className="clip-path-group18"
                alt=""
                src="/clip-path-group18@2x.png"
              />
              <img
                className="clip-path-group19"
                alt=""
                src="/clip-path-group19@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group20.svg"
              />
              <img
                className="clip-path-group21"
                alt=""
                src="/clip-path-group21@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group22.svg"
              />
              <img
                className="clip-path-group23"
                alt=""
                src="/clip-path-group23@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group24.svg"
              />
              <img
                className="clip-path-group25"
                alt=""
                src="/clip-path-group25@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group26.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group27.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group28.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group29.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group30.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group31.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group32.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group33.svg"
              />
              <img
                className="clip-path-group35"
                alt=""
                src="/clip-path-group34@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group37"
                alt=""
                src="/clip-path-group35@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group39"
                alt=""
                src="/clip-path-group36@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group41"
                alt=""
                src="/clip-path-group37@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group43"
                alt=""
                src="/clip-path-group38@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group45"
                alt=""
                src="/clip-path-group39@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group47"
                alt=""
                src="/clip-path-group40@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group49"
                alt=""
                src="/clip-path-group41@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group51"
                alt=""
                src="/clip-path-group42@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group53"
                alt=""
                src="/clip-path-group43@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group55"
                alt=""
                src="/clip-path-group44@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group57"
                alt=""
                src="/clip-path-group45@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group77"
                alt=""
                src="/clip-path-group46@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group47.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group104"
                alt=""
                src="/clip-path-group48@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group115"
                alt=""
                src="/clip-path-group49@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group125"
                alt=""
                src="/clip-path-group50@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group137"
                alt=""
                src="/clip-path-group51@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group164"
                alt=""
                src="/clip-path-group52@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group174"
                alt=""
                src="/clip-path-group53@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group211"
                alt=""
                src="/clip-path-group54@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group219"
                alt=""
                src="/clip-path-group55@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group236"
                alt=""
                src="/clip-path-group56@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group252"
                alt=""
                src="/clip-path-group57@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group260"
                alt=""
                src="/clip-path-group58@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group302"
                alt=""
                src="/clip-path-group59@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group308"
                alt=""
                src="/clip-path-group60@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group322"
                alt=""
                src="/clip-path-group61@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group324"
                alt=""
                src="/clip-path-group62@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group329"
                alt=""
                src="/clip-path-group63@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group341"
                alt=""
                src="/clip-path-group64@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group350"
                alt=""
                src="/clip-path-group65@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group357"
                alt=""
                src="/clip-path-group66@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group364"
                alt=""
                src="/clip-path-group67@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group375"
                alt=""
                src="/clip-path-group68@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group387"
                alt=""
                src="/clip-path-group69@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group415"
                alt=""
                src="/clip-path-group70@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group444"
                alt=""
                src="/clip-path-group71@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group472"
                alt=""
                src="/clip-path-group72@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group485"
                alt=""
                src="/clip-path-group73@2x.png"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
              <img
                className="clip-path-group"
                alt=""
                src="/clip-path-group16.svg"
              />
            </div>
          </div>
          <img
            className="brand-google-maps-svgrepo-com-icon"
            alt=""
            src="/brandgooglemapssvgrepocom-1.svg"
          />
          <b className="support-ngos-near">Support NGOs near you!</b>
          <div className="explore-the-map">
            Explore the map and be the superman for the people who needs you.
          </div>
        </div>
        <div className="component-3">
          <img
            className="component-3-child"
            alt=""
            src="/rectangle-78@2x.png"
          />
        </div>
        <div className="component-2">
          <img
            className="component-2-child"
            alt=""
            src="/rectangle-79@2x.png"
          />
        </div>
        <div className="join-us-btn">
          <div className="join-us-btn-child" />
          <b className="join-us">{`join us `}</b>
        </div>
        <div className="empowering-communities">Empowering Communities</div>
        <div className="creating-change">{`Creating Change `}</div>
        <div className="samudaaye8">
          <span>Sam</span>
          <span className="udaaye1">udaaye</span>
        </div>
        <img className="paper-pane-icon" alt="" src="/paperpane@2x.png" />
        <div className="welcome-to">{`Welcome to `}</div>
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

export default HomePage;
