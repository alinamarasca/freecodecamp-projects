import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { Link } from "react-router-dom";

function Project({ title, link, ffcLink, codepenId }) {
  return (
    <div className="project">
      <h3>
        <Link to={link} className="view-project-link">
          {title}
        </Link>
      </h3>

      <a target="_blank" href={ffcLink} rel="noreferrer">
        freeCodeCamp description <FaExternalLinkAlt />
      </a>
      <a href={`https://codepen.io/alinamarasca/pen/${codepenId}`}>
        View on CodePen <FaExternalLinkAlt />
      </a>
    </div>
  );
}

export default Project;
