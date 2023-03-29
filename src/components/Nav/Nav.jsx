import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png"

export default function Nav() {
  console.log(Logo)
  return (
    <nav id="navDesktop">
      <ul className="navListContainer">
        <li className="navList">
          <Link to="/membres" className="link">L'ÉQUIPE</Link>
        </li>
        <li className="navList">
          <Link to="/videos" className="link">VIDÉOS</Link>
        </li>
          <Link to="/" className="link"><img src={Logo} alt="Logo" className="logo" /></Link>
        <li className="navList">
          <Link to="/dates" className="link">DATES</Link>
        </li>
        <li className="navList">
          <Link to="/contact" className="link">CONTACT</Link>
        </li>
      </ul>
    </nav>
  );
}
