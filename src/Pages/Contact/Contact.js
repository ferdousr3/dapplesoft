import React from "react";
import { Grid,TextField, Typography } from "@material-ui/core";
import "./Contact.css";
import resumeData from "../../Utilts/resumeData";
import CustomButton from "../../Components/Button/Button";


const Contact = () => {
    return (
        <>
        {/* contact*/}
        <Grid container spacing={7} className="section mt-2 mb-2  pt_45">
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
                <Grid container className='contactInfo_item_center' >
                  <Grid item xs={12}>
                    <Typography className='contactInfo_item'>
                        <sapn className='contactInfo_item_span'>Address: </sapn>{resumeData.address}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='contactInfo_item'>
                        <sapn className='contactInfo_item_span'>Phone: </sapn>{resumeData.phone}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography className='contactInfo_item'>
                        <sapn className='contactInfo_item_span'>Email: </sapn>{resumeData.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid container className='contactInfo_socialsContainer'>
                      {Object.keys(resumeData.socials).map((key) =>(
                        <Grid item className='contactInfo_social'>
                          <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
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
    )
}

export default Contact;
