import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import "./NavBar.css";

export default function NavBar({ links, logo }) {
  const [hamburger, onHamburger] = useState(true);
  return (
    <div className="nav_container">
      <nav className="nav">
        <div className="nav_brand">
          <img src={logo} alt="" />
        </div>

        <div
          className="hamburger"
          onClick={() => {
            onHamburger(!hamburger);
          }}
        >
          <i className={`fa fa-bars ${hamburger === false ? "" : "hid"} `}></i>
          <i className={`fa fa-times ${hamburger === true ? "" : "hid"}`}></i>
        </div>

        <ul className={`nav_list ${hamburger === false ? "" : "show"}`}>
          {links.map((link) => {
            if (link === "Hackformers") {
              return (
                <li className="nav_list_items" key={link}>
                  <NavLink
                    to={"/hackformers"}
                    className="link"
                    value={link}
                    onClick={() => {
                      hamburger === true ? onHamburger(false) : "";
                    }}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            }
            if (link === "Avalon") {
              return (
                <li className="nav_list_items" key={link}>
                  <NavLink
                    to={"/"}
                    className="link"
                    value={link}
                    onClick={() => {
                      hamburger === true ? onHamburger(false) : "";
                    }}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            }
            if (link === "Prodigy") {
              return (
                <li className="nav_list_items" key={link}>
                  <NavLink
                    to={"/prodigy"}
                    className="link"
                    value={link}
                    onClick={() => {
                      hamburger === true ? onHamburger(false) : "";
                    }}
                  >
                    {link}
                  </NavLink>
                </li>
              );
            }
            return (
              <li className="nav_list_items" key={link}>
                <Link
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={500}
                  className="link"
                  value={link}
                  onClick={() => {
                    hamburger === true ? onHamburger(false) : "";
                  }}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
