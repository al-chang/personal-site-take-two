import React from "react";
import { Helmet } from "react-helmet";
import styled from "styled-components";
import About from "../components/About";
import ContactBar from "../components/ContactBar";
import Experience from "../components/Experience";
import Header from "../components/Header";
import Hero from "../components/Hero";
import WorkExperience from "../components/TimeLine";
import "../index.css";

const StyledContactBar = styled(ContactBar)`
  position: fixed;
  bottom: 0;
  left: 15px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const IndexPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&family=Montserrat:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://kit.fontawesome.com/cda309cb6a.js"
          crossOrigin="anonymous"
        ></script>
      </Helmet>
      <Header />
      <Hero />
      <About />
      <Experience />

      {/* @ts-expect-error */}
      <StyledContactBar />
    </>
  );
};

export default IndexPage;
