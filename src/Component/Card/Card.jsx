import React from "react";
import "./Card.modules.css";

function Card({ title, image, projectUrl }) {
  const handleViewProject = (e) => {
    e.stopPropagation();
    if (projectUrl) {
      window.open(projectUrl, "_blank");
    }
  };

  return (
    <div className="card">
      <h1>{title}</h1>
      <div className="hovercard">
        <img src={image} alt={title} />
        <button className="view-project-btn" onClick={handleViewProject}>
          View Project
        </button>
      </div>
    </div>
  );
}

export default Card;
