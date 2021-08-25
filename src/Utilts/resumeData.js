import React from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Language, YouTube } from "@material-ui/icons";
import ColorLensIcon from "@material-ui/icons/ColorLens";
import SettingsIcon from "@material-ui/icons/Settings";
import AirplayIcon from "@material-ui/icons/Airplay";
import AppsIcon from "@material-ui/icons/Apps";
import EditAttributesIcon from "@material-ui/icons/EditAttributes";
import PeopleIcon from "@material-ui/icons/People";
import DynamicFeedIcon from "@material-ui/icons/DynamicFeed";
import CloudDoneIcon from "@material-ui/icons/CloudDone";
import LanguageIcon from "@material-ui/icons/Language";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import BuildIcon from "@material-ui/icons/Build";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import VerifiedUserOutlinedIcon from "@material-ui/icons/VerifiedUserOutlined";
import TrafficOutlinedIcon from "@material-ui/icons/TrafficOutlined";
import MemoryIcon from "@material-ui/icons/Memory";
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';

const resumeData = {
  name: "Dapplesoft",
  title: "Be Different Think Different",
  birthday: "16-12-1992",

  email: "info@dapplesoft.com",
  address: "464 East Birnagar, Panchbibi, Joypurhat, Bangladesh.",
  phone: "+880 1302-136971",

  socials: {
    Facebook: {
      link: "https://www.facebook.com/dapplesoft",
      text: "dapplesoft",
      icon: <FacebookIcon />,
    },
    Twitter: {
      link: "https://www.twitter.com/dapplesoft",
      text: "dapplesoft",
      icon: <TwitterIcon />,
    },
    LinkedIn: {
      link: "https://www.linkedin.com/company/dapplesoft",
      text: "dapplesoft",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.github.com/dapplesoft",
      text: "dapplesoft",
      icon: <GitHubIcon />,
    },
  },

  about:
    "Dapplesoft  Founded in 2019, Dapplesoft is a provider of IT consulting and developing software services. we are helping non-IT organizations and software product companies improve their business performance.we have built up expertise in CRM, ERP, eCommerce, Data Analytics, Information Security, DMS, and other areas and conquered such innovative fields as Artificial Intelligence and Machine Learning, Big Data, Internet of Things, Computer Vision, and Augmented and Virtual Reality.",
  services: [
    {
      title: "UI/UX Design",
      description:
        "User experience and user interface design for all types of websites, SaaS, and web/mobile apps. We combine the latest UI/UX trends with our customers’ individual goals and needs to deliver intuitive, vibrant, and impactful designs that power up businesses.",
      icon: <ColorLensIcon />,
    },
    {
      title: "It Consulting",
      description:
        "Our experts can help to develop and implement an effective IT strategy, assist in smooth digital transformation and system integration as well as advise on improvements to your digital customer experience.",
      icon: <SettingsIcon />,
    },
    {
      title: "App Development",
      description:
        "The full set of services around the development and maintenance of complex business-critical applications. Our experts build, test, deploy, protect, manage, migrate and optimize enterprise-scale digital solutions ensuring they’re always up and running and achieve the optimal TCO.",
      icon: <AppsIcon />,
    },
    {
      title: "Software Development",
      description:
        "The development of reliable and scalable software solutions for any OS, browser, and device. We bring together deep industry expertise and the latest IT advancements to deliver custom solutions and products that perfectly fit the needs and behavior of their users.",
      icon: <AirplayIcon />,
    },
    {
      title: "Dedicated Development Team",
      description:
        "Hire a loyal software development team with niche skills and deep software development team with niche skills and .",
      icon: <PeopleIcon />,
    },
    {
      title: "QA & Testing",
      description:
        "We offer full-range QA and testing outsourcing services, can help to develop yo QA or enhance the existing one, assist you in TCoE setup and evolution. We perform end-to-end testing of mobile, web and desktop application at each stage of the development lifecycle.",
      icon: <EditAttributesIcon />,
    },
    {
      title: "Cybersecurity",
      description:
        "Cybersecurity services to achieve the robust protection of the companies’ applications and networks. Equipped with 16-year experience in information security, our security experts are ready to deliver a variety of cyber protection services.",
      icon: <VerifiedUserOutlinedIcon/>,
    },
    {
      title: "Data Analytics",
      description:
        "We support businesses in achieving fact-based decision-making by converting their historical and real-time, traditional and big data into actionable insights. Our services are tailored to make the raw data and the environment ready, as well as strengthen the business with advanced analytics capabilities.",
      icon: <StorageOutlinedIcon />,
    },
  ],
  industries: [
    {
      title: "Healthcare",
      description:
        "Custom AI-based solutions like machine and deep learning will help you automate any operation.",
      icon: <LocalHospitalIcon />,
    },
    {
      title: "Construction",
      description:
        "Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.",
      icon: <BuildIcon />,
    },
    {
      title: "Retail & ECommerce",
      description:
        "Use cloud computing solutions to create a scalable, flexible, and connected enterprise environment.",
      icon: <ShoppingCartIcon />,
    },
    {
      title: "Insurance",
      description:
        "Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.",
      icon: <VerifiedUserOutlinedIcon />,
    },
    {
      title: "Travel & Hospitality",
      description:
        "Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.",
      icon: <TrafficOutlinedIcon />,
    },
    {
      title: "FinTech",
      description:
        "Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.",
      icon: <MemoryIcon />,
    },
  ],
  technologies: [
    {
      title: "Artificial Intelligence",
      description:
        "Custom AI-based solutions like machine and deep learning will help you automate any operation.",
      icon: <DynamicFeedIcon />,
    },
    {
      title: "Cloud Computing",
      description:
        "Secure IoT solutions will let you gather Big Data, optimise key processes, and improve decision-making.",
      icon: <CloudDoneIcon />,
    },
    {
      title: "Internet Of Things",
      description:
        "Build the product you need on time with an experienced team that uses a clear and effective design process.",
      icon: <LanguageIcon />,
    },
  ],

  computings: [
    {
      image: "Image/computing/aws.png",
      description: "Amazon Web Services",
    },
    {
      image: "Image/computing/azure.png",
      description: "Microsoft Azure",
    },
    {
      image: "Image/computing/gcp.png",
      description: "Google Cloud Platform",
    },
  ],
  datas: [
    {
      image: "Image/bigdata/spring.png",
      description: "Spring",
    },
    {
      image: "Image/bigdata/scala.png",
      description: "Scala",
    },
  ],
  databases: [
    {
      image: "Image/database/oracle.png",
      description: "Oracle",
    },
    {
      image: "Image/database/postgre-sql.png",
      description: "PostgreSQL",
    },
    {
      image: "Image/database/my-sql.png",
      description: "MySQL",
    },
    {
      image: "Image/database/ms-sql.png",
      description: "Microsoft SQL Server",
    },
  ],
  webdevelopments:
  [
    {
      image: "Image/development/ruby.png",
      description: "Ruby",
    },
    {
      image: "Image/development/angular.png",
      description: "AngularJS",
    },
    {
      image: "Image/development/react.png",
      description: "React",
    },
    {
      image: "Image/development/jquery.png",
      description: "jQuery",
    },
    {
      image: "Image/development/net.png",
      description: "Microsoft ASP.NET",
    },
    {
      image: "Image/development/python.png",
      description: "Python",
    },
    {
      image: "Image/development/php.png",
      description: "PHP",
    },
    {
      image: "Image/development/js.png",
      description: "JavaScript",
    },
    {
      image: "Image/development/node.png",
      description: "NodeJS",
    },
    {
      image: "Image/analytics/c-sharp.png",
      description: "C sharp",
    },
    {
      image: "Image/analytics/c.png",
      description: "C++",
    },
    {
      image: "Image/analytics/java.png",
      description: "Java",
    },
  ],
  projects: [
    {
      tag: "React",
      image: "Image/post/1.png",
      title: "This is React Project",
      caption: "Short description",
      description: "This My first React project, visit my project",

      links: [
        { link: "https://www.google.com", icon: <YouTube /> },
        { link: "https://www.google.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "WordPress",
      image: "Image/post/2.png",
      title: "This is WorPress Project",
      caption: "Short description",
      description: "This My first React project,  visit my project",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Asp.Net",
      image: "Image/post/3.png",
      title: "This is Html Project",
      caption: "Short description",
      description: "This My first React project, visit my project",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
    {
      tag: "Python",
      image: "Image/post/4.png",
      title: "Python Database Project",
      caption: "Short description",
      description: "Our first python project, visit Our project",
      links: [
        { link: "https://www.youtube.com", icon: <YouTube /> },
        { link: "https://www.github.com", icon: <GitHubIcon /> },
        { link: "https://www.google.com", icon: <Language /> },
      ],
    },
  ],
};
export default resumeData;
