import React from "react";
import "../assets/css/Footer.css";
import facebook from "../assets/img/icons/facebook.svg";
import twitter from "../assets/img/icons/twitter.svg";
import instagram from "../assets/img/icons/instagram.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="line-1 grid grid--3-cols">
        <div className="box-1">
          <div className="cont">
            <p>Podlly</p>
            <ul>
              <li>
                <a href="">Our Speakers</a>
              </li>
              <li>
                <a href="">Our Process</a>
              </li>
              <li>
                <a href="">Our Partners</a>
              </li>
              <li>
                <a href="">Career</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-2">
          <div className="cont">
            <p>Company</p>
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Login</a>
              </li>
              <li>
                <a href="">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="cont">
            <p>About Us</p>
            <ul>
              <li>
                <a href="">Our Story</a>
              </li>
              <li>
                <a href="">Behind the Scenes</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="box-3">
          <div className="cont">
            <p>Social</p>
            <ul>
              <li>
                <a href="">Facebook</a>
              </li>
              <li>
                <a href="">Instagram</a>
              </li>
              <li>
                <a href="">Twitter</a>
              </li>
              <li>
                <a href="">YouTube</a>
              </li>
              <li>
                <a href="">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="line-2">
        <a href="#" className="social">
          <img src={facebook} alt="Facebook" />
        </a>
        <a href="#" className="social">
          <img src={twitter} alt="Facebook" />
        </a>
        <a href="#" className="social">
          <img src={instagram} alt="Facebook" />
        </a>
      </div>

      <div className="line-3">
        <p className="copyright">
          &copy; 2023 Polly &ndash; All right reserved.
        </p>
        <a href="#" className="policy">
          Privacy Policy
        </a>
        <a href="#" className="terms">
          Terms and Condition
        </a>
      </div>
    </footer>
  );
};

export default Footer;
