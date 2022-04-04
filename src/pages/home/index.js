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
  return (
    <div className={"row m-0 main"}>
      <div className={"col-md-5 col-lg-5 p-0 profile"}>
        <img src={profile} />
      </div>
      <div className={"col-md-7 col-lg-7 p-0 introduction dark-bg-color"}>
        <div className={"play"}>
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
          <blockquote className={"my-4 blockquote"}>
            <p className="mb-0">
              <FontAwesomeIcon icon={faQuoteLeft} />
              <i className={"px-2"}>
                I am by no means a talented person, but I sure damned well know
                that hardwork will bring me where I desire.
              </i>
              <FontAwesomeIcon icon={faQuoteRight} />
            </p>
          </blockquote>
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
              &#8226; Data structures, APIs, algorithms, virtualizations, cloud
              computing, AI, IoTs. <br /> Man, these are all too interesting to
              me.
            </p>
          </div>
          <div className={"d-flex align-items-center gap-3 contact"}>
          <p className={"email"}>kelvinhoh1520@hotmail.com</p>
            <p className={"phone-number"}>(+60) 12-342 9617</p>
            <p className={"social-media"}><FontAwesomeIcon icon={faLinkedin} /></p>
            <p className={"social-media"}><FontAwesomeIcon icon={faGithubSquare} /></p>
            <p className={"social-media"}><FontAwesomeIcon icon={faInstagramSquare} /></p>
          </div>
        </div>
      </div>
    </div>
  );
}
