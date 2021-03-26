import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import M from "materialize-css";

//Import css
import "./pageStyle.css";

//Import components
import Header from "../components/Header";
import Project from "../components/Project";
import Project2 from "../components/Project2";

//Import images
import Dollhouse1 from "../images/dollhouse1.jpg";
import Me from "../images/me.png";
import Dollhouse2 from "../images/dollhouse2.jpg";
import Dollhouse3 from "../images/dollhouse3.jpg";
import Dollhouse from "../images/dollhouse.jpeg";
import MovingDolls from "../images/movingDolls.jpeg";
import MovingDollsCabinet from "../images/movingDollsCabinet.jpeg";
import MovingDollsGallery from "../images/movingDollsGallery.jpeg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseBack from "../images/dollhouseBack.jpeg";
import DollhouseBack2 from "../images/dollhouseBack2.jpeg";
import DollhouseDesert from "../images/dollhouseDesert.jpeg";
import DollhouseHeart from "../images/dollhouseHeart.jpeg";
import DollhousePig from "../images/dollhousePig.jpeg";
import DollhouseTable from "../images/dollhouseTable.jpeg";
import SonicSteps from "../images/sonicSteps.jpeg";
import SonicKids from "../images/sonicKids.jpeg";
import SonicTallKid from "../images/sonicTallKid.jpeg";
import SonicBuild from "../images/sonicBuild.jpeg";
import SonicBuild2 from "../images/sonicBuild2.jpeg";
import Particles from "../images/particlesOfTheVoice.jpeg";
import ParticleBoxes from "../images/particlesBoxes.jpeg";
import ParticlesCircuit from "../images/particlesCircuit.jpeg";
import Binaries from "../images/binaries.jpeg";
import BinariesClose from "../images/binariesClose.jpeg";
import BinariesMakey from "../images/binariesMakey.jpeg";
import BinariesWall from "../images/binariesWall.jpeg";
import BinariesWiring from "../images/binariesWiring.jpeg";
import Beat from "../images/lumenCordis.jpeg";
import BeatClose from "../images/lumenCordisClose.jpeg";
import Blink from "../images/blink.JPG";
import Blink2 from "../images/blink2.jpeg";
import Blink3 from "../images/blink3.JPG";
import Blink4 from "../images/blink4.jpg";
import Blink5 from "../images/blink5.JPG";
import Blink6 from "../images/blink6.jpeg";


