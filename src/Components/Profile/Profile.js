import React from "react";
import { Typography } from "@material-ui/core";
import "./Profile.css";
// import  { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../Utilts/resumeData";
// import TimelineItem from "@material-ui/lab/TimelineItem";
// import TimelineContent from "@material-ui/lab/TimelineContent";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import PhoneInTalkIcon from "@material-ui/icons/PhoneInTalk";

// const CustomTimelineItem = ({ title, text, link }) => (
//   <TimelineItem>
//     <CustomTimelineSeparator />
//     <TimelineContent className="timeline_content">
//       {link ? (
//         <Typography className="timelineItem_text">
//           <span>{title}:</span>{" "}
//           <a href={link} target="_blank" rel="noreferrer">
//             {text}
//           </a>
//         </Typography>
//       ) : (
//         <Typography className="timelineItem_text">
//           <span>{title}:</span>
//           {text}
//         </Typography>
//       )}
//     </TimelineContent>
//   </TimelineItem>
// );

const Profile = () => {
  return (
    <>
      {/* <Grid container className="profile ">
        <Grid item  sm={4} md={4}>
          <div className="profile_image">
            <a href="/" className="profile_link">
            <img src="Image/4.png" alt=""></img>
            <Typography variant={"h6"} className="name">
              {resumeData.name}
            </Typography>
            </a>
          </div>
        </Grid>
        <Grid item  sm={4} md={4}>
          <Typography variant={"body1"} className={"profile_items_call"}>
            <span><PhoneInTalkIcon/>: </span> +880 1302-136971
          </Typography>
        </Grid>
        <Grid item  sm={4} md={4}>
          <Typography variant={"body1"} className={"profile_items_email"}>
            <span><MailOutlineIcon/>: </span> info@dapplesoft.com
          </Typography>
        </Grid>
      </Grid> */}
      <div className="profile_image">
        <a href="/" className="profile_link">
          <img src="Image/4.png" alt=""></img>
          <Typography variant={"h6"} className="name">
            {resumeData.name}
          </Typography>
        </a>
      </div>
    </>
  );
};

export default Profile;
