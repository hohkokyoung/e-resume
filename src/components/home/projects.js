import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithubSquare,
  faInstagramSquare,
} from "@fortawesome/free-brands-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./projects.css";
import $ from "jquery";

import CDSPicture1 from "assets/images/cyberbullying-detection-system/picture-1.png";
import CDSPicture2 from "assets/images/cyberbullying-detection-system/picture-2.png";
import CDSPicture3 from "assets/images/cyberbullying-detection-system/picture-3.png";
import CDSPicture4 from "assets/images/cyberbullying-detection-system/picture-4.png";
import CDSPicture5 from "assets/images/cyberbullying-detection-system/picture-5.png";
import CDSPicture6 from "assets/images/cyberbullying-detection-system/picture-6.png";
import CDSPicture7 from "assets/images/cyberbullying-detection-system/picture-7.png";
import CDSPicture8 from "assets/images/cyberbullying-detection-system/picture-8.png";

import DSRSPicture1 from "assets/images/dengue-case-report-system/picture-1.png";
import DSRSPicture2 from "assets/images/dengue-case-report-system/picture-2.png";

import AMSPicture1 from "assets/images/accommodation-management-system/picture-1.png";
import AMSPicture2 from "assets/images/accommodation-management-system/picture-2.png";
import AMSPicture3 from "assets/images/accommodation-management-system/picture-3.png";
import AMSPicture4 from "assets/images/accommodation-management-system/picture-4.png";
import AMSPicture5 from "assets/images/accommodation-management-system/picture-5.png";

import PDPicture1 from "assets/images/peach-diner/picture-1.png";
import PDPicture2 from "assets/images/peach-diner/picture-2.png";
import PDPicture3 from "assets/images/peach-diner/picture-3.png";
import PDPicture4 from "assets/images/peach-diner/picture-4.png";
import PDPicture5 from "assets/images/peach-diner/picture-5.png";

export default function Projects({ setProjectsVisible }) {
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Cyberbullying Detection System",
      description:
        "Detects cyberbullying on Malaysia using machine learning technologies.",
      carouselId: "CyberbullyingDetectionSystemCarousel",
      images: [
        CDSPicture1,
        CDSPicture2,
        CDSPicture3,
        CDSPicture4,
        CDSPicture5,
        CDSPicture6,
        CDSPicture7,
        CDSPicture8,
      ],
    },
    {
      id: 2,
      name: "Dengue Case Report System",
      description:
        "Simple report system, entirely built with functional programming concepts.",
      carouselId: "DengueCaseReportSystemCarousel",
      images: [DSRSPicture1, DSRSPicture2],
    },
    {
      id: 3,
      name: "Accommodation Management System",
      description:
        "Embracing OOP concepts to orchestrate the residents' management process.",
      carouselId: "AccommodationManagementSystemCarousel",
      images: [AMSPicture1, AMSPicture2, AMSPicture3, AMSPicture4, AMSPicture5],
    },
    {
      id: 4,
      name: "Restaurant Reservation System",
      description:
        "My first journey to a full stack system, from menu creation to reservation.",
      carouselId: "RestaurantReservationSystemCarousel",
      images: [PDPicture1, PDPicture2, PDPicture3, PDPicture4, PDPicture5],
    },
  ]);

  useEffect(() => {
   
  }, []);

  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className={
        "h-100 w-80 d-flex flex-column justify-content-center align-items-center my-0 mx-auto"
      }
    >
      <div className={"w-100 d-grid projects"}>
        {projects.map((project) => (
          <div key={project.id} className={"project cursor-pointer"}>
            <div
              id={project.carouselId}
              class="carousel slide"
              style={{ height: "160px" }}
              data-ride="carousel"
              // data-interval="false"
            >
              <div class="carousel-inner h-100">
                {project.images.map((image, index) => (
                  <div
                    className={
                      "h-100 rounded-1 carousel-item " +
                      (index === 0 && "active")
                    }
                  >
                    <img
                      className={"h-100 rounded-1 project-image"}
                      src={image}
                    />
                  </div>
                ))}
              </div>
            </div>
            <h5 className={"m-0 mt-3 mb-1 project-name"}>{project.name}</h5>
            <p className={"m-0 project-description"}>{project.description}</p>
          </div>
        ))}
      </div>
      <button
        className={
          "btn align-self-start mt-4 py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
        }
        onClick={() => setProjectsVisible(false)}
      >
        <FontAwesomeIcon
          className={"mr-2 cursor-pointer deg-180"}
          icon={faPlay}
        />{" "}
        Back
      </button>
    </motion.div>
  );
}
