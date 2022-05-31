import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "framer-motion";
import "./skills.css";

export default function Skills({ setSkillsVisible }) {
  const [skills, setSkills] = useState([
    { id: 1, name: "python", aspects: ["backend"] },
    { id: 2, name: "flutter", aspects: ["frontend"] },
    { id: 3, name: "django", aspects: ["backend"] },
    { id: 4, name: "css", aspects: ["frontend"] },
    { id: 5, name: "scikit-learn", aspects: ["artificial-intelligence"] },
    { id: 6, name: "js", aspects: ["frontend"] },
    { id: 7, name: "kanban", aspects: ["software-methodology"] },
    { id: 8, name: "c++", aspects: ["backend"] },
    { id: 9, name: "react", aspects: ["frontend"] },
    { id: 10, name: "rest-api", aspects: ["api"] },
    { id: 11, name: "graphene", aspects: ["backend"] },
    { id: 12, name: "tensorflow", aspects: ["artificial-intelligence"] },
    { id: 13, name: "waterfall", aspects: ["software-methodology"] },
    { id: 14, name: "graphql", aspects: ["api"] },
    { id: 15, name: "scrum", aspects: ["software-methodology"] },
    { id: 16, name: "rad", aspects: ["software-methodology"] },
    { id: 17, name: "html", aspects: ["frontend"] },
    { id: 19, name: "matplotlib", aspects: ["artificial-intelligence"] },
    { id: 19, name: "java", aspects: ["backend"] },
    { id: 20, name: "jquery", aspects: ["frontend"] },
  ]);
  const [aspects, setAspects] = useState([
    { id: 1, name: "all", title: "All", active: true },
    { id: 2, name: "frontend", title: "Front-End", active: false },
    { id: 3, name: "backend", title: "Back-end", active: false },
    { id: 4, name: "api", title: "APIs", active: false },
    {
      id: 5,
      name: "artificial-intelligence",
      title: "Artificial Intelligence",
      active: false,
    },
    {
      id: 6,
      name: "software-methodology",
      title: "Software Methodologies",
      active: false,
    },
  ]);
  const [filteredSkills, setFilteredSkills] = useState(skills);
  const [activeAspect, setActiveAspect] = useState("all");

  useEffect(() => {
    if (activeAspect === "all") {
      setFilteredSkills(skills);
      let updatedAspects = aspects.map((aspect) =>
        aspect.name === "all"
          ? { ...aspect, active: true }
          : { ...aspect, active: false }
      );
      setAspects(updatedAspects);
      return;
    }

    let updatedAspects = aspects.map((aspect) =>
      aspect.name === activeAspect
        ? { ...aspect, active: true }
        : { ...aspect, active: false }
    );
    setAspects(updatedAspects);

    const filtered = skills.filter((skill) =>
      skill.aspects.includes(activeAspect)
    );
    setFilteredSkills(filtered);
  }, [activeAspect]);

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
          "w-100 d-flex flex-wrap align-items-center gap-3 pt-5 pb-2 mb-4"
        }
      >
        {aspects.map((aspect) => (
          <button
            className={
              "btn py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions " +
              (aspect.active === true ? "active" : "")
            }
            onClick={() => setActiveAspect(aspect.name)}
          >
            {aspect.title}
          </button>
        ))}
      </div>
      <motion.div layout className={"w-100 d-grid skills"}>
        <AnimatePresence>
          {filteredSkills.map((skill, index) => (
            <motion.p
              key={skill.id}
              layout
              animate={{ opacity: 1 }}
              initial={{ opacity: 0 }}
              exit={{ opacity: 0 }}
            >
              {skill.name}
            </motion.p>
          ))}
        </AnimatePresence>
      </motion.div>
      <button
        className={
          "btn align-self-start mt-4 py-2 px-3 dark-bg-color primary-border-color primary-color font-weight-bold actions"
        }
        onClick={() => setSkillsVisible(false)}
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
