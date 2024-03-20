import {useState} from "react";
import Navbar from "./navbar";
import PropTypes from 'prop-types';
import './layout.scss';


const MainLayout = ({children}) =>{
	const [navVisible, showNavbar] = useState(false);

    return(
        <div className="main-layout-container">
            <Navbar visible={ navVisible } show={ showNavbar } />
            <div className={!navVisible ? "page" : "page page-with-navbar"}>
                {children}
            </div>
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node,
};

export default MainLayout;