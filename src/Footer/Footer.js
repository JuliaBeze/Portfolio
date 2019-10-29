import React from 'react';
import styles from './Footer.module.css';
import telegram from './../images/telegram.png'
import linkedIn from './../images/linkedIn.png'
import {Fade} from "react-reveal";

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <Fade clear>
                    <div className={styles.container}>
                        <span className={styles.blockTitle}>Yuliya Beze</span>
                        <div className={styles.socialBlock}>
                            <div className={styles.socialIcon}>
                                <a href="">
                                    <img src={telegram}/>
                                </a>
                            </div>
                            <div className={styles.socialIcon}>
                                <a href="">
                                    <img src={linkedIn}/>
                                </a>
                            </div>
                            <div className={styles.socialIcon}>noi</div>
                        </div>
                        <span className={styles.copyRight}>©2019 All rights reserved </span>

                    </div>
                </Fade>
            </div>

        )

    }

}


export default Footer;
