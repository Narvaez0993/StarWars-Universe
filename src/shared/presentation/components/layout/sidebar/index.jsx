import { useState } from 'react';
import {
	FaAngleRight,
	FaAngleLeft,  
	FaArchive ,
    FaBars,
    FaBook,  
} from 'react-icons/fa';
import { home, myAlbumCharacters, myAlbumFilms,myAlbumStarShips } from "../../../../infraestructure/routing/routes";
import starwarsLogo from '../../../../../assets/star-wars.svg';
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types';
import './sidebar.scss'

const ICON_SIZE = 20;
const Sidebar = ({visible, show}) => {

    const [subMenuVisible, setSubMenuVisible] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuVisible(!subMenuVisible);
    };

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
                        <FaArchive size={ICON_SIZE} />
                        <span>Obtener Láminas</span>
                    </NavLink>
                    <div className="nav-link" onClick={toggleSubMenu}>
                        <FaBook size={ICON_SIZE} />
                        <span>Mi Álbum</span>
                        <FaAngleRight size={ICON_SIZE} />
                    </div>
                    {subMenuVisible && (
                        <div className="sub-menu">
                            <NavLink to={myAlbumFilms} className="nav-sublink">
                                <FaBook size={ICON_SIZE} />
                                <span>Películas</span>
                            </NavLink>
                            <NavLink to={myAlbumCharacters} className="nav-sublink">
                                <FaBook size={ICON_SIZE} />
                                <span>Personajes</span>
                            </NavLink>
                            <NavLink to={myAlbumStarShips} className="nav-sublink">
                                <FaBook size={ICON_SIZE} />
                                <span>Naves</span>
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    </>
    )
}

Sidebar.propTypes = {
    visible: PropTypes.bool,
    show: PropTypes.func
};

export default Sidebar;