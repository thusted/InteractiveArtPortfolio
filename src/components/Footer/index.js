import React, { useEffect } from "react";

//Import css
import M from "materialize-css";

//Import css
import "./style.css";

//Import images
import Github from "../../images/github.png";
import Linkedin from "../../images/linkedin.png";
import ResumeIcon from "../../images/resumeIcon.png";
import Resume from "../../images/webdevResume.pdf";

function Footer() {
  useEffect(() => {
    M.AutoInit();
  })

  const composeEmail = (e) => {
    e.preventDefault();
    let body = document.getElementById("msgInput").value;
    const msg = `${body}`;
    window.open(`mailto:tiana.husted@gmail.com?body=${msg}`);
    document.getElementById("mail").reset();
  };

  return(
    <footer className="page-footer">
      <div id="footerContainer" className="row">
        <div className="col s12 m6 l6">
          <div className="card body" id="contactCard">
            <form id="mail">
              <div className="form-group">
                <label for="msgInput">Don't Be Shy, Say Hi! Fill out the text box to send me an email.</label>
                <textarea type="text" class="form-control" id="msgInput" rows="5"></textarea>
              </div>
              <br/>
              <button id="sendBtn" className="btn waves-effect" type="submit" name="action" onClick={composeEmail}>
                <i className="material-icons">send</i>
              </button>
            </form>
          </div>
        </div>

        <div className="col s12 m6 l6">
          <div className="pagesContainer">
            <div className="col s4 m4 l4">
              <a href="https://github.com/thusted">
                <img className="hoverable" id="github" src={Github} alt="githubImg"/>
              </a>
            </div>

            <div className="col s4 m4 l4">
              <a href="https://www.linkedin.com/in/tiana-husted-395057163/">
                <img className="hoverable" id="linkedin" src={Linkedin} alt="linkedImg"/>
              </a>
            </div>

            <div className="col s4 m4 l4">
              <a href={Resume}>
                <img className="hoverable" id="resume" src={ResumeIcon} alt="resumeImg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

