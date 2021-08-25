import React from "react";
import { Link } from "react-router-dom";
const NavBar = ({ title, subTitle }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1 className='x-large'>{title}</h1>
      <h3 className='lead text-fade'>{subTitle}</h3>
      <ul className='navBarChoices'>
        <Link to='/projects' className=''>
          Projects
        </Link>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

NavBar.defaultProps = {
  title: "Portfolio",
  subTitle: "Maris Heinols",
};
export default NavBar;
