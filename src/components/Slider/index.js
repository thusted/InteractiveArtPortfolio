import React from "react";

//Importing style
import "./style.css";

function Slider({imageArray}) {
  if(imageArray){
    return (
      <div className="slider">
        <ul className="slides">
          {imageArray.map((image) => (
            <li key={image}><img className="sliderImg" alt="sliderImg" src={image}/></li>
          ))}
        </ul>
      </div>
    )
  } else {
    return <div>Placeholder</div>
  };
};

export default Slider;