import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlay,
  faQuoteLeft,
  faQuoteRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import profile from "assets/images/profile.png";
import "./index.css";

export default function Home() {
  const [aboutMeButtonClass, setAboutMeButtonClass] = useState(
    "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold about-me"
  );
  const [aboutMePlayIconClass, setAboutMePlayIconClass] = useState("ml-2 play-icon cursor-pointer");

  const toggleAboutMeButton = () => {
    if (aboutMeButtonClass.includes("active")) {
      setAboutMeButtonClass("btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold about-me");
      setAboutMePlayIconClass("ml-2 play-icon cursor-pointer");
    } else {
      setAboutMeButtonClass("btn py-2 px-3 dark-color primary-border-color primary-bg-color font-weight-bold about-me active");
      setAboutMePlayIconClass("ml-2 play-icon cursor-pointer dark-color deg-90");
    }
  }

  return (
    <div className={"row m-0 main"}>
      <div className={"col-md-5 col-lg-5 p-0 profile"}>
        <img src={profile} />
      </div>
      <div className={"col-md-7 col-lg-7 p-0 introduction dark-bg-color"}>
        <div className={"d-none d-md-flex d-lg-flex play"}>
          <FontAwesomeIcon
            className={"play-icon cursor-pointer"}
            icon={faPlay}
          />
        </div>
        <div
          className={
            "h-100 w-75 d-flex flex-column justify-content-center content"
          }
        >
          <h1 className={"title"}>Hoh Kok Young</h1>
          <div className={"d-flex align-items-center gap-3"}>
            <h3 className={"secondary-color"}>Software Engineer</h3>
            <div className={"vr"}></div>
            <h3>Coffee Enthusiast</h3>
          </div>
          <blockquote className={"mt-4 mb-2 blockquote"}>
            <p className="mb-0">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <i className={"px-2"}>
                I am by no means a talented person, but I sure damned well know
                that hardwork will bring me where I desire.
              </i>
              <FontAwesomeIcon icon={faQuoteRight} />
            </p>
          </blockquote>
          <div className={"mt-2 mb-4"}>
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
          </div>
          <div id="aboutMe" className={"collapse"}>
            <div className={"d-flex flex-column gap-2 descriptions"}>
              <p className={"description"}>&#8226; Born in 09 December 1999.</p>
              <p className={"description"}>
                &#8226; Degree graduate at{" "}
                <a
                  className={"dark-color text-decoration-underline"}
                  href="https://www.apu.edu.my/"
                  target="_blank"
                >
                  Asia Pacific University (APU)
                </a>
                .
              </p>
              <p className={"description"}>
                &#8226; High fascination towards both front-end and back-end
                development. Even higher regards for software development
                principles adapted throughout various methodologies.
              </p>
              <p className={"description"}>
                &#8226; Data structures, APIs, algorithms, virtualizations,
                cloud computing, AI, IoTs. Man, these are all too
                interesting to me.
              </p>
            </div>
          </div>
          {/* <div className={"d-flex align-items-center gap-3 contact"}>
          <p className={"email"}>kelvinhoh1520@hotmail.com</p>
            <p className={"phone-number"}>(+60) 12-342 9617</p>
            <p className={"social-media"}><FontAwesomeIcon icon={faLinkedin} /></p>
            <p className={"social-media"}><FontAwesomeIcon icon={faGithubSquare} /></p>
            <p className={"social-media"}><FontAwesomeIcon icon={faInstagramSquare} /></p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
