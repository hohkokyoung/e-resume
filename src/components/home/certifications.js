import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faCertificate } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import CloudPractitionerBadge from "assets/images/aws-cloud-practitioner-badge.png";
import UdemyLogo from "assets/images/udemy-logo.png";
import MicrosoftLogo from "assets/images/microsoft-logo.png";
import AWSCloudPractitionerCertificate from "assets/images/aws-cloud-practitioner-certificate.png";
import MicrosoftSQLDatabaseFundamentalsCertificate from "assets/images/sql-database-fundamentals-certificate.png";
import UdemyFlutterCertificate from "assets/images/flutter-certificate.jpg";
import "./certifications.css";
import $ from "jquery";

export default function Certifications({ setCertificationsVisible }) {
  const [certifications, setCertifications] = useState([
    {
      id: 1,
      name: "AWS Cloud Practitioner",
      date: "22 Oct 2021",
      badge: CloudPractitionerBadge,
      certificate: AWSCloudPractitionerCertificate,
      active: true,
    },
    {
      id: 2,
      name: "Flutter & Dart",
      date: "01 Nov 2020",
      badge: UdemyLogo,
      certificate: UdemyFlutterCertificate,
      active: false,
    },
    {
      id: 3,
      name: "SQL Database Fundamentals",
      date: "21 Apr 2018",
      badge: MicrosoftLogo,
      certificate: MicrosoftSQLDatabaseFundamentalsCertificate,
      active: false,
    },
  ]);
  const [selectedCertification, setSelectedCertification] = useState({
    id: null,
    name: null,
    date: null,
    active: false,
  });
  const [displayedCertifications, setDisplayedCertifications] = useState([]);

  const triggerDisplayedCertifications = (id = null) => {
    let firstDisplayedCertification,
      secondDisplayedCertifcation,
      thirdDisplayedCertification = null;
    if (id === null) {
      firstDisplayedCertification = certifications[certifications.length - 1];
      secondDisplayedCertifcation = certifications[0];
      thirdDisplayedCertification = certifications[1];
    } else {
      firstDisplayedCertification = certifications.some(
        (certification) => certification.id === id - 1
      )
        ? certifications.find((certification) => certification.id === id - 1)
        : certifications[certifications.length - 1];
      secondDisplayedCertifcation = certifications.find(
        (certification) => certification.id === id
      );
      thirdDisplayedCertification = certifications.some(
        (certification) => certification.id === id + 1
      )
        ? certifications.find((certification) => certification.id === id + 1)
        : certifications[0];
    }

    setDisplayedCertifications([
      firstDisplayedCertification,
      secondDisplayedCertifcation,
      thirdDisplayedCertification,
    ]);
    setSelectedCertification(secondDisplayedCertifcation);
  };

  useEffect(() => {
    triggerDisplayedCertifications();

    // const script = document.createElement("script");

    // script.src = "//cdn.credly.com/assets/utilities/embed.js";
    // script.async = true;

    // document.body.appendChild(script);

    // return () => {
    //   document.body.removeChild(script);
    // };
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
      <div
        className={
          "w-100 d-flex align-items-center justify-content-center gap-3 certifications"
        }
      >
        {displayedCertifications.map((certification) => (
          <motion.div
            key={certification.id}
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            layout
            className={
              "certification-badge " +
              (displayedCertifications.active ? "active" : "")
            }
            onClick={() => triggerDisplayedCertifications(certification.id)}
          >
            {certification.badge && <img className={"disable-highlight"} src={certification.badge} />}
          </motion.div>
        ))}
      </div>
      <div
        className={
          "d-flex flex-column align-items-center justify-content-center pb-3 primary-color certification-content"
        }
      >
        <h6 className={"certification-title"}>
          {selectedCertification.name}{" "}
          <a href={selectedCertification.certificate} target={"_blank"}>
            <FontAwesomeIcon
              className={"certificate-logo cursor-pointer"}
              icon={faCertificate}
              data-toggle="tooltip"
              data-placement="right"
              title="View Certificate"
            />
          </a>
        </h6>
        <p className={"secondary-color certification-date"}>
          {selectedCertification.date}
        </p>
      </div>
      <button
        className={
          "btn align-self-start mt-4 py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
        }
        onClick={() => setCertificationsVisible(false)}
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
