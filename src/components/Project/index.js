import React from "react";
import Modal from "../Modal";

//Import css
import "./style.css";

function Project ({href, id, className, imgSrc, title, description, modalDescription, imageArray, tech, links}) {
  return (
    <div className={className}>
      <a className="modal-trigger" href={href}>
        <div className="card hoverable">
          <div className="card-image">
            <img src={imgSrc} alt="cardImg"/>
          </div>
          <div className="card-content">
            <p><b>{title}</b> {description}</p>
          </div>
        </div>
      </a>
      <Modal id={id} title={title} modalDescription={modalDescription} imageArray={imageArray} tech={tech} links={links}/>
    </div>
  );
};

export default Project;