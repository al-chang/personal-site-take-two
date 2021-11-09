module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "personal-site-take-two",
    author: "@al-chang",
    workExperience: [
      {
        title: "Emergency Medical Technician",
        company: "Westwood Volunteer Ambulance Corp",
        companyLink: "http://www.westwoodvolunteerems.org/",
        startDate: "February 2018",
        endDate: "May 2021",
        description: "",
        hide: true,
        imageURL: "blueport",
      },
      {
        title: "Front-end Development Co-op",
        company: "Blueport Commerce",
        companyLink: "https://www.blueport.com/",
        startDate: "July 2021",
        endDate: "Dec 2021",
        description:
          "At Blueport, I worked as a front-end development co-op, building out mobile first components in Angular and SCSS for our e-commerce platform.",
        imageURL: "blueport",
      },
      {
        title: "Software Engineer",
        company: "Code4Community",
        companyLink: "https://www.c4cneu.com/",
        startDate: "Sept 2021",
        description:
          "Code4Community is a student organization at Northeastern University with a mission to create software to empower Boston-based non-profits.",
        imageURL: "c4c",
      },
      {
        title: "Incoming Software Engineer Co-op",
        company: "PathAI",
        companyLink: "https://www.pathai.com/",
        startDate: "May 2022",
        description:
          "Incoming software engineer co-op at PathAI. Will perform full-stack web development utilizing Vue.js, Django, PostgreSQL, and Redis.",
        imageURL: "pathai",
        notStarted: true,
      },
    ],
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
