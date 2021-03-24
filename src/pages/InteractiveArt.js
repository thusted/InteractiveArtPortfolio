import React, { useEffect } from "react";
import M from "materialize-css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import MovingDolls from "../images/movingDolls.jpeg";
import MovingDollsCabinet from "../images/movingDollsCabinet.jpeg";
import MovingDollsGallery from "../images/movingDollsGallery.jpeg";
import Dollhouse from "../images/dollhouse.jpeg";
import DollhouseDark from "../images/dollhouseDark.jpeg";
import DollhouseBack from "../images/dollhouseBack.jpeg";
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
import LumenCordis from "../images/lumenCordis.jpeg";
import LumenCordisClose from "../images/lumenCordisClose.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";
import Project2 from "../components/Project2";


//Image Arrays
const movingDollsImages = [MovingDolls, MovingDollsCabinet, MovingDollsGallery];
const dollhouseImages = [Dollhouse, DollhouseDark, DollhouseBack, DollhouseDesert, DollhouseHeart, DollhousePig, DollhouseTable];
const sonicStepsImages = [SonicSteps, SonicKids, SonicTallKid, SonicBuild, SonicBuild2];
const particlesImages = [Particles, ParticleBoxes, ParticlesCircuit];
const binariesImages = [Binaries, BinariesClose, BinariesMakey, BinariesWall, BinariesWiring];
const lumenImages = [LumenCordis, LumenCordisClose];

function InteractiveArt() {
  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
    AOS.init();
  });
    
  return (
    <div>
      <Header title="INTERACTIVE ART" subtitle="PAST PROJECTS"/>
      <br/>

      <div className="container">
        <div className="section">
          <div className="row">
            <Project2 href="#modal14" id="modal14" className="col s12 m4 l4" imgSrc={LumenCordis} title="Lumen Cordis" description="is an interactive installation where participants can step on a force sensitive resistor to trigger the sound of a heartbeat. Comissioned for and featured at BEAM 2020." modalDescription="“Lumen Cordis” is an interactive installation where participants can step on a force sensitive resistor to trigger the sound of a heartbeat. The amplitude of that sound is then translated to brightness values that you see in the LEDs, illuminating the panes of etched glass. Each pane of glass has a different segmented part of an anatomical heart. When properly aligned by the participant, it creates one dimensional image." imageArray={lumenImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Ableton Live", "LEDs", "Custom-Made Force Sensitive Resistor"]} links={["https://www.instagram.com/p/CG2pYYIAaLN/"]}/>

            <Project2 href="#modal9" id="modal9" className="col s12 m4 l4" imgSrc={MovingDolls} title="The Moving Dolls" description="is a robotics piece inspired by the rise of Spiritualism movement at the turn of the 19th century. Featured at Jacobs Gallery for Manual Experience, 2020." modalDescription="“The Moving Dolls” is a robotics piece inspired by the rise of Spiritualism movement at the turn of the 19th century. Featured at Jacobs Gallery for Manual Experience exhibition, 2020. This piece utilized facial recognition software (OpenCV) to track the movement of participants, relaying that information to servo motors sewn into the bodies of thirteen dolls on a shelf." imageArray={movingDollsImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "OpenCV", "Servo Motors", "Relay Modules"]} links={["https://vimeo.com/452711450"]}/>

            <Project2 href="#modal10" id="modal10" className="col s12 m4 l4" imgSrc={DollhouseBack} title="The Dollhouse" description="is a two story, lifesize, interactive house, modeled after a turn of the century Victorian home. Comissioned for and featured at Burning Man 2019." modalDescription="Modeled after a turn of the century Victorian home, The Dollhouse was a piece comissioned for and featured at Burning Man 2019. The back side of the home had the illusion of being completely exposed to open playa, but was enclosed with clear acrylic paneling. This allowed citizens of Black Rock City to see the illuminated structure, and the participants within, from afar. There are two stories, each with two rooms, conventional to the Victorian era: ballroom, kitchen, bathroom, and bedroom. Art pieces in the home include photographs and paintings of a family long past, ghostly porcelain dolls, oddities, remnants of a seance gone wrong, an infinity mirror, and window etchings, all of which react to human touch and/or presence. We hoped to create an ethereal world on playa, captivating and enticing people to play and discover more secrets within." imageArray={dollhouseImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Kyma", "MadMapper", "Capacitive Touch Sensors","Servo Motors", "GameTrak", "PPG Heart Sensor", "Relay Modules"]} links={["https://www.youtube.com/watch?v=W9TY_xQfr4Y&t=23s", "https://www.youtube.com/watch?v=FfcdDc0tSdU"]}/>
          </div>
          
          <div className="row">
            <Project2 href="#modal11" id="modal11" className="col s12 m4 l4" imgSrc={SonicSteps} title="Sonic Steps" description="is a sound-based installation where participants were welcomed to walk across a grid of stepping stones, each triggering a different sound. Commissioned for and featured at Wilsonville Festival of Arts 2018." modalDescription="Comissioned for and featured at Wilsonville Festival of Arts 2018. Sonic Steps is a sound-based installation where participants were welcomed to walk across a grid of stepping stones, each triggering a different sound. As more would people join, they beame a part of a collective, improvisatory composition, combining different sonic textures through movement." imageArray={sonicStepsImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Ableton Live", "Force Sensitive Resistors"]} links={["https://vimeo.com/301550134"]}/>

            <Project2 href="#modal12" id="modal12" className="col s12 m4 l4" imgSrc={Particles} title="Particles" description="is a visual representation of the human voice in the form of animated particles. These particles are visualized through projection mapping onto a an arrangement of spray-painted boxes." modalDescription="Particles is a visual representation of the human voice in the form of animated particles. These particles are visualized through projection mapping onto an arrangement of spray-painted boxes. The custom-made interface allows the users to take a short audio sample of their own voice that is immediately sent to a granular synthesizer. The parameters of the synthesizer are also controlled in real-time by the users. Original code for animation was made by Amazing Max Stuff." imageArray={particlesImages} tech={["Arduino Uno", "Arduino IDE", "MaxMSP", "Ableton Live", "MadMapper", "Force Sensitive Resistors", "Adafruit 9-DOF"]} links={["https://vimeo.com/301583230"]}/>

            <Project2 href="#modal13" id="modal13" className="col s12 m4 l4" imgSrc={Binaries} title="Binaries" description="is an interactive painting, using capacitive touch sensors to trigger sound. Featured in Lane Community College's Music Technology Lab in the Spring term of 2015." modalDescription="Binaries is an interactive painting, using capacitive touch sensors that trigger sound. With juxtaposing sources used for the audio samples (all pulled from nature) as well as opposing color schemes, Tori Pope and Tiana Husted hoped to create an immersive experience that had an dichotomous feel. The artists wanted to challenge traditional paradigms of visual art by encouraging participants to not merely look, but also touch the work." imageArray={binariesImages} tech={["MakeyMakey Microprocessor", "Ableton Live", "Leap Motion", "GECO"]} links={["https://vimeo.com/301554923"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveArt;
