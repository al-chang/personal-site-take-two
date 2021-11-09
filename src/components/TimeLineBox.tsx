import { Link } from "gatsby";
import React from "react";
import { ExperinceBoxProps } from "../util/Util";

const ExperienceBox: React.FC<ExperinceBoxProps> = ({
  title,
  company,
  companyLink,
  startDate,
  endDate,
  description,
}) => {
  return (
    <>
      <div style={{ border: "solid red 6px", padding: "5px" }}>
        <h3>{title}</h3>
        <h4>
          <Link to={companyLink} target="_blank">
            {company}
          </Link>
        </h4>
        <p>{description}</p>
        <p>
          {startDate} - {endDate || "Present"}
        </p>
      </div>
    </>
  );
};

export default ExperienceBox;
