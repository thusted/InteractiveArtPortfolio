import React from "react";

//Import components
import Slider from "../Slider";

function Modal ({id, title, modalDescription, imageArray, tech, links}) {
  if(tech && links){
    return (
      <div id={id} className="modal modal-fixed-footer">
      <div className="modal-content">
        <div>
          <h4 className="text-center">{title}</h4>
          <p>{modalDescription}</p>
          <br/>

          <Slider imageArray={imageArray}/>
          <br/>

          <h5>Technologies Used</h5>
            {tech.join(", ")}
          <br/><br/>
      
          <h5>Links</h5>
            {links.map((link) => (
              <div key={link}>
                <a href={link}>{link}</a>
                <br/>
              </div>
            ))}
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" className="modal-close waves-effect waves-green btn-flat">x</a>
      </div>
    </div>
    )
  } else {
    return <div>Placeholder</div>
  };
};

export default Modal;