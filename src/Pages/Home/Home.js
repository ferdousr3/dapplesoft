import React from "react";
import { Grid, Icon, TextField, Typography } from "@material-ui/core";
import "./Home.css";
import resumeData from "../../Utilts/resumeData";
import CustomButton from "../../Components/Button/Button";
import HomeButton from "../../Components/Button/HomeButtton";
import { Helmet } from "react-helmet";

const Resume = () => {
  return (
    <>
      {/* SEO */}
      <Helmet>
        <title>Be Different Think Different</title>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content={
            "At Dapplesoft our Motive and Values are to Help People And Businesses All Over The World Achieve Their Destination"
          }
        />
        <meta name="keywords" content={"dapplesoft,dapple soft,dapple"} />
      </Helmet>
      {/* hero*/}
      <Grid container className="section pb_45">
        <Grid item xs={12}>
          <Grid container spacing={3} className="hero">
            {/* hero_left */}
            <Grid item sm={12} md={5}>
              <Typography variant={"h3"} className="hero_left_title">
                Be Different Think <br></br> Different
              </Typography>
              <Typography variant={"body1"} className="hero_left_p">
                At Dapplesoft our Motive and Value are to Help People And
                Businesses All Over world Achieve Their Destination.
              </Typography>
              <HomeButton text={"Learn More"} />
            </Grid>
            {/* hero right*/}
            <Grid item sm={12} md={7}>
              <img className="hero_right" src="Image/7.png" alt="" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* About Us */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Us</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="about_us" spacing={10}>
            {/* about us left */}
            <Grid item sm={12} md={6} className="about_us_img">
              <img className="about_us_image" src="Image/10.png" alt="" />
            </Grid>
            {/* about us right */}
            <Grid item sm={12} md={6} className="about_us_right">
              <Typography className="about_us_title" variant={"h6"}>
                {resumeData.name}
              </Typography>
              <Typography className="about_us_p" variant={"body1"}>
                {resumeData.about}
              </Typography>

              {/* <Typography className="about_us_list">
                <span>
                  <VerifiedUserOutlinedIcon />
                </span>{" "}
                Software Development, Android App Development. 
              </Typography>
              <Typography className="about_us_list">
                <span>
                  <VerifiedUserOutlinedIcon />
                </span>{" "}
                Web Development.
              </Typography>
              <Typography className="about_us_list">
                <span>
                  <VerifiedUserOutlinedIcon />
                </span>{" "}
                Cloud Services.
              </Typography> */}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* Services*/}
      <Grid container className="section pb_45">
        <Grid item xs={12} md={12}>
          <Typography variant={"h5"} className="extra_section_title ">
            What We Offer
          </Typography>
          <Typography variant={"body1"} className="extra_section_p ">
            At Dapplesoft our Motive and Values are to Help People And
            Businesses<br></br> All Over The World Achieve
          </Typography>
        </Grid>
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">Services</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.services.map((service) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{service.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {service.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {service.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Technologies*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">Technologies</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.technologies.map((technologie) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{technologie.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {technologie.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {technologie.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Industries*/}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">Industries</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.industries.map((industrie) => (
              <Grid item xs={12} sm={6} md={3}>
                <div className="service">
                  <Icon className="service_icon">{industrie.icon}</Icon>
                  <Typography className="service_title" variant="h6">
                    {industrie.title}
                  </Typography>
                  <Typography className="service_description" variant="body2">
                    {industrie.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* Web Development*/}
      <Grid container className="section gray_bg pb_45 pt-4">
        <Grid item xs={12} md={12}>
          <Typography variant={"h5"} className="extra_section_title ">
            SOFTWARE DEVELOPMENT <br></br> PLATFORMS, TECHNOLOGIES & LANGUAGES
          </Typography>
          <Typography variant={"body2"} className="extra_section_p mb_30">
            With over ten years on the IT market, our experts are bringing you
            wide-ranging expertise in all the areas needed for a reliable
            software development solution that works across the board.
          </Typography>
        </Grid>
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">
            Enterprise Software Development{" "}
          </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.webdevelopments.map((webdevelopment) => (
              <Grid item xs={12} sm={6} md={2}>
                <div className="software">
                  <img src={webdevelopment.image} alt="" />
                  <Typography className="software_title" variant="h6">
                    {webdevelopment.title}
                  </Typography>
                  <Typography className="software_description" variant="body2">
                    {webdevelopment.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* DATA BASE*/}
      <Grid container className="section gray_bg pb_45">
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">Database</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.databases.map((database) => (
              <Grid item xs={12} sm={6} md={2}>
                <div className="software">
                  <img src={database.image} alt="" />
                  <Typography className="software_title" variant="h6">
                    {database.title}
                  </Typography>
                  <Typography className="software_description" variant="body2">
                    {database.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* computings */}
      <Grid container className="section gray_bg pb_45">
        <Grid item className="section_title mb_30 top_30">
          <span></span>
          <h6 className="section_title_text">Cloud Computing </h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={3}>
            {resumeData.computings.map((computing) => (
              <Grid item xs={12} sm={6} md={2}>
                <div className="software">
                  <img src={computing.image} alt="" />
                  <Typography className="software_title" variant="h6">
                    {computing.title}
                  </Typography>
                  <Typography className="software_description" variant="body2">
                    {computing.description}
                  </Typography>
                </div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      {/* contact*/}
      <Grid container spacing={7} className="section pt_45 pb_45 mb-2">
        {/* contact form */}
        <Grid item xs={12} lg={7}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="email" label="E-mail" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="adress" label="Adress" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField fullWidth name="number" label="Phone" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="message"
                    label="Message"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <CustomButton text="Submit" />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        {/* contact information*/}
        <Grid item xs={12} lg={5}>
          <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Information</h6>
            </Grid>
            <Grid item xs={12}>
              <Grid container className="contactInfo_item_center">
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <sapn className="contactInfo_item_span">Address: </sapn>
                    {resumeData.address}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <sapn className="contactInfo_item_span">Phone: </sapn>
                    {resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className="contactInfo_item">
                    <sapn className="contactInfo_item_span">Email: </sapn>
                    {resumeData.email}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Grid container className="contactInfo_socialsContainer">
                    {Object.keys(resumeData.socials).map((key) => (
                      <Grid item className="contactInfo_social">
                        <a href={resumeData.socials[key].link}>
                          {resumeData.socials[key].icon}
                        </a>
                      </Grid>
                    ))}
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Resume;
