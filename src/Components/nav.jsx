import { Link } from "react-router-dom";
import { use, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import logo from "../Assets/Img/logo.svg";

function Nav() {
    const [showNav, setShowNav] = useState(false);

    const handleShowNav = () => {
        setShowNav(!showNav)
    }

    return (
        <header>
            <Link to={"/"}>
                <img src={logo} alt="costa logo" className="logo" />
            </Link>
            <a id="navToggle" className={`navToggle ${showNav ? "toCross" : ""}`} onClick={handleShowNav}>
                <span className="navToggleBar navToggleBarTop"></span>
                <span className="navToggleBar navToggleBarMiddle"></span>
                <span className="navToggleBar navToggleBarBottom"></span>
            </a>
            <nav className={`nav ${showNav ? "navOpen" : ""}`}>
                <ul className="navList">
                    <li className="navItem">
                        <Link to={"/"} className="navLink  textUppercase textBold">
                            accueil
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link to={"/bateau"} className="navLink  textUppercase textBold">
                            le bateau
                        </Link>
                    </li>
                    <li className="navItem">
                        <Link className="navLink  textUppercase textBold">
                            étapes <FontAwesomeIcon icon={faChevronDown} className="icon" />
                        </Link>
                        <ul className="subnavList">
                            <li className="subnavItem">
                                <Link to={"/Barcelone"} className="subnavLink  textUppercase textBold">
                                    Barcelone
                                </Link>
                            </li>
                            <li className="subnavItem">
                                <Link to={"/Cagliari"} className="subnavLink  textUppercase textBold">
                                    Cagliari
                                </Link>
                            </li>
                            <li className="subnavItem">
                                <Link to={"/Naples"} className="subnavLink  textUppercase textBold">
                                    Naples
                                </Link>
                            </li>
                            <li className="subnavItem">
                                <Link to={"/Civitavecchia"} className="subnavLink  textUppercase textBold">
                                    Civitavecchia/Rome
                                </Link>
                            </li>
                            <li className="subnavItem">
                                <Link to={"/Gênes"} className="subnavLink  textUppercase textBold">
                                    Gênes
                                </Link>
                            </li>
                            <li className="subnavItem">
                                <Link to={"/Marseille"} className="subnavLink  textUppercase textBold">
                                    Marseille
                                </Link>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Nav