import React from "react";
import Modal from "../Modal";

//Import css
import "./style.css";

function Project2 ({href, id, className, imgSrc, title, description, modalDescription, imageArray, tech, links}) {
  return (
      <div className={className}>
        <a className="modal-trigger" href={href}>
          <div className="imageContainer">
            <img className="image" src={imgSrc} alt="img"/>
            <div className="overlay">
              <div className="text">{title}</div>
            </div>
          </div>
        </a>
        <Modal id={id} title={title} modalDescription={modalDescription} imageArray={imageArray} tech={tech} links={links}/>
    </div>
  );
};

export default Project2;