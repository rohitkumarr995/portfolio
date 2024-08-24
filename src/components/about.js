import {
  AxiosIcon,
  CSSIcon,
  GitIcon,
  GithubIcon,
  HTMLIcon,
  JavaIcon,
  JavascriptIcon,
  JestIcon,
  MongoIcon,
  MySQLIcon,
  NPMIcon,
  NextIcon,
  NodeJSIcon,
  PostmanIcon,
  ReactIcon,
  ReduxIcon,
  ReduxRouterIcon,
  SassIcon,
  TailwindIcon,
  TypescriptIcon,
  WebpackIcon,
} from "../utils/Devicon";
import profileImg from "../assets/rohit.jpg";
import "../scss/global.css";
import { useEffect, useState } from "react";
import ArrowUp from "../utils/arrow-up";

const { Link } = require("react-router-dom");

const About = () => {
  const [opacity, setOpacity] = useState(false);
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");

  const role = "Frontend Developer";
  const Roles = role.split("");

  function displayCharacter() {
    if (index < role.length) {
      setIndex(index + 1);
      setText(text.concat(Roles[index]));
    } else if (index == role.length) {
      setIndex(0);
      setText("");
    }
  }

  useEffect(() => {
    let interval = setInterval(displayCharacter, 100);

    return () => clearInterval(interval);
  }, [index]);

  useEffect(() => {
    setOpacity(true);
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <section
        className={`fade-in ${opacity ? "visible" : ""} about-main-container`}
      >
        <div className="about-section">
          <h2 id="about-id">About</h2>
          <div className="headline">
            <p>
              Skilled professional with 2.5 years of experience in automation
              testing and ReactJS development. Expertise in designing and
              maintaining ReactJS applications and automating test scripts.
              Proven ability to improve software quality and streamline testing
              processes in Agile environments.
            </p>
          </div>

          <div className="about-sub">
            <div className="about-image-container">
              <img src={profileImg} alt="profile image" />
            </div>
            <div className="about-details-container">
              <div className="title">
                <h2 className="about-title">Frontend Developer</h2>
                <p className="description">
                  I am a passionate <span id="profile-role">{text}</span>.
                </p>
                <div className="personal-details">
                  <div className="detail-1">
                    <ul>
                      <li>
                        <span>Birthday</span> : 10 April 1995
                      </li>
                      <li>
                        <span>Website</span> :{" "}
                        <Link
                          to={"https://myportfolio-rohit-weld.vercel.app/home"}
                        >
                          Visit Me
                        </Link>
                      </li>
                      <li>
                        <span>Phone</span> : +91-7906916680
                      </li>
                      <li>
                        <span>City</span> : Agra, Uttar Pradesh
                      </li>
                    </ul>
                  </div>
                  <div className="detail-2">
                    <ul>
                      <li>
                        <span>Age</span> : 29
                      </li>
                      <li>
                        <span>Degree</span> : Bechelor of Technology
                      </li>
                      <li>
                        <span>Email</span> : rkrs227@gmail.com
                      </li>
                      <li>
                        <span>Freelance</span> : Available
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="skills-section">
          <h2>SKILLS</h2>
          <div className="headline">
            <p>
              I am a Frontend Developer with a solid foundation in JavaScript,
              ES6, TypeScript and Java. I have developed strong skills in
              front-end technologies like ReactJS, NextJS, HTML5, CSS3, Tailwind
              CSS, and SASS/SCSS. Additionally, I have a good understanding of
              SQL for efficient data management. I am familiar with version
              control using GitHub and testing tools like Jest and Postman.
            </p>
          </div>
          <div className="skills-containers">
            <div className="skills-container-tier">
              <span>
                <HTMLIcon />
              </span>
              <span>
                <CSSIcon />
              </span>
              <span>
                <SassIcon />
              </span>
              <span>
                <TailwindIcon />
              </span>
              <span>
                <JavascriptIcon />
              </span>
            </div>
            <div className="skills-container-tier">
              <span>
                <TypescriptIcon />
              </span>
              <span>
                <JavaIcon />
              </span>
              <span>
                <ReactIcon />
              </span>
              <span>
                <ReduxIcon />
              </span>
              <span>
                <ReduxRouterIcon />
              </span>
            </div>
            <div className="skills-container-tier">
              <span>
                <AxiosIcon />
              </span>
              <span>
                <NodeJSIcon />
              </span>
              <span>
                <MongoIcon />
              </span>
              <span>
                <NextIcon />
              </span>
              <span>
                <WebpackIcon />
              </span>
              <span>
                <JestIcon />
              </span>
            </div>
            <div className="skills-container-tier">
              <span>
                <MySQLIcon />
              </span>
              <span>
                <PostmanIcon />
              </span>
              <span>
                <GitIcon />
              </span>
              <span>
                <GithubIcon />
              </span>
              <span>
                <NPMIcon />
              </span>
            </div>
          </div>
        </div>
      </section>
      <ArrowUp />
    </>
  );
};

export default About;
