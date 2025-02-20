import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import en from "../../images/flags/us.gif";
import ge from "../../images/flags/ge.png";
import lastBg from "../../images/back_mesh.png";


const NavbarMobile = () => {
    const test = (id) => {
    console.log(id);
    };

  const [isOpen, setIsOpen] = useState(false);

  const setOpenedState = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
        <div className="burger_menu" onClick={setOpenedState}>
            <span className={`burger_class ${!isOpen ? "" : "clicked"}`}></span>
            <span className={`burger_class ${!isOpen ? "" : "clicked"}`}></span>
            <span className={`burger_class ${!isOpen ? "" : "clicked"}`}></span>
        </div>
        <nav className={`nav_mobile ${!isOpen ? "" : "open_mobile"}`}>
            <ul onClick={setOpenedState}>
                <li>
                    <Link to="/about">
                        About Us
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Products
                    </Link>
                    <ul className='dropdown_mobile'>
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
                </li>
                <li>
                    <Link to="/technologies">
                        Technologies
                    </Link>
                </li>
                <li>
                    <Link to="/blogs">
                        Blog
                    </Link>
                </li>
                <li>
                    <Link to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
            <div className="language_block_mobile">
                <div className="lang_change_mobile" id="en" onClick={(e) => test(e.target.id)}>
                    <img src={en} alt="English" />
                    <p>Eng</p>
                </div>
                <div className="lang_change_mobile" id="ge" onClick={(e) => test(e.target.id)}>
                    <img src={ge} alt="Georgian" />
                    <p>Geo</p>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default NavbarMobile
