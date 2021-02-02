import React, { Component } from "react";
import "../Assets/css/Navbar.css";
import Logo2 from "../Assets/img/codeck.svg";
import youtubeLogo from "../Assets/img/youtube-color.svg";
import facebookLogo from "../Assets/img/facebook-color.svg";
import linkedLogo from "../Assets/img/linkedin-color.svg";
import instagramLogo from "../Assets/img/instagram-color.svg";

export class Navbar extends Component {
  render() {
    return (
      <div className="nav">
        <div className="nav-left">
          <a href="/#">
            <img className="logo" alt="social media Logo" src={Logo2} />
            <br />
            <p className="nav-logoParagraph">
              <small>Codeck Yazılım AŞ</small>
            </p>
          </a>
          <div className="social-media">
            <a href="/#">
              <img
                className="social-logo"
                alt="social media Logo"
                src={youtubeLogo}
              />
            </a>
            <a href="/#">
              <img
                className="social-logo"
                alt="social media Logo"
                src={facebookLogo}
              />
            </a>
            <a href="/#">
              <img
                className="social-logo"
                alt="social media Logo"
                src={instagramLogo}
              />
            </a>
            <a href="/#">
              <img
                className="social-logo"
                alt="social media Logo"
                src={linkedLogo}
              />
            </a>
          </div>
        </div>
        <div className="nav-right">
          <ul>
            <li className="nav-info">
              <a href="/#">Anasayfa</a>
            </li>
            <li className="nav-info">
              <a href="/#">Hakkımızda</a>
            </li>
            <li className="nav-info">
              <a href="/#">Projelerimiz</a>
            </li>
            <li className="nav-info">
              <a href="/#">İletişim</a>
            </li>
            <li className="nav-info nav-mail">
              <a href="/#">info@codeck.com.tr</a>
            </li>
            <li className="nav-info nav-phone">
              <a href="/#">Ara +90 850 305 71 87</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Navbar;
