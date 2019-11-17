import React from 'react';
import styles from './NavMenu.module.css';
import {NavLink} from "react-router-dom";

class NavMenu extends React.Component {


    render() {
        return (
            <div className={styles.navMenu}>
                <nav className={styles.navigation}>
                    <a className={styles.link} href="#" >About</a>
                    <a className={styles.link} href="#" >Skills</a>
                    <a  className={styles.link} href="#" >Projects</a>
                    <a  className={styles.link}href="#" >Contacts</a>
                </nav>
            </div>

        )
    }
}


export default NavMenu;
