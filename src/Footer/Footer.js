import React from 'react';
import styles from './Footer.module.css';
import {Fade} from "react-reveal";

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <Fade clear>
                    <div className={styles.container}>
                        <span className={styles.blockTitle}>Julia Beze</span>
                        <span className={styles.copyRight}>npm </span>
                    </div>
                </Fade>
            </div>
        )
    }
}


export default Footer;

