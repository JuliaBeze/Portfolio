import React from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";
import telegram from "../assets/image/telegram.png";
import linkedIn from "../assets/image/linkedIn.png";
import rambler from "../assets/image/rambler.png";
import tut from "../assets/image/tut.png"

class Contacts extends React.Component {
    render() {
        return (
            <div className={styles.contacts} id={'contacts'}>
                    <div className={styles.container}>
                        <div className={styles.header}>
                            <span className={styles.title}> Let`s work together</span>
                            <div className={styles.socialBlock}>
                                <div className={styles.socialIcon}>
                                    <a href="https://t.me/BezeJulia"><img src={telegram}/></a>
                                </div>
                                <div className={styles.socialIcon}>
                                    <a href="https://www.linkedin.com/in/%D1%8E%D0%BB%D0%B8%D1%8F-%D0%B1%D0%B5%D0%B7%D0%B5-b12576197/">
                                        <img src={linkedIn}/>
                                    </a>
                                </div>
                                <div className={styles.socialIcon}>
                                    <a href="mailto:juliabeze94@gmail.com">
                                        <img src={rambler}/>
                                    </a>
                                </div>
                                <div className={styles.socialIcon}>
                                    <a href="https://jobs.tut.by/applicant/resumes/view?resume=b3b5f531ff013b586b0039ed1f683551586856">
                                        <img src={tut}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>

        )
    }
}


export default Contacts;
