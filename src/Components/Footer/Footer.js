import { Typography } from "@material-ui/core";
import React from "react";
import "./Footer.css";
import resumeData from "../../Utilts/resumeData";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer_left">
          <a href="/" className="footer_link">
          <img src="Image/4.png" alt=""></img>
          <Typography className="footer_name">{resumeData.name}</Typography>
            </a>
        </div>
        <div className="footer_right">
          <Typography className="footer_copyright">
            © {" "}
            <a href="https://dapplesoft.com/" target="_blank" rel="noreferrer">
              Dapplesoft
            </a> {" "} 
            2020
            {/* <br></br>
            Designed by{" "}
            <a
              href="https://facebook.com/ferdousr3"
              target="_blank"
              rel="noreferrer"
            >
              Ferdous
            </a> */}
          </Typography>
        </div>
        <div className="footer_middle">
          {Object.keys(resumeData.socials).map((key) => (
            <a
              href={resumeData.socials[key].link}
              target="_blank"
              rel="noreferrer"
            >
              {resumeData.socials[key].icon}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
