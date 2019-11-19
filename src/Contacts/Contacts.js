import React from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";
import telegram from "../assets/image/telegram.png";
import linkedIn from "../assets/image/linkedIn.png";
import rambler from "../assets/image/rambler.png";

class Contacts extends React.Component {
    render() {
        return (
            <div className={styles.contacts}>
                <Fade bottom>

                    <div className={styles.container}>
                        <div className={styles.header}>
                            <span className={styles.title}> Let`s work together</span>
                            <div className={styles.socialBlock}>
                                <div className={styles.socialIcon}>
                                    <a href="https://t.me/BezeJulia"><img src={telegram}/></a>

                            </div>
                            <div className={styles.socialIcon}>
                                <a href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B1%D0%B5%D0%B7%D0%B5-b12576197/" >
                                    <img src={linkedIn}/>
                                </a>
                            </div>
                            <div className={styles.socialIcon}>
                                <a href="mailto:juliazhorova@rambler.ru">
                                    <img src={rambler}/>

                                </a>
                            </div>

                        </div>

                    </div>


                </div>
                </Fade>


            </div>

        )
    }
}


export default Contacts;
