import React from 'react';
import styles from './Footer.module.css';
import telegram from '../assets/image/telegram.png'
import linkedIn from '../assets/image/linkedIn.png'
import rambler from '../assets/image/rambler.png'
import {Fade} from "react-reveal";

class Footer extends React.Component {
    render() {
        return (
            <div className={styles.footer}>
                <Fade clear>
                    <div className={styles.container}>
                        <span className={styles.blockTitle}>Julia Beze</span>

                        {/*<div className={styles.socialBlock}>*/}
                        {/*    <div className={styles.socialIcon}>*/}
                        {/*        <a href="https://t.me/BezeJulia">*/}
                        {/*            <img src={telegram}/>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.socialIcon}>*/}
                        {/*        <a href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B1%D0%B5%D0%B7%D0%B5-b12576197/" >*/}
                        {/*            <img src={linkedIn}/>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}
                        {/*    <div className={styles.socialIcon}>*/}
                        {/*        <a href="mailto:juliazhorova@rambler.ru" target="_blank">*/}
                        {/*        <img src={rambler}/>*/}
                        {/*        </a>*/}
                        {/*    </div>*/}

                        {/*</div>*/}
                        <span className={styles.copyRight}>©2019 All rights reserved </span>

                    </div>
                </Fade>
            </div>

        )

    }

}


export default Footer;
