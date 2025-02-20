import React, { useState } from "react";
import logo from "../../images/logo.png";
import { Link, useLocation } from "react-router-dom";
import bg from "../../images/s-1.jpg";
import bgabout from "../../images/about.png";
import bgtechno from "../../images/techno.png";
import bgBlog from "../../images/11.jpg";
import aimg from "../../images/A.png";
import simg from "../../images/S.png";
import but from "../../images/but.png";
import en from "../../images/flags/us.gif";
import ge from "../../images/flags/ge.png";
import NavbarMobile from "../NavbarMobile/NavbarMobile";

export const Navbar = () => {
  const test = (id) => {
    console.log(id);
  };

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/about";
  const isTechnologiesPage = location.pathname === "/technologies";
  const isBlogsPage = location.pathname === "/blogs";
  //   const isServicesPage = location.pathname === "/services";
  //   const isContactPage = location.pathname === "/contact";

  const getBackgroundImage = () => {
    if (isAboutPage) return bgabout;
    if (isTechnologiesPage) return bgtechno;
    if (isBlogsPage) return bgBlog;
    // if (isServicesPage) return bgServices;
    // if (isContactPage) return bgContact;
    return bg;
  };

  const [isOpen, setIsOpen] = useState(false);

  const borderColor =
    location.pathname === "/"
      ? "rgba(255, 255, 255, 0.1)"
      : "rgba(38, 38, 38, 0.1)";
  return (
    <header
      className="header_style"
      style={{
        backgroundImage: `url(${getBackgroundImage()})`,
        height: location.pathname === "/" ? "105vh" : "",
      }}
    >
      <div
        className="before_nav_container"
        style={{
          backgroundColor: location.pathname === "/" ? "transparent" : "#fff",
        }}
      >
        <div className="nav_container">
          <div
            className="nav_logo"
            style={{
              borderRight: `1px solid ${borderColor}`,
            }}
          >
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          
          <div className="nav_menu">
            <nav>
              <ul
                className="nav_ul"
                style={{
                  color: location.pathname === "/" ? "#fff" : "#000",
                }}
              >
                <li>
                  <Link
                    to="/about"
                    style={{
                      color: location.pathname === "/" ? "#fff" : "#000",
                    }}
                  >
                    About Us
                  </Link>
                </li>
                <li
                  style={{
                    color: location.pathname === "/" ? "#fff" : "#000",

                    position: "relative",
                  }}
                  onMouseEnter={() => setIsOpen(true)}
                  onMouseLeave={() => setIsOpen(false)}
                >
                  Products
                  {isOpen && (
                    <ul className="dropdown_menu">
                      <li>
                        <Link to="/safety">Safety</Link>
                      </li>
                      <li>
                        <Link to="/military">Military</Link>
                      </li>
                      <li>
                        <Link to="/police">Police</Link>
                      </li>
                    </ul>
                  )}
                </li>
                <Link to="/technologies">
                  <li
                    style={{
                      color: location.pathname === "/" ? "#fff" : "#000",
                    }}
                  >
                    Technologies
                  </li>
                </Link>
                <Link to="/blogs">
                  <li
                    style={{
                      // color: location.pathname === "/about" ? "#000" : "#fff",
                      color: location.pathname === "/" ? "#fff" : "#000",
                    }}
                  >
                    Blog
                  </li>
                </Link>
                <Link to="/contact">
                  <li
                    style={{
                      // color: location.pathname === "/about" ? "#000" : "#fff",
                      color: location.pathname === "/" ? "#fff" : "#000",
                    }}
                  >
                    Contact
                  </li>
                </Link>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      {isHomePage ? (
        <div className="hero_content">
          <div className="hero_content_left">
            <img src={logo} alt="Logo" />
            <div className="hero_content_right_in_responsive">
              <img src={but} alt="Button" />
            </div>
            <h2>Innovation for</h2>
            <h3>Maximum Performance</h3>
            <div className="hero_content_left_image">
              <div className="hero_content_left_image_first">
                <img src={aimg} alt="A" />
                <p>WE ARE IN HALL 1/D09</p>
              </div>
              <div className="hero_content_left_image_second">
                <p>a member of</p>
                <img src={simg} alt="S" />
              </div>
            </div>
          </div>
          <div className="hero_content_right">
            <img src={but} alt="Button" />
          </div>
        </div>
      ) : (
        <>
          {isAboutPage && (
            <div className="hero_content_about">
              <h1>About Us</h1>
            </div>
          )}
          {isTechnologiesPage && (
            <div className="hero_content_technologies">
              <h1>Technologies</h1>
            </div>
          )}
          {isBlogsPage && (
            <div className="hero_content_blogs" style={{ height: "180px" }}>
              <h1>Blogs</h1>
            </div>
          )}
          
        </>
      )}

      <div className="language_block">
        <div className="lang_change" id="en" onClick={(e) => test(e.target.id)}>
          <img src={en} alt="English" />
          <p>English</p>
        </div>
        <div className="lang_change" id="ge" onClick={(e) => test(e.target.id)}>
          <img src={ge} alt="Georgian" />
          <p>Georgia</p>
        </div>
      </div>
      <NavbarMobile/>
    </header>
  );
};
