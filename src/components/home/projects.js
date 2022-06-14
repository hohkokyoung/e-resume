import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Navigation, Pagination } from 'swiper';

import { motion } from "framer-motion";
import "./projects.css";
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

SwiperCore.use([Autoplay, Navigation, Pagination]);


export default function Projects({ setProjectsVisible }) {
  const onInit = (Swiper, ref) => {
    ref.current = Swiper;
  };
  const projectModalSwiper = React.useRef();
  const projectModalSwiperOnInit = (Swiper) => {
    projectModalSwiper.current = Swiper;
  }
  const [projects, setProjects] = useState([
    {
      id: 1,
      name: "Cyberbullying Detection System",
      description:
        "Detects cyberbullying on Malaysia using machine learning technologies.",
      detailedDescription: "This system scrape, classify, calculate and illustrate cyberbullying tweets in interactive graphs on the website, including bar and map chart.",
      ref: React.useRef(),
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
      techStack: ["Matplotlib", "Scikit-learn", "Keras", "React", "HTML", "CSS", "JavaScript", "Flask", "MySQL", "(Experimented with MongoDB)"]
    },
    {
      id: 2,
      name: "Dengue Case Report System",
      description:
        "Simple report system, entirely built with functional programming concepts.",
      ref: React.useRef(),
      carouselId: "DengueCaseReportSystemCarousel",
      images: [DSRSPicture1, DSRSPicture2],
      techStack: ["Java"]
    },
    {
      id: 3,
      name: "Accommodation Management System",
      description:
        "Embracing OOP concepts to orchestrate the residents' management process.",
      detailedDescription: "This system allows the management users to record residents accommodating as well as the payments made.",
      ref: React.useRef(),
      carouselId: "AccommodationManagementSystemCarousel",
      images: [AMSPicture1, AMSPicture2, AMSPicture3, AMSPicture4, AMSPicture5],
      techStack: ["Java", "SQL Server"]
    },
    {
      id: 4,
      name: "Restaurant Reservation System",
      description:
        "My first journey to a full stack system, from menu creation to reservation.",
      detailedDescription: "This system enables reservation booking system for restaurants, came with customizable menu as well!",
      ref: React.useRef(),
      carouselId: "RestaurantReservationSystemCarousel",
      images: [PDPicture1, PDPicture2, PDPicture3, PDPicture4, PDPicture5],
      techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"]
    },
  ]);
  const [project, setProject] = useState(null);

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
          <div 
            key={project.id} 
            className={"project cursor-pointer"} 
            onMouseEnter={() => {project.ref.current.autoplay.start()}} 
            onMouseLeave={() => {project.ref.current.autoplay.stop()}} 
            onClick={() => {setProject(project);}} 
            data-toggle="modal" 
            data-target="#projectModal"
          >
            <Swiper
              id={project.carouselId}
              modules={[Autoplay]}
              // autoplay={false | {delay: 1000}}
              autoplay={false}
              speed={300}
              loop={true}
              onInit={(Swiper) => {onInit(Swiper, project.ref)}}
              style={{ height: "160px" }}
            >
              <div className="carousel-inner h-100">
                {project.images.map((image, index) => (
                  <SwiperSlide
                    data-swiper-autoplay="1500"
                    className={
                      "h-100 rounded-1"
                    }
                  >
                    <img
                      className={"h-100 rounded-1 project-image"}
                      src={image}
                    />
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
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
      <div className="modal fade" id="projectModal" tabindex="-1" role="dialog" aria-hidden="true">
        <div className="w-100 h-100 modal-dialog" role="document">
        <div class="modal-content d-flex justify-content-center align-items-center h-100">
          {project && <div className="w-80 dark-bg-color modal-body-content d-flex">
            <div className={"w-50 d-flex flex-column justify-content-between"}>
              <div>
                <h1 className={"project-name"}>{project.name}</h1>
                <p className={"py-4 m-0 project-description project-detail-description"}>{project.description} {project.detailedDescription}</p>
                <p className={"py-4 m-0 project-detail-tech-stack"}>Tech Stack: {project.techStack.join(", ")}</p>
              </div>
              <button
                className={
                  "btn align-self-start mt-4 py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
                }
                type="button"
                data-dismiss="modal"
              >
                <FontAwesomeIcon
                  className={"mr-2 cursor-pointer deg-180"}
                  icon={faPlay}
                />{" "}
                Back
              </button>
            </div>
            <div className={"w-50 d-flex align-items-center"}>
              <Swiper
                  modules={[Autoplay, Navigation, Pagination]}
                  pagination={false}
                  navigation={true}
                  autoplay={false}
                  speed={300}
                  loop={true}
                  observer={true}
                  observeParents={true}
                  onInit={(Swiper) => projectModalSwiperOnInit(Swiper)}
                >
                  {project.images.map(image => <SwiperSlide
                      className={
                        "h-100 w-100 rounded-1"
                      }
                    >
                      <img
                        className={"h-100 w-100 rounded-1 project-image"}
                        src={image}
                      />
                    </SwiperSlide>)}
              </Swiper>
            </div>
          </div>}
          </div>
      </div>
    </div>
    </motion.div>
  );
}
