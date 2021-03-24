import React, { useEffect } from "react";
import M from "materialize-css";

// AOS
import AOS from "aos";
import "aos/dist/aos.css";

// Importing images
import Alertify from "../images/alertify.jpeg";
import AlertifyLogin from "../images/alertifyLogin.jpeg";
import AlertifySignIn from "../images/alertifySignIn.jpeg";
import AlertifySignUp from "../images/alertifySignUp.jpeg";
import AlertifyTracker from "../images/alertifyTracker.jpeg";
import Burger from "../images/burgerApp.jpeg";
import JobSearch from "../images/jobSearch.jpeg";
import JobSearchContact from "../images/jobSearchContact.jpeg";
import JobSearchHome from "../images/jobSearchHome.jpeg";
import EmployeeSummary from "../images/employeeSummary.jpeg";
import WeatherDashboard from "../images/weatherDashboard.jpeg";
import EmployeeDirectory from "../images/employeeDirectory.jpeg";
import Advotecate from "../images/advotecate.jpeg";
import AdvotecateEvents1 from "../images/advotecateEvents1.jpeg";
import AdvotecateEvents2 from "../images/advotecateEvents2.jpeg";
import AdvotecateLogin from "../images/advotecateLogin.jpeg";
import AdvotecateProfile from "../images/advotecateProfile.jpeg";

// Importing components
import Project from "../components/Project";
import Header from "../components/Header";
import Project2 from "../components/Project2";

//Image arrays
const alertifyImages = [Alertify, AlertifyLogin, AlertifySignIn, AlertifySignUp, AlertifyTracker];
const jobSearchImages = [JobSearch, JobSearchContact, JobSearchHome];
const advotecateImages = [Advotecate, AdvotecateLogin, AdvotecateProfile, AdvotecateEvents1, AdvotecateEvents2];

function WebDev() {
  AOS.init();

  useEffect(() => {
    const elems = document.querySelectorAll('.slider');
    M.Slider.init(elems);
    M.AutoInit();
  })

  return (
    <div>
      <Header title="WEB DEVELOPMENT" subtitle="PAST PROJECTS"/>
      <br/>

      <div className="container">
        <div className="section">
          <div className="row">
            <Project2 href="#modal15" id="modal15" className="col s12 m4 l4" imgSrc={Advotecate} title="AdVOTEcate" description="is your advocate to your voting needs! Our app shows users how to register to vote, where the nearest polls are, sends text reminders near voting dates, and provides information of how to vote by mail." modalDescription="AdVOTEcate is your advocate to your voting needs! Our app shows users how to register to vote, where the nearest polls are, sends text reminders near voting dates, and provides information of how to vote by mail." imageArray={advotecateImages} tech={["Javascript", "React", "Express", "Axios", "Node", "MongoDB", "Material UI", "Google Maps API", "Passport", "Quick Easy SMS API", "HTML", "CSS"]} links={["https://github.com/thusted/adVOTEcate", "https://www.youtube.com/watch?v=7EO6hS_wm4g"]}/>

            <Project2 href="#modal3" id="modal3" className="col s12 m4 l4" imgSrc={EmployeeDirectory} title="Employee Directory" description="is an application that creates a directory of employees with React." modalDescription="Employee Directory creates an employee directory with React. Users are able to filter employees by typing in names as well as sort employees alphabetically by name, country, or email." imageArray={[EmployeeDirectory]} tech={["React", "JavaScript", "HTML", "CSS"]} links={["https://ancient-thicket-95619.herokuapp.com/", "https://github.com/thusted/Employee_Directory"]}/>

            <Project2 href="#modal4" id="modal4" className="col s12 m4 l4" imgSrc={Alertify}title="Alertify" description="is an application that can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker." modalDescription="Alertify can provide users with additional security in case of an emergency. If something happened and in need of an immediate rescue, send an alert with Alertify mobile tracker. User will sign up to create an account. Once created, they can login to provide an emergency contact to be alerted if an emergency situation. Within their login, they have a red button to press (Alertify) that sends out a text to their contact with current location to be found with." imageArray={alertifyImages} tech={["HTML", "CSS","JavaScript", "JQuery", "NodeJS", "Sequelize","Passport","BCrypt", "Quick Easy SMS API"]} links={["https://alertifynow.herokuapp.com/", "https://github.com/thusted/Alertify"]}/>
          </div>
          
          <div className="row">
            <Project2 href="#modal5" id="modal5" className="col s12 m4 l4" imgSrc={Burger} title="Burgers!" description="is an application allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM." modalDescription="Burgers! allows users to log burgers with MySQL, Node, Express, Handlebars, and a homemade ORM. It follows the MVC design pattern, utilizing Node and MySQL to query and route data in the application, and Handlebars to generate the HTML." imageArray={[Burger]} tech={["HTML", "CSS", "JavaScript", "Node", "Express","Handlebars"]} links={["https://calm-atoll-81003.herokuapp.com/", "https://github.com/thusted/burger"]}/>
            
            <Project2 href="#modal6" id="modal6" className="col s12 m4 l4" imgSrc={JobSearch} title="Software Developers Job Search" description="is an application designed for developers out of school who are looking for jobs." modalDescription="The Software Developers Job Search application was designed for developers out of school who are looking for jobs. In addition to job listings, the application also provides news articles about the company so developers can make a more informed decision about where they work." imageArray={jobSearchImages} tech={["HTML", "CSS","JavaScript", "GitHub Jobs API", "GNews API", "Zip Code API", "Fomantic UI", "Lodash", "JQuery"]} links={["https://thusted.github.io/P1_JobSearch/", "https://github.com/thusted/P1_JobSearch"]}/>

            <Project2 href="#modal7" id="modal7" className="col s12 m4 l4" imgSrc={EmployeeSummary} title="Employee Summary" description="is a command-line application to generate an HTML file displaying information, based on user input." modalDescription="This is a command-line application that generates an HTML file that displays information on an engineeering team based on user input. This application uses the Inquirer package to prompt the user to fill out information regarding their engineering team. It will first prompt the user to enter information regarding the team's manager (the user) and then will give the user the opportunity to add engineers and interns to the team." imageArray={[EmployeeSummary]} tech={["JavaScript", "NodeJS"]} links={["https://github.com/thusted/TemplateEngine_EmployeeSummary", "https://www.youtube.com/watch?v=Sq2YE3__nfI&feature=youtu.be"]}/>
          </div>
          
          <div className="row">
            <Project2 href="#modal8" id="modal8" className="col s12 m4 l4" imgSrc={WeatherDashboard} title="Weather Dashboard" description="is an application designed to show the weather outlook for any given city. When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history." modalDescription="The Weather Dashboard application was designed to show the weather outlook for any given city. When a user searches for a city, they are presented with current and future conditions for that city and that city is added to the search history. When they view current weather conditions for that city, then they are presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index. When they view the UV index, they presented with a color that indicates whether the conditions are favorable, moderate, or severe. When they view future weather conditions for that city, then they are presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity. When they click on a city in the search history then they are again presented with current and future conditions for that city. When they open the weather dashboard, they are presented with the last searched city forecast." imageArray={[WeatherDashboard]} tech={["HTML", "CSS", "JavaScript", "JQuery", "Open Weather Map API"]} links={["https://thusted.github.io/Server-Side-APIs-Weather-Dashboard/#", "https://github.com/thusted/Server-Side-APIs-Weather-Dashboard"]}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebDev;