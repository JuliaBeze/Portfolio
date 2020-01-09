import React from 'react';
import styles from './NavMenu.module.css';


class NavMenu extends React.Component {


    render() {
        return (
            <div className={styles.navMenu}>
                <nav className={styles.navigation}>
                    <a className={styles.link} href="#main" >About</a>
                    <a className={styles.link} href="#skills" >Skills</a>
                    <a  className={styles.link} href="#project" >Projects</a>
                    <a  className={styles.link}href="#contacts" >Contacts</a>
                </nav>
            </div>

        )
    }
}


export default NavMenu;
