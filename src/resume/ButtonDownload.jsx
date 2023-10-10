import React from "react";
import Resume from "./Resume/resume.pdf";
import "../styles/style-buttonDownload.css";

const ButtonDownload = () => {
  return (
    <div className="button-wrapper">
      <a href={Resume} download>
        <button className="button s-button">Resume</button>
      </a>
      <a href="mailto:farhanaditya688@gmail.com">
        <button className="button e-button">Contact</button>
      </a>
    </div>
  );
};

export default ButtonDownload;
