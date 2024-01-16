import { useState, useCallback } from "react";
import Signupvolunteer from "./Signupvolunteer";
import PortalPopup from "./PortalPopup";
import Signupngo from "./Signupngo";
import "./SignupPage.css";

const SignupPage = ({ onClose }) => {
  const [isSignupvolunteerPopupOpen, setSignupvolunteerPopupOpen] =
    useState(false);
  const [isSignupngoPopupOpen, setSignupngoPopupOpen] = useState(false);

  const openSignupvolunteerPopup = useCallback(() => {
    setSignupvolunteerPopupOpen(true);
  }, []);

  const closeSignupvolunteerPopup = useCallback(() => {
    setSignupvolunteerPopupOpen(false);
  }, []);

  const openSignupngoPopup = useCallback(() => {
    setSignupngoPopupOpen(true);
  }, []);

  const closeSignupngoPopup = useCallback(() => {
    setSignupngoPopupOpen(false);
  }, []);

  return (
    <>
      <div className="signup-page">
        <div className="signup-page-child" />
        <div className="signup-page-item" />
        <img className="signup-page-inner" alt="" src="/rectangle-7.svg" />
        <img className="rectangle-icon" alt="" src="/rectangle-8.svg" />
        <img className="signup-page-child1" alt="" src="/rectangle-9.svg" />
        <div className="signup-page-child2" />
        <div className="signup-page-child3" />
        <b className="about">{`about `}</b>
        <div className="samudaaye">Samudaaye</div>
        <div className="at-samudaaye-our">
          At Samudaaye, our mission is to foster positive change by creating a
          dynamic and interconnected community dedicated to impactful
          philanthropy. We believe in the power of collective action, where
          individuals, NGOs, and organizations collaborate to address pressing
          global challenges.
        </div>
        <div className="our-values-define-container">
          <p className="our-values-define">
            Our values define the core principles that guide us:
          </p>
          <ul className="community-we-are-committed-to">
            <li className="community-we-are">
              Community: We are committed to building a vibrant and supportive
              community that thrives on diversity, inclusion, and shared
              purpose.
            </li>
            <li className="community-we-are">
              Impact: We strive for measurable and sustainable impact in every
              project and initiative we undertake, focusing on real-world
              solutions.
            </li>
            <li className="community-we-are">
              Transparency: We believe in transparent communication, ensuring
              that our community members and stakeholders are well-informed
              about our activities and outcomes.
            </li>
            <li>
              Empowerment: We empower individuals and organizations to
              contribute their skills, resources, and passion to drive positive
              change.
            </li>
          </ul>
        </div>
        <div className="mission">mission</div>
        <div className="values">values</div>
        <div className="rectangle-parent">
          <div className="group-child" />
          <div className="no">{`No `}</div>
          <div className="poverty">Poverty</div>
          <div className="group-item" />
          <div className="group-inner" />
          <div className="group-child1" />
          <div className="group-child2" />
          <div className="group-child3" />
          <div className="group-child4" />
          <div className="group-child5" />
          <div className="group-child6" />
          <div className="group-child7" />
          <b className="our-goal">Our Goal</b>
          <img className="group-child8" alt="" src="/group-49.svg" />
          <img className="group-child9" alt="" src="/group-50.svg" />
          <div className="zero">{`Zero `}</div>
          <div className="quality">{`Quality `}</div>
          <div className="good-health">{`Good Health `}</div>
          <div className="hunger">Hunger</div>
          <div className="education">Education</div>
          <div className="wellbeing">Wellbeing</div>
          <img className="group-child10" alt="" src="/vector-19.svg" />
          <img className="vector-icon1" alt="" src="/vector1.svg" />
          <img className="group-child11" alt="" src="/vector-24.svg" />
          <img className="group-child12" alt="" src="/vector-20.svg" />
          <img className="group-child13" alt="" src="/vector-22.svg" />
          <img className="group-child14" alt="" src="/vector-21.svg" />
          <img className="group-child15" alt="" src="/vector-23.svg" />
          <div className="group-child16" />
        </div>
          <div className="sign-up-video2">
          <div className="pexels-cottonbro-studio-6591152" />
          <div className="logo2">
            <img className="logo-inner" alt="" src="/group-22.svg" />
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
        <div className="registering-now"></div>
        <button
          className="registering-as-volunteer1"
          onClick={openSignupvolunteerPopup}
        >
          <div className="registering-as-volunteer-child" />
          <b className="registering-as-volunteer2">Registering As Volunteer</b>
        </button>
        <button
          className="registering-as-ngo1"
          id="registeringasngo"
          onClick={openSignupngoPopup}
        >
          <div className="registering-as-ngo-child" />
          <b className="registering-as-ngo2">Registering As NGO</b>
        </button>
        <div className="or2">or</div>
      </div>
      {isSignupvolunteerPopupOpen && (
        <PortalPopup
          placement="Centered"
          onOutsideClick={closeSignupvolunteerPopup}
        >
          <Signupvolunteer onClose={closeSignupvolunteerPopup} />
        </PortalPopup>
      )}
      {isSignupngoPopupOpen && (
        <PortalPopup placement="Centered" onOutsideClick={closeSignupngoPopup}>
          <Signupngo onClose={closeSignupngoPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default SignupPage;
