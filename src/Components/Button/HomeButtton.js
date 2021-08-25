
import React from "react";
import Button from '@material-ui/core/Button';
import './HomeButton.css';

const HomeButtton = ({ text, icon }) => {
  return (
    <>
      <Button
        className="home_btn"
        endIcon={icon ? <div className="home_btn_icon_container">{icon}</div> : null}
      >
        <span className="home_btn_text">{text}</span>
      </Button>
    </>
  );
};

export default HomeButtton;
