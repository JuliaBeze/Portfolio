import React from 'react';
import styles from "./Header.module.css"
import NavMenu from "../NavMenu/NavMenu";


class Header extends React.Component {
    render() {
        return (
            <div className={styles.menuMainImage}>
                <div className={styles.menuMain}>

                    <div className={styles.container}>
                        <NavMenu/>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
