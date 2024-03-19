import React from 'react';
import {
	FaAngleRight,
	FaAngleLeft, 
	FaThLarge, 
	FaArchive ,
    FaBars,
    FaBook,  
} from 'react-icons/fa';
import { myAlbum, home, obtainFoils } from "../../../../infraestructure/routes";
import starwarsLogo from '../../../../../assets/star-wars.svg';
import { NavLink } from "react-router-dom";
import './navbar.scss'

const ICON_SIZE = 20;
const Navbar = ({visible, show}) => {

    return (
        <>
            <div className="mobile-nav">
                <button
                    className="mobile-nav-btn"
                    onClick={() => show(!visible)}
                >
                    <FaBars size={24}  />
                </button>
            </div>
            <nav className={!visible ? 'navbar' : ''}>
                <button
                    type="button"
                    className="nav-btn"
                    onClick={() => show(!visible)}
                >
                    { !visible
                        ? <FaAngleRight size={30} /> : <FaAngleLeft size={30} />}
                </button>
                <div>
                    <NavLink
                        className="logo"
                        to={home}
                    >
                            <img
                                src={starwarsLogo}
                                alt="logo"
                            />
                    </NavLink>

                    <div className="links nav-top">
                        <NavLink to={home} className="nav-link">
                            <FaThLarge size={ICON_SIZE} />
                            <span>Inicio</span>
                        </NavLink>
                        <NavLink to={obtainFoils} className="nav-link">
                            <FaArchive size={ICON_SIZE} />
                            <span>Obtener Laminas</span>
                        </NavLink>
                        <NavLink to={myAlbum} className="nav-link">
                            <FaBook size={ICON_SIZE} />
                            <span>Mi album</span> 
                        </NavLink>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;