import React from "react";
import Button from "../button/Button";
import footer_logo from "../../../../assets/landing/samalfooter.png";
import "./footer.css";

const Footer = () => {
  const btnStyle = {
    width: "170px",
    height: "39px",
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: "24px",
    textAlign: "center",
    color: "#FFFFFF",
  };
  return (
    <footer className="footer-container">
      <span className="cross-line-footer"></span>
      <div className="work-together-container">
        <p>Let's Work Together</p>
      </div>
      <div className="btn-footer-container">
        <Button text="Contact Us" btnStyle={btnStyle} />
      </div>
      <div className="social-media-container">
        <img src={footer_logo} />
        <p>© 2022 SamalAgro. All rights reserved</p>
        <div className="social-media-icons">
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/59/59439.png"
          />
          <img
            className="icon"
            src="https://cdn-icons-png.flaticon.com/512/87/87390.png"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
