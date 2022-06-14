import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faQuoteLeft,
  faQuoteRight,
  faPhoneSquare,
  faEnvelopeSquare,
  faMedal,
  faTools,
  faCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import profile from "assets/images/profile.jpg";
import "./index.css";
import Skills from "components/home/skills";
import Certifications from "components/home/certifications";
import Projects from "components/home/projects";
import { themes as themesConfig } from 'config';

export default function Home() {
  const [aboutMeButtonClass, setAboutMeButtonClass] = useState(
    "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
  );
  const [aboutMePlayIconClass, setAboutMePlayIconClass] = useState(
    "ml-2 play-icon cursor-pointer"
  );
  // The use state for theme counter starts from one because 0 is the default theme,
  // so the next change should be the second theme.
  const [themeCounter, setThemeCounter] = useState(1);
  const [themes, setThemes] = useState(themesConfig);
  const [skillsVisible, setSkillsVisible] = useState(false);
  const [certificationsVisible, setCertificationsVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);

  const toggleAboutMeButton = () => {
    if (aboutMeButtonClass.includes("active")) {
      setAboutMeButtonClass(
        "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
      );
      setAboutMePlayIconClass("ml-2 play-icon cursor-pointer");
    } else {
      setAboutMeButtonClass(
        "btn py-2 px-3 primary-border-color font-weight-bold actions active"
      );
      setAboutMePlayIconClass(
        "ml-2 play-icon cursor-pointer dark-color deg-90"
      );
    }
  };

  useEffect(() => {
    setAboutMeButtonClass(
      "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
    );
    setAboutMePlayIconClass("ml-2 play-icon cursor-pointer");
  }, [skillsVisible, certificationsVisible, projectsVisible]);

  const changeTheme = () => {
    Object.keys(themes[themeCounter]).forEach((key, index) => {
      document.documentElement.style.setProperty(key, themes[themeCounter][key]);
    })
   
    if (themeCounter === (themes.length - 1)) {
      setThemeCounter(0);
      return;
    }

    setThemeCounter(themeCounter + 1);
  };

  return (
    <div className={"row m-0 main"}>
      <div className={"col-md-5 col-lg-5 p-0 profile"}>
        <img src={profile} alt="" />
        {/* <div className={"profile-mask"}></div> */}
      </div>
      <div className={"col-md-7 col-lg-7 p-0 introduction dark-bg-color"}>
        <div className={"d-none d-md-flex d-lg-flex play"}>
          <FontAwesomeIcon
            className={"play-icon cursor-pointer"}
            icon={faPlay}
          />
        </div>
        <div className={"position-absolute theme-picker"}>
          {/* 
              dividing a circle into 3 parts.
              reference: https://stackoverflow.com/questions/38641653/divide-circle-into-three-parts-using-css3
              author: Ronak Patel
          */}
          <div
            className={"theme-spectrum-container cursor-pointer"}
            onClick={() => changeTheme()}
          >
            <ul className={"theme-spectrum"}>
              <li className={"theme-primary"}>
                <div></div>
              </li>
              <li className={"theme-secondary"}>
                <div></div>
              </li>
              <li className={"theme-dark"}>
                <div></div>
              </li>
            </ul>
          </div>
        </div>
        {skillsVisible && <Skills setSkillsVisible={setSkillsVisible} />}

        {certificationsVisible && <Certifications setCertificationsVisible={setCertificationsVisible} />}

        {projectsVisible && <Projects setProjectsVisible={setProjectsVisible} />}

        {!skillsVisible && !certificationsVisible && !projectsVisible ? (
          <motion.div
            layout
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={
              "h-100 w-80 d-flex flex-column justify-content-center content my-0 mx-auto"
            }
          >
            <h1 className={"title"}>Hoh Kok Young</h1>
            <div className={"d-flex align-items-center gap-3"}>
              <h4 className={"secondary-color"}>Software Engineer</h4>
              <div className={"vr"}></div>
              <h4>Coffee Enthusiast</h4>
            </div>
            <blockquote className={"mt-3 mb-2 blockquote"}>
              <p className="mb-0">
                <FontAwesomeIcon icon={faQuoteLeft} />
                <i className={"px-2"}>
                  I am by no means a talented person, but I sure damned well
                  know that hardwork will bring me where I desire.
                </i>
                <FontAwesomeIcon icon={faQuoteRight} />
              </p>
            </blockquote>
            <div className={"mt-3 mb-3 d-flex flex-wrap gap-3"}>
              <button
                type="button"
                onClick={toggleAboutMeButton}
                className={aboutMeButtonClass}
                data-toggle="collapse"
                data-target="#aboutMe"
                aria-expanded="false"
                aria-controls="aboutMe"
              >
                About Me{" "}
                <FontAwesomeIcon
                  className={aboutMePlayIconClass}
                  icon={faPlay}
                />
              </button>
              <button
                type="button"
                className={
                  "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
                }
                onClick={() => setCertificationsVisible(true)}
              >
                Certifications{" "}
                <FontAwesomeIcon
                  className={"ml-2 play-icon cursor-pointer"}
                  icon={faMedal}
                />
              </button>
              <button
                type="button"
                className={
                  "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
                }
                onClick={() => setProjectsVisible(true)}
              >
                Projects{" "}
                <FontAwesomeIcon
                  className={"ml-2 play-icon cursor-pointer"}
                  icon={faTools}
                />
              </button>
              <button
                type="button"
                className={
                  "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
                }
                onClick={() => setSkillsVisible(true)}
              >
                Skills{" "}
                <FontAwesomeIcon
                  className={"ml-2 play-icon cursor-pointer"}
                  icon={faCode}
                />
              </button>
            </div>
            <div id="aboutMe" className={"collapse"}>
              <div className={"d-flex flex-column gap-2 descriptions"}>
                <p className={"description"}>
                  &#8226; Born in 09 December 1999.
                </p>
                <p className={"description"}>
                  &#8226; Based in Selangor, Malaysia.
                </p>
                <p className={"description"}>
                  &#8226; Degree graduate at{" "}
                  <a
                    className={"dark-color text-decoration-underline"}
                    href="https://www.apu.edu.my/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Asia Pacific University (APU)
                  </a>
                  .
                </p>
                <p className={"description"}>
                  &#8226; Received First Class Honours and Best Student Award (CGPA 3.93).
                </p>
                <p className={"description"}>
                  &#8226; High fascination towards both front-end and back-end
                  development. Even higher regards for software development
                  principles adapted throughout various methodologies.
                </p>
                <p className={"description"}>
                  &#8226; Data structures, APIs, algorithms, virtualizations,
                  cloud computing, AI, IoTs. Man, these are all too interesting
                  to me.
                </p>
              </div>
            </div>
          </motion.div>
        ) : null}
        <div className={"d-flex gap-3 position-absolute contact"}>
          <a href="tel:+60123429617" target={"_blank"} rel="noreferrer">
            <p className={"social-media"}>
              <FontAwesomeIcon icon={faPhoneSquare} />
            </p>
          </a>
          <a
            href="mailto: kokyoung1520@gmail.com"
            target={"_blank"}
            rel="noreferrer"
          >
            <p className={"social-media"}>
              <FontAwesomeIcon icon={faEnvelopeSquare} />
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/hohkokyoung/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p className={"social-media"}>
              <FontAwesomeIcon icon={faLinkedin} />
            </p>
          </a>
          <a
            href="https://github.com/hohkokyoung/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p className={"social-media"}>
              <FontAwesomeIcon icon={faGithubSquare} />
            </p>
          </a>
          <a
            href="https://www.instagram.com/not_kok_young/"
            target={"_blank"}
            rel="noreferrer"
          >
            <p className={"social-media"}>
              <FontAwesomeIcon icon={faInstagramSquare} />
            </p>
          </a>
        </div>
      </div>
    </div>
  );
}
