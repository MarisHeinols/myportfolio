import React from "react";
import PropTypes from "prop-types";
import Projectfetch from "../ProjectFetch";
import projectsData from "../data/projectData";
import { motion } from "framer-motion";
const Projects = (props) => {
  console.log(projectsData);
  return (
    <motion.div
      className='all-center'
      exit={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: "-100%" }}
    >
      <Projectfetch data={projectsData} />
    </motion.div>
  );
};

Projects.propTypes = {};

export default Projects;