//Image Arrays
const movingDollsImages = [MovingDolls, MovingDollsCabinet, MovingDollsGallery];
const dollhouseImages = [Dollhouse, DollhouseBack2, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];
const sonicStepsImages = [SonicSteps, SonicKids, SonicTallKid, SonicBuild, SonicBuild2];
const particlesImages = [Particles, ParticleBoxes, ParticlesCircuit];
const binariesImages = [Binaries, BinariesClose, BinariesMakey, BinariesWall, BinariesWiring];
const beatImages = [Beat, BeatClose];
const blinkImages = [Blink, Blink2, Blink3, Blink4, Blink5, Blink6];

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
              <h4>ABOUT ME</h4>
              <div className="row">
                <div className="col s12 m6 l6">
                  <p className="left-align light">Tiana Husted is an interactive installation artist, electroacoustic music composer, and sound designer based out of Eugene, Oregon. She received her Bachelor’s degree in Music Technology from the University of Oregon where she focused on creating both aurally and visually immersive environments through sensor-based art. This was the genesis of her fascination with stimulating the senses.
                  <br/><br/>
                  In 2018, she co-founded the all female-led collective, House of Strange Rituals. With this collective, she began working on large-scale installations and in 2019 was awarded the Black Rock City Honoraria grant by Burning Man. House of Strange Rituals built “The Dollhouse,” a life-size two-story interactive Victorian home with four rooms. Each room had interactive various elements to encourage participants to dive in to the narrative being told by the artists. 
                  <br/><br/>
                  Her work is rooted deeply in the belief that technology functions as a pivotal element in creating multi-sensory experiences. She is committed to making art that electrifies the senses, creating artistic opportunities that challenge one-sided paradigms such as visual art simply meant to be looked at or musical performances simply meant to be listened to. She achieves this by calling upon the participation of users to truly bring a piece to life, and Tiana is dedicated to continually fostering this relationship in her work.</p>
                </div>
                <div className="col s12 m6 l6">
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
          <Header title="PAST PROJECTS"/>
          <br/>

          <div className="row">
            <Project2 href="#modal7" id="modal7" className="col s12 m4 l4" imgSrc={Blink} title="Blink" modalDescription="“Blink” is a collaborative piece between House of Strange Rituals and the newly formed AHFEMME. This interactive exhibit sits at the intersection of sculpture, nature, technology, fashion, and performance.  A surrealistic depiction of the natural world that elicits wonder. Inside of this magnified ecosystem you will find felted bees, honey hives, and giant poppy pods that awaken as the public pass by. Additionally, come visit during the March and April First Friday Artwalk to witness this dreamlike universe take on another dimension. Performers, transformed into Queen bees, will inhabit the space turning this fantasy into their honeycomb home. During a time when the outside world feels overwhelming, this mesmerizing universe invites participants to look and be captured by illusion. Buzz by, it will happen in a Blink." imageArray={blinkImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "Programmable Par Can Lights and custom DMX controller made with Max/MSP", "16 Channel PWM Servo Drivers", "Servo Motors", "3D Printer"]} links={["https://vimeo.com/529084961", "https://vimeo.com/529207125"]}/>

            <Project2 href="#modal6" id="modal6" className="col s12 m4 l4" imgSrc={Beat} title="Beat" modalDescription="“Beat” is an interactive installation where participants can step on a custom-made force sensitive resistor to trigger the sound of a heartbeat. The amplitude of that sound is then translated to brightness values that you see in the LEDs, illuminating the panes of etched glass. Each pane of glass has a different segmented part of an anatomical heart. When properly aligned by the participant, it creates one dimensional image." imageArray={beatImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "Ableton Live", "LEDs", "Custom-Made Force Sensitive Resistor"]} links={["https://www.instagram.com/p/CG2pYYIAaLN/"]}/>

            <Project2 href="#modal5" id="modal5" className="col s12 m4 l4" imgSrc={MovingDolls} title="The Moving Dolls" modalDescription="“The Moving Dolls” is a robotics piece inspired by the rise of Spiritualism movement at the turn of the 19th century. Featured at Jacobs Gallery for Manual Experience exhibition, 2020. This piece utilized facial recognition software (OpenCV) to track the movement of participants, relaying that information to servo motors sewn into the bodies of thirteen dolls on a shelf." imageArray={movingDollsImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "OpenCV", "Servo Motors", "Relay Modules"]} links={["https://vimeo.com/452711450"]}/>
          </div>  

          <div className="row">
            <Project2 href="#modal4" id="modal4" className="col s12 m4 l4" imgSrc={DollhouseBack2} title="The Dollhouse" modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>
          
            <Project2 href="#modal3" id="modal3" className="col s12 m4 l4" imgSrc={SonicSteps} title="Sonic Steps" modalDescription="Comissioned for and featured at Wilsonville Festival of Arts 2018. Sonic Steps is a sound-based installation where participants were welcomed to walk across a grid of stepping stones, each triggering a different sound. As more would people join, they beame a part of a collective, improvisatory composition, combining different sonic textures through movement." imageArray={sonicStepsImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "Ableton Live", "Force Sensitive Resistors"]} links={["https://vimeo.com/301550134"]}/>

            <Project2 href="#modal2" id="modal2" className="col s12 m4 l4" imgSrc={Particles} title="Particles" modalDescription="Particles is a visual representation of the human voice in the form of animated particles. These particles are visualized through projection mapping onto an arrangement of spray-painted boxes. The custom-made interface allows the users to take a short audio sample of their own voice that is immediately sent to a granular synthesizer. The parameters of the synthesizer are also controlled in real-time by the users. Original code for animation was made by Amazing Max Stuff." imageArray={particlesImages} tech={["Arduino Uno", "Arduino IDE", "Max/MSP", "Ableton Live", "MadMapper", "Force Sensitive Resistors", "Adafruit 9-DOF"]} links={["https://vimeo.com/301583230"]}/>
          </div>

          <div className="row">
            <Project2 href="#modal1" id="modal1" className="col s12 m4 l4" imgSrc={Binaries} title="Binaries" modalDescription="Binaries is an interactive painting, using capacitive touch sensors that trigger sound. With juxtaposing sources used for the audio samples (all pulled from nature) as well as opposing color schemes, Tori Pope and Tiana Husted hoped to create an immersive experience that had an dichotomous feel. The artists wanted to challenge traditional paradigms of visual art by encouraging participants to not merely look, but also touch the work." imageArray={binariesImages} tech={["MakeyMakey Microprocessor", "Ableton Live", "Leap Motion", "GECO"]} links={["https://vimeo.com/301554923"]}/>
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