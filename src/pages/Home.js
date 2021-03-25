import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

//Import css
import "./pageStyle.css";

//Import images
import Dollhouse1 from "../images/dollhouse1.jpg";
import Me from "../images/me.png";
import Dollhouse2 from "../images/dollhouse2.jpg";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import Dollhouse3 from "../images/dollhouse3.jpg";
import Dollhouse from "../images/dollhouse.jpeg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseDesert from "../images/dollhouseDesert.jpeg";
import DollhouseHeart from "../images/dollhouseHeart.jpeg";
import DollhousePig from "../images/dollhousePig.jpeg";
import DollhouseTable from "../images/dollhouseTable.jpeg";

//Import components
import Header from "../components/Header";
import Project from "../components/Project";
import Project2 from "../components/Project2";

//Image Arrays
const dollhouseImages = [Dollhouse, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];

function Home() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  const composeEmail = () => {
    window.open(`mailto:tiana.husted@gmail.com`);
  };
    
  return (
    <div>
      <Header title="TIANA HO'OLANA HUSTED"/>
      <br/>

      <div id="index-banner" className="parallax-container">
        <div className="parallax"><img src={Dollhouse1} alt="Unsplashed background img 1"/></div>
      </div>

      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col s12 center">
              <h3><i className="mdi-content-send brown-text"></i></h3>
              <h4>ABOUT</h4>
              <div className="row">
                <div className="col s12 m8 l8">
                  <p className="left-align light">Tiana Husted is an interactive installation artist, electroacoustic music composer, and sound designer based out of Eugene, Oregon. She received her Bachelor’s degree in Music Technology from the University of Oregon where she focused on creating both aurally and visually immersive environments through sensor-based art. This was the genesis of her fascination with stimulating the senses.
                  <br/><br/>
                  In 2018, she co-founded the all female-led collective, House of Strange Rituals. With this collective, she began working on large-scale installations and in 2019 was awarded the Black Rock City Honoraria grant by Burning Man. House of Strange Rituals built “The Dollhouse,” a life-size two-story interactive Victorian home, equipped with four rooms. Each room had interactive various elements to encourage participants to dive in to the narrative being told by the artists. Tiana has also shown work across Oregon at events such as Wilsonville Festival of Arts (2018), Manual Experience at the Hult Center (2020), and BEAM (2020).
                  <br/><br/>
                  Her work is rooted deeply in the belief that technology functions as a pivotal element in creating multi-sensory experiences. She is committed to making art that electrifies the senses, creating artistic opportunities that challenge one-sided paradigms such as visual art simply meant to be looked at or musical performances simply meant to be listened to. She achieves this by calling upon the participation of users to truly bring a piece to life, and Tiana is dedicated to continually fostering this relationship in her work.</p>
                </div>
                <div className="col s12 m4 l4">
                  <img id="me" src={Me} alt="me"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax"><img src={Dollhouse2} alt="Unsplashed background img 2"/></div>
      </div>

      <div className="container">
        <div className="section">
          <Header title="RECENT WORK"/>
          <br/>
          
          <div className="row">
            <div className="col s12 m12 l12">
              <Project2 href="#modal2" id="modal2" imgSrc={DollhouseBack} title="The Dollhouse" description="is a two story, lifesize, interactive house, modeled after a turn of the century Victorian home. Comissioned for and featured at Burning Man 2019." modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>

              <button className="btn-large hoverable">
                <Link
                  style={{color:"white"}} 
                  to="/interactiveart"
                  className={window.location.pathname === "/interactiveart" ? "nav-link active" : "nav-link"}
                >
                  ALL INTERACTIVE ART PROJECTS
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="parallax-container valign-wrapper">
        <div className="parallax"><img src={Dollhouse3} alt="Unsplashed background img 3"/></div>
      </div>
    </div>
  );
};

export default Home;