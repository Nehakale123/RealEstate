import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

function Header({ sections }) {
    const [menuOpened, setMenuOpened] = useState(false);
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800) {
            return { right: !menuOpened && "-100%" };
        }
    };

    const handleScroll = (ref) => {
        ref.current.scrollIntoView({ behavior: 'smooth' });
        setMenuOpened(false);  // Close the menu after clicking
    };

    return (
        <section className="h-wrapper">
            <div className="flexCenter paddings innerWidth h-container">

                <img src="logo.jpg" alt="logo" width={120} />




                <OutsideClickHandler
                    onOutsideClick={() => {
                        setMenuOpened(false);
                    }}
                >
                    <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
                        <a href="#">Home</a>
                        <a onClick={() => handleScroll(sections.residenciesRef)}>Residencies</a>
                        <a onClick={() => handleScroll(sections.valueRef)}>Our Value</a>
                        <a onClick={() => handleScroll(sections.contactRef)}>Contact Us</a>
                        <a onClick={() => handleScroll(sections.getStartedRef)}>Get Started</a>
                        <button className="button">Contact</button>
                    </div>
                </OutsideClickHandler>

                <div
                    className="menu-icon"
                    onClick={() => setMenuOpened((prev) => !prev)}
                >
                    <BiMenuAltRight size={30} />
                </div>
            </div>
        </section>
    );
}

export default Header;
