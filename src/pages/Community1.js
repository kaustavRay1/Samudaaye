import { useState, useRef, useCallback } from "react";
import FrameComponent1 from "../components/FrameComponent1";
import PortalPopup from "../components/PortalPopup";
import { useNavigate } from "react-router-dom";
import "./Community1.css";

const Community1 = () => {
  const frameButtonRef = useRef(null);
  const [isFramePopupOpen, setFramePopupOpen] = useState(false);
  const frameButton1Ref = useRef(null);
  const [isFramePopup1Open, setFramePopup1Open] = useState(false);
  const navigate = useNavigate();

  const onHomeClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const openFramePopup = useCallback(() => {
    setFramePopupOpen(true);
  }, []);

  const closeFramePopup = useCallback(() => {
    setFramePopupOpen(false);
  }, []);

  const openFramePopup1 = useCallback(() => {
    setFramePopup1Open(true);
  }, []);

  const closeFramePopup1 = useCallback(() => {
    setFramePopup1Open(false);
  }, []);

  return (
    <>
      <div className="community4">
        <div className="posts">
          <div className="posts-section">
            <div className="demo-post">
              <div className="demo-post-child" />
              <img className="profile-icon2" alt="" src="/profile1@2x.png" />
              <p className="username2" id="usernamepost1">
                @username
              </p>
              <button className="connect-btn" id="connectpost1">
                <div className="connect-btn-child" />
                <div className="connect">connect</div>
              </button>
              <img
                className="demo-post-item"
                id="postimg1"
                alt=""
                src="/rectangle-83@1x.png"
              />
              <div className="icons">
                <button className="heart-circle" id="heartpost1">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/vuesaxboldheartcircle.svg"
                  />
                </button>
                <button
                  className="bookmark-fill1-wght400-grad0-o"
                  id="savepost1"
                >
                  <img className="vector-icon6" alt="" src="/vector.svg" />
                </button>
                <button className="send" id="sharepost1">
                  <img className="vector-icon7" alt="" src="/vector11.svg" />
                  <img className="vector-icon8" alt="" src="/vector21.svg" />
                </button>
                <div className="message-text">
                  <button className="vuesaxboldmessage-text" id="commentpost1">
                    <img
                      className="vuesaxboldheart-circle-icon"
                      alt=""
                      src="/messagetext.svg"
                    />
                  </button>
                </div>
              </div>
              <button
                className="location-on-fill1-wght400-grad"
                id="locationPost1"
              >
                <img className="vector-icon9" alt="" src="/vector31.svg" />
              </button>
              <img
                className="more-vertical-icon1"
                alt=""
                src="/morevertical1.svg"
              />
            </div>
            <div className="demo-post1">
              <div className="demo-post-child" />
              <button
                className="location-on-fill1-wght400-grad1"
                id="locationpost2"
              >
                <img className="vector-icon9" alt="" src="/vector31.svg" />
              </button>
              <img className="profile-icon2" alt="" src="/profile1@2x.png" />
              <p className="username3" id="usernamepost2">
                @username
              </p>
              <button className="connect-btn" id="connectpost2">
                <div className="connect-btn-child" />
                <div className="connect">connect</div>
              </button>
              <img
                className="demo-post-item"
                id="postimg2"
                alt=""
                src="/rectangle-83@1x.png"
              />
              <div className="icons1">
                <button className="heart-circle" id="heartpost2">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/vuesaxboldheartcircle.svg"
                  />
                </button>
                <button
                  className="bookmark-fill1-wght400-grad0-o"
                  id="savepost2"
                >
                  <img className="vector-icon6" alt="" src="/vector.svg" />
                </button>
                <button className="send1" id="sharepost2">
                  <img className="vector-icon8" alt="" src="/vector21.svg" />
                  <img className="vector-icon13" alt="" src="/vector41.svg" />
                </button>
                <button className="message-text1" id="commentpost2">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/messagetext.svg"
                  />
                </button>
              </div>
              <img
                className="more-vertical-icon1"
                alt=""
                src="/morevertical1.svg"
              />
            </div>
            <div className="demo-post2">
              <img
                className="demo-post-2-child"
                alt=""
                src="/rectangle-85.svg"
              />
              <button
                className="location-on-fill1-wght400-grad2"
                id="locationpost3"
              >
                <img className="vector-icon9" alt="" src="/vector31.svg" />
              </button>
              <img className="profile-icon2" alt="" src="/profile1@2x.png" />
              <p className="username3" id="usernamepost3">
                @username
              </p>
              <button className="connect-btn" id="connectpost3">
                <div className="connect-btn-child" />
                <div className="connect">connect</div>
              </button>
              <img
                className="demo-post-item"
                id="postimg3"
                alt=""
                src="/rectangle-83@1x.png"
              />
              <div className="icons2">
                <button className="heart-circle" id="heartpost3">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/vuesaxboldheartcircle.svg"
                  />
                </button>
                <button
                  className="bookmark-fill1-wght400-grad0-o"
                  id="savepost3"
                >
                  <img className="vector-icon6" alt="" src="/vector.svg" />
                </button>
                <button className="send2" id="sharepost3">
                  <img className="vector-icon7" alt="" src="/vector11.svg" />
                  <img className="vector-icon8" alt="" src="/vector21.svg" />
                </button>
                <button className="message-text1" id="commentpost3">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/messagetext.svg"
                  />
                </button>
              </div>
              <img
                className="more-vertical-icon1"
                alt=""
                src="/morevertical1.svg"
              />
            </div>
            <div className="demo-post-2">
              <img
                className="demo-post-2-child"
                alt=""
                src="/rectangle-85.svg"
              />
              <button
                className="location-on-fill1-wght400-grad2"
                id="locationpost4"
              >
                <img className="vector-icon9" alt="" src="/vector31.svg" />
              </button>
              <img className="profile-icon2" alt="" src="/profile1@2x.png" />
              <p className="username3" id="usernamepost4">
                @username
              </p>
              <button className="connect-btn" id="connectpost4">
                <div className="connect-btn-child" />
                <div className="connect">connect</div>
              </button>
              <img
                className="demo-post-item"
                id="postimg4"
                alt=""
                src="/rectangle-8311@2x.png"
              />
              <div className="icons">
                <button className="heart-circle" id="heartpost4">
                  <button className="vuesaxboldmessage-text" id="heartpost4">
                    <img
                      className="vuesaxboldheart-circle-icon"
                      alt=""
                      src="/vuesaxboldheartcircle.svg"
                    />
                  </button>
                </button>
                <button
                  className="bookmark-fill1-wght400-grad0-o"
                  id="savepost4"
                >
                  <img className="vector-icon6" alt="" src="/vector.svg" />
                </button>
                <button className="message-text1" id="commentpost4">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/messagetext.svg"
                  />
                </button>
                <img className="send-icon" alt="" src="/send.svg" />
              </div>
              <img
                className="more-vertical-icon1"
                alt=""
                src="/morevertical1.svg"
              />
            </div>
            <div className="demo-post3">
              <img
                className="demo-post-2-child"
                alt=""
                src="/rectangle-85.svg"
              />
              <img
                className="location-on-fill1-wght400-grad-icon"
                alt=""
                src="/location-on-fill1-wght400-grad0-opsz24-2.svg"
              />
              <img className="profile-icon2" alt="" src="/profile1@2x.png" />
              <p className="username3" id="usernamepost5">
                @username
              </p>
              <button className="connect-btn" id="connectpost5">
                <div className="connect-btn-child" />
                <div className="connect">connect</div>
              </button>
              <img
                className="demo-post-item"
                id="postimg5"
                alt=""
                src="/rectangle-8311@2x.png"
              />
              <div className="icons4">
                <button className="heart-circle" id="heartpost5">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/vuesaxboldheartcircle.svg"
                  />
                </button>
                <button
                  className="bookmark-fill1-wght400-grad0-o"
                  id="savepost5"
                >
                  <img className="vector-icon6" alt="" src="/vector.svg" />
                </button>
                <button className="message-text1" id="commentpost5">
                  <img
                    className="vuesaxboldheart-circle-icon"
                    alt=""
                    src="/messagetext.svg"
                  />
                </button>
                <img className="send-icon1" alt="" src="/send11.svg" />
              </div>
              <img
                className="more-vertical-icon1"
                alt=""
                src="/morevertical1.svg"
              />
            </div>
          </div>
          <p className="k-likes" id="count">
            k likes
          </p>
        </div>
        <div className="suggestion-section">
          <div className="suggestion-section-child" />
          <b className="suggestion-for-you">Suggestion for you</b>
          <div className="demo-user">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgsuggestion3"
              alt=""
              src="/ellipse-511@2x.png"
            />
            <p className="username7" id="usernamesuggestion1">
              @username
            </p>
            <button className="connect5" id="connectsuggestion3">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user1">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgsuggestion2"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamesuggestion1">
              @username
            </p>
            <button className="connect5" id="connectsuggestion2">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user2">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgsuggestion1"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamesuggestion1">
              @username
            </p>
            <button className="connect5" id="connectsuggestion1">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="see-all">See All</div>
        </div>
        <b className="for-you">for you</b>
        <div className="friends-section">
          <div className="friends-section-child" />
          <b className="friends">Friends</b>
          <div className="demo-user3">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfriends5"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefriends5">
              @username
            </p>
            <button className="connect5" id="connectfriends5">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user4">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfriends4"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefriend4">
              @username
            </p>
            <button className="connect5" id="connectfriends4">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user5">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfriends3"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefriends3">
              @username
            </p>
            <button className="connect5" id="connectfriends3">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user6">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfriends2"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefriends2">
              @username
            </p>
            <button className="connect5" id="connectfriends2">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user7">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfriends1"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefriends1">
              @username
            </p>
            <button className="connect5" id="connectfriends1">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="see-all1">See All</div>
        </div>
        <section className="stories" id="stories">
          <div className="stories-section">
            <div className="stories7" />
            <button className="stories6" id="stories6" />
            <button className="stories5" id="stories5" />
            <button className="stories4" id="stories4" />
            <button className="stories3" id="stories3" />
            <button className="stories2" id="stories2" />
            <button className="stories-1" id="stories1" />
          </div>
        </section>
        <b className="stories1">stories</b>
        <div className="following-section">
          <div className="following-section-child" />
          <b className="following1">Following</b>
          <div className="demo-user8">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfollowing5"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefollowing5">
              @username
            </p>
            <button className="connect5" id="connectbutton5">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user9">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfollowing4"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefollowing4">
              @username
            </p>
            <button className="connect5" id="connectfollowing4">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user10">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfollowing3"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefollowing3">
              @username
            </p>
            <button className="connect5" id="connectfollowing3">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user11">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfollowing2"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefollowing2">
              @username
            </p>
            <button className="connect5" id="connectfollowing2">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="demo-user12">
            <div className="demo-user-child" />
            <img
              className="demo-user-item"
              id="imgfollowing1"
              alt=""
              src="/ellipse-5111@1x.png"
            />
            <p className="username7" id="usernamefollowing1">
              @username
            </p>
            <button className="connect5" id="connectfollowing1">
              <div className="connect-child" />
              <img className="connect-icon" alt="" src="/connect.svg" />
            </button>
          </div>
          <div className="see-all2">See All</div>
        </div>
        <div className="icon-section">
          <div className="icon-section-child" />
          <img
            className="profile-icon7"
            id="profile"
            alt=""
            src="/profile11@1x.png"
          />
          <button className="bookmark-fill1-wght400-grad0-o5" id="saved">
            <img className="vector-icon6" alt="" src="/vector.svg" />
          </button>
          <button className="vuesaxboldmessages-2" id="chats">
            <img
              className="vuesaxboldheart-circle-icon"
              alt=""
              src="/messages2.svg"
            />
          </button>
          <button className="notifications-fill1-wght300-gr" id="notifications">
            <img className="vector-icon22" alt="" src="/vector51.svg" />
          </button>
        </div>
        <div className="search-bar">
          <input
            className="searchinput"
            name="searchInput"
            placeholder="Search"
            type="text"
          />
          <button className="search-fill0-wght300-grad0-ops" id="searchButton">
            <img className="vector-icon23" alt="" src="/vector61.svg" />
          </button>
        </div>
        <div className="fundrasing-section">
          <div className="fundrasing-section-child" />
          <b className="fundraising">Fundraising</b>
          <div className="samudaaye-is-a">
            Samudaaye is a platform that helps NGOs in India raise money for
            their causes. You can support your favorite NGO by donating to their
            fundraising campaigns.
          </div>
          <button className="fundraising-button" id="fundraisingButton">
            <div className="fundraising-button-child" />
            <div className="fundraising-button-item" />
          </button>
        </div>
        <img className="community-child" alt="" src="/line-168.svg" />
        <div className="group-parent2">
          <img className="group-child14" alt="" src="/group-2@2x.png" />
          <div className="group6">
            <div className="s6">S</div>
            <div className="a21">a</div>
            <div className="m6">m</div>
            <div className="u5">u</div>
            <div className="d7">d</div>
            <div className="a22">a</div>
            <div className="a23">a</div>
            <div className="y6">y</div>
            <div className="e10">e</div>
          </div>
        </div>
        <div className="nav-bar3">
          <div className="nav-bar4">
            <div className="nav-bar-child1" />
            <button className="home3" onClick={onHomeClick}>
              home
            </button>
            <div className="community5">community</div>
            <div className="ngo3">NGO</div>
            <div className="donate3">Donate</div>
            <img className="profile-icon8" alt="" src="/profile21@2x.png" />
            <button
              className="nav-bar-inner1"
              ref={frameButtonRef}
              onClick={openFramePopup}
            >
              <button className="vuesaxboldmessage-text">
                <img className="group-child15" alt="" src="/profile21@2x.png" />
              </button>
            </button>
            <div className="what-we-do-container">
              <div className="what-we-do4">what we do</div>
              <img className="arrow-down-icon3" alt="" src="/arrowdown2.svg" />
            </div>
          </div>
          <button
            className="nav-bar-inner1"
            ref={frameButton1Ref}
            onClick={openFramePopup1}
          >
            <button className="vuesaxboldmessage-text">
              <img className="group-child15" alt="" src="/profile21@2x.png" />
            </button>
          </button>
          <div className="line-div" />
          <img className="group-icon1" alt="" src="/group1.svg" />
        </div>
        <div className="footer-section2">
          <div className="footer-section-inner" />
          <div className="samudaaye5">Samudaaye</div>
          <div className="samudaaye-logo-footer2">
            <div className="group7">
              <div className="s7">S</div>
              <div className="a24">a</div>
              <div className="m7">m</div>
              <div className="u6">u</div>
              <div className="d8">d</div>
              <div className="a25">a</div>
              <div className="a26">a</div>
              <div className="y7">y</div>
              <div className="e11">e</div>
            </div>
            <div className="group-parent3">
              <img className="group-child17" alt="" src="/group-591@2x.png" />
              <div className="group7">
                <div className="s8">S</div>
                <div className="a27">a</div>
                <div className="m8">m</div>
                <div className="u6">u</div>
                <div className="d8">d</div>
                <div className="a25">a</div>
                <div className="a26">a</div>
                <div className="y7">y</div>
                <div className="e11">e</div>
              </div>
            </div>
          </div>
          <div className="samudaaye-2023-all2">
            ©Samudaaye 2023, All rights reserved.
          </div>
          <div className="vector-container">
            <img className="vector-icon24" alt="" src="/vector.svg" />
            <img className="insta-icon2" alt="" src="/insta.svg" />
            <img className="layer1-icon2" alt="" src="/layer11.svg" />
          </div>
          <div className="policy2">Policy</div>
          <div className="privacy-policy2">Privacy Policy</div>
          <div className="terms-of-use2">Terms of Use</div>
          <div className="support2">Support</div>
          <div className="faqs2">FAQ’s</div>
          <div className="about-us2">About Us</div>
          <div className="contact-us2">Contact US</div>
          <a className="supportsamudaayein2" href="mailto:support@samudaaye.in">
            support@samudaaye.in
          </a>
          <a className="a30">+91-85878759608</a>
          <img className="call-icon2" alt="" src="/call.svg" />
          <img className="sms-icon2" alt="" src="/sms.svg" />
          <div className="follow-us2">Follow Us</div>
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
      {isFramePopup1Open && (
        <PortalPopup
          placement="Top left"
          top={-200}
          left={-10}
          relativeLayerRef={frameButton1Ref}
          onOutsideClick={closeFramePopup1}
        >
          <FrameComponent1 onClose={closeFramePopup1} />
        </PortalPopup>
      )}
    </>
  );
};

export default Community1;
