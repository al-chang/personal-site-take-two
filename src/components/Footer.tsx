import React from "react";
import { ResumeLink } from "../util/Util";

const Footer: React.FC = () => {
  return (
    <>
      <div style={{ height: "100px" }}>
        <a href={ResumeLink} target="_blank">
          <i className="fas fa-user"></i>
        </a>
        <a href="mailto:chang.alex@northeastern.edu">
          <i className="fas fa-envelope"></i>
        </a>
        <a href="https://www.linkedin.com/in/al-chang-" target="_blank">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.github.com/al-chang" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </>
  );
};

export default Footer;
