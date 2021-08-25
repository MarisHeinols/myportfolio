import React from "react";
import me from "../graphics/images/me.JPG";
import flag from "../graphics/images/flag.png";
import { motion } from "framer-motion";
const About = ({ Name, Age, Flag, Degree, Gender, Github }) => {
  return (
    <motion.div
      className='all-center'
      exit={{ opacity: 0, x: "+100%" }}
      animate={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: "+100%" }}
    >
      <div className='card-user flex-row '>
        <img src={me} className='small-img round-img ' />
        <div className='flex-collumn text-left ps'>
          <h2 className='text-danger'>{Name}</h2>
          <ul className='list'>
            <h3>
              Country: <img src={Flag} className='icon' />
            </h3>
            <h3>Age: {Age}</h3>
            <h3>Gender: {Gender}</h3>
            <h3>Degree: {Degree}</h3>
            <div className='flex-row a'>
              <h3>Github: </h3>
              <a href={Github}>To Github</a>
            </div>
          </ul>
        </div>
      </div>
      <div className='all-center'>
        <h1 className='text-dark lead'>About Me</h1>
        <p className='paragraph content-box'>
          Hello, I am a student who is eager to work and progress with my work
          life and programming skills. My main programming language is Java but
          I like to make react apps like this one. I have a great passion for
          new technology and automation, as well sports - MTB, Orienteering, XC
          Skiing. These things push me further and I have learned not to give up
          and chase my dreams. Because everything is possible with the right
          determination and passion.
          <br></br>
          My personality is outgoing, motivated, and relentless for the job I
          do. If I have a bite for the job I will do it to 100%!
        </p>
      </div>
    </motion.div>
  );
};
About.defaultProps = {
  Name: "Maris Heinols",
  Age: "20",
  Flag: flag,
  Degree: "IT Engineer",
  Gender: "Male",
  Github: "https://github.com/MarisHeinols",
};
export default About;
