import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, withRouter } from "react-router-dom";
import { Telegram } from "@material-ui/icons";
import resumeData from "../../Utilts/resumeData";
import CustomButton from "../Button/Button";
import "./Header.css";
import { Link, Typography } from "@material-ui/core";


const Header = (props) => {
  const pathName = props?.location?.pathname;
  return (
    <>
      <Navbar expand="lg" sticky="top" className="header">
        {/* Home link */}
        <Nav.Link as={NavLink} to="/" className="header_navlink">
          <NavbarBrand className="header_home">
            <img src="Image/4.png" alt="" />
            <Typography className="header_home_title">{resumeData.name}</Typography>
          </NavbarBrand>
        </Nav.Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="header_left">
            {/* resume Link */}
            <Nav.Link
              as={NavLink}
              to="/"
              className={
                pathName === "/" ? "header_link_active" : "header_link"
              }
            >
              Home
            </Nav.Link>
            {/* protfolio Link */}
            <Nav.Link
              as={NavLink}
              to="/portfolio"
              className={
                pathName === "/portfolio" ? "header_link_active" : "header_link"
              }
            >
              Portfolio
            </Nav.Link>
            {/* contact Link */}
            <Nav.Link
              as={NavLink}
              to="/contact"
              className={
                pathName === "/contact" ? "header_link_active" : "header_link"
              }
            >
              Contact
            </Nav.Link>
          </Nav>
          <div className="header_right">
            {Object.keys(resumeData.socials).map((key) => (
              <a
                href={resumeData.socials[key].link}
                target="_blank"
                rel="noreferrer"
              >
                {resumeData.socials[key].icon}
              </a>
            ))}
            <Link exact to="/contact"></Link>
            <Nav.Link
              as={NavLink}
              to="/contact"
            >
              <CustomButton text={"Get In Touch"} icon={<Telegram />} />
            </Nav.Link>
            
          </div>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default withRouter(Header);
