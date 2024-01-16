import { useState, useRef, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./LandingPage.css";

const LandingPage = () => {
  const frameButtonRef = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const navigate = useNavigate();

  const onGetStartedBtnClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

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
      <div className="landing-page">
        <div className="bg-badge-section" />
        <div className="footer-section">
          <div className="footer-section-child" />
          <div className="samudaaye">Samudaaye</div>
          <div className="samudaaye-logo-footer">
            <div className="group">
              <div className="s">S</div>
              <div className="a">a</div>
              <div className="m">m</div>
              <div className="u">u</div>
              <div className="d">d</div>
              <div className="a1">a</div>
              <div className="a2">a</div>
              <div className="y">y</div>
              <div className="e">e</div>
            </div>
            <div className="group-parent">
              <img className="group-child" alt="" src="/group-59@2x.png" />
              <div className="group">
                <div className="s1">S</div>
                <div className="a3">a</div>
                <div className="m1">m</div>
                <div className="u">u</div>
                <div className="d">d</div>
                <div className="a1">a</div>
                <div className="a2">a</div>
                <div className="y">y</div>
                <div className="e">e</div>
              </div>
            </div>
          </div>
          <div className="samudaaye-2023-all">
            ©Samudaaye 2023, All rights reserved.
          </div>
          <div className="vector-parent">
            <img className="vector-icon" alt="" src="/vector.svg" />
            <img className="insta-icon" alt="" src="/insta.svg" />
            <img className="layer1-icon" alt="" src="/layer1.svg" />
          </div>
          <div className="policy">Policy</div>
          <div className="privacy-policy">Privacy Policy</div>
          <div className="terms-of-use">Terms of Use</div>
          <div className="support">Support</div>
          <div className="faqs">FAQ’s</div>
          <div className="about-us">About Us</div>
          <div className="contact-us">Contact US</div>
          <div className="supportsamudaayein">support@samudaaye.in</div>
          <div className="div">+91-8005993442</div>
          <img className="call-icon" alt="" src="/call.svg" />
          <img className="sms-icon" alt="" src="/sms.svg" />
          <div className="follow-us">Follow Us</div>
        </div>
        <img className="slider-1-icon" alt="" src="/slider1.svg" />
        <b className="voices-of-impact">Voices of impact</b>
        <div className="voice-of-impact-section">
          <div className="demo-review-3">
            <div className="demo-review-3-child" />
            <img
              className="demo-review-3-item"
              alt=""
              src="/ellipse-5@2x.png"
            />
            <div className="samudaayes-collaborative-envi">
              "Samudaaye's collaborative environment has allowed our
              organization to connect with like-minded NGOs, fostering
              partnerships that amplify our collective impact. Together, we're
              working towards creating positive change on a larger scale."
            </div>
          </div>
          <div className="demo-review-1">
            <div className="demo-review-1-child" />
            <img
              className="demo-review-1-item"
              alt=""
              src="/ellipse-51@2x.png"
            />
            <div className="being-part-of">
              "Being part of Samudaaye's environmental initiatives, I've
              witnessed the positive impact of tree planting campaigns. It's
              more than just a contribution; it's a commitment to sustainability
              and creating a healthier planet for future generations."
            </div>
          </div>
          <div className="demo-review-2">
            <div className="demo-review-2-child" />
            <img
              className="demo-review-2-item"
              alt=""
              src="/ellipse-52@2x.png"
            />
            <div className="through-samudaaye-ive">
              "Through Samudaaye, I've been able to directly contribute to
              impactful projects that align with my values. It's empowering to
              know that even a small contribution can make a significant
              difference in someone's life."
            </div>
          </div>
        </div>
        <div className="badge-section">
          <div className="start-donating-btn">
            <div className="start-donating-btn-inner">
              <div className="group-item" />
            </div>
            <div className="start-donating">Start Donating</div>
          </div>
          <div className="unlock-this-badge-container">
            <span className="unlock-this-badge">Unlock this badge</span>
            <span className="by-making-a">
              {" "}
              by making a donation. Wear it proudly on your profile!
            </span>
          </div>
          <img className="illustrator-icon" alt="" src="/illustrator.svg" />
          <img className="badge-icon" alt="" src="/badge.svg" />
        </div>
        <div className="community-section">
          <img
            className="community-image-icon"
            alt=""
            src="/communityimage@2x.png"
          />
          <div className="welcome-to-the-container">
            <span className="welcome-to-the">{`Welcome to the heart of `}</span>
            <b className="samudaayes">Samudaaye's</b>
            <span className="welcome-to-the">
              {" "}
              collaborative spirit — the Community Feature! This dynamic space
              is designed to connect you with NGOs, donors, and like-minded
              individuals passionate about creating positive change. Here's what
              you can expect:
            </span>
          </div>
          <div className="ngo-updates-stay-container">
            <p className="ngo-updates">NGO Updates:</p>
            <p className="ngo-updates">
              Stay in the loop with regular updates from NGOs. Discover their
              latest projects, success stories, and the impact they're making in
              communities.
            </p>
          </div>
          <div className="interactive-discussions-engag-container">
            <p className="ngo-updates">Interactive Discussions:</p>
            <p className="ngo-updates">
              Engage in meaningful conversations within the community forum.
              Share insights, seek advice, and participate in discussions that
              drive knowledge sharing and collaboration.
            </p>
          </div>
          <div className="project-highlights-explore-container">
            <p className="ngo-updates">Project Highlights:</p>
            <p className="ngo-updates">
              Explore the latest developments in ongoing projects. NGOs can
              showcase their progress, thank donors, and celebrate the
              milestones achieved with real-time updates.
            </p>
          </div>
          <div className="event-announcements-dont-container">
            <p className="ngo-updates">Event Announcements:</p>
            <p className="ngo-updates">
              Don't miss out on upcoming events! NGOs can share details about
              philanthropic events, fundraisers, and webinars, providing you
              with the chance to get involved and make a difference.
            </p>
          </div>
          <div className="real-time-interactions-engage-container">
            <p className="ngo-updates">Real-Time Interactions:</p>
            <p className="ngo-updates">
              Engage with posts through comments, reactions, and shares. Connect
              with NGOs, donors, and fellow community members in real-time,
              fostering a sense of belonging and shared purpose.
            </p>
          </div>
          <div className="try-now-btn">
            <div className="try-now-btn-inner">
              <div className="group-inner" />
            </div>
            <div className="try-now">Try now</div>
          </div>
        </div>
        <b className="community">community</b>
        <div className="conect-engage-help-section">
          <div className="samudaaye-is-an-container">
            <span className="samudaaye-is-an-container1">
              <b>Samudaaye</b>
              <span className="samudaayes">{` is an online platform dedicated to collective philanthropy, connecting individuals and organizations with shared values for positive social impact. It curates impactful projects initiated by NGOs, providing a space for users to explore, contribute, and actively engage. The platform fosters community interaction through a dynamic forum, encouraging knowledge sharing and collaboration. `}</span>
              <b>Samudaaye</b>
              <span className="samudaayes">
                {" "}
                emphasizes transparency by offering real-time updates on project
                progress and achievements, building trust among its members.
                Committed to environmental sustainability, the platform supports
                initiatives such as tree planting, contributing to a brighter
                and greener future.
              </span>
            </span>
          </div>
          <img
            className="conect-engage-help-image-icon"
            alt=""
            src="/conectengagehelpimage@2x.png"
          />
          <img className="paper-plane-icon" alt="" src="/paperplane@2x.png" />
          <div className="connect-engage-container">
            <span>{`Connect . `}</span>
            <span className="samudaayes">Engage</span>
            <span> . Help</span>
          </div>
        </div>
        <div className="bg-community-section" />
        <div className="real-time-update-section">
          <div className="total-number-of-donors-parent">
            <b className="total-number-of">Total Number of Donors</b>
            <b className="projects-funded">Projects Funded</b>
            <b className="community-contributions">Community Contributions</b>
            <div className="number-doner-metric">
              <div className="number-doner-metric-child" />
              <div className="k">10k</div>
            </div>
            <img className="line-icon" alt="" src="/line-166.svg" />
            <div className="project-fund-metrics">
              <div className="number-doner-metric-child" />
              <div className="div1">100+</div>
            </div>
            <img className="group-child1" alt="" src="/line-167.svg" />
            <div className="commune-contri-metrics">
              <div className="k1">50k+</div>
              <div className="commune-contri-metrics-child" />
            </div>
          </div>
        </div>
        <b className="real-time-updates">Real-time updates</b>
        <div className="image-slider">
          <img
            className="image-slider-child"
            alt=""
            src="/rectangle-144@2x.png"
          />
        </div>
        <b className="unlock-your-impact">Unlock Your Impact Badges</b>
        <div className="component-6">
          <img
            className="image-slider-child"
            alt=""
            src="/rectangle-144@2x.png"
          />
        </div>
        <div className="landing-page-child" />
        <img className="paper-plane-icon1" alt="" src="/paperplane1@2x.png" />
        <button className="get-started-btn" onClick={onGetStartedBtnClick}>
          <img
            className="get-started-btn-child"
            alt=""
            src="/rectangle-39.svg"
          />
          <img
            className="vuesaxoutlinearrow-right-icon"
            alt=""
            src="/vuesaxoutlinearrowright.svg"
          />
          <div className="get-started">Get Started</div>
        </button>
        <div className="join-commun-btn">
          <div className="join-commun-btn-child" />
          <div className="join-our-community">Join our community</div>
        </div>
        <div className="connecting-hearts-creating-container">
          <span>{`Connecting Hearts, `}</span>
          <span className="creating-impact">Creating Impact</span>
        </div>
        <div className="samudaaye1">
          <span>Sam</span>
          <span className="creating-impact">udaaye</span>
        </div>
        <div className="component-4">
          <div className="nav-bar">
            <div className="nav-bar-child" />
            <button className="home" onClick={onHomeClick}>
              home
            </button>
            <button className="community1" onClick={onCommunityClick}>
              community
            </button>
            <div className="ngo">NGO</div>
            <div className="donate">Donate</div>
            <img className="profile-icon" alt="" src="/profile@2x.png" />
            <div className="what-we-do-parent">
              <div className="what-we-do">what we do</div>
              <img className="arrow-down-icon" alt="" src="/arrowdown.svg" />
            </div>
            <img
              className="samudaaye-logo-1-1"
              alt=""
              src="/samudaayelogo-1-1.svg"
            />
          </div>
          <button
            className="group-container"
            ref={frameButtonRef}
            onClick={openFramePopup}
          >
            <button className="ellipse-wrapper">
              <img className="ellipse-icon" alt="" src="/profile21@2x.png" />
            </button>
            <button className="ellipse-wrapper">
              <img className="ellipse-icon" alt="" src="/profile21@2x.png" />
            </button>
          </button>
        </div>
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

export default LandingPage;
