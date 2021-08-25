import React from "react";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <motion.div
      className='all-center py-3'
      exit={{ opacity: 0, y: "+100%" }}
      animate={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: "+100%" }}
    >
      <h1 className='x-large '>Wellcome To My Portfolio</h1>
      <p className='paragraph text-fade' style={{ fontSize: "2rem" }}>
        Here you will be able to see information about me in About page and also
        explore my work on Project page. You are welcomed to explore! This
        Portfolio was made using React.
      </p>
    </motion.div>
  );
};

export default Home;
