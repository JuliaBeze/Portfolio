import React from 'react';
import styles from './Contacts.module.css';
import {Fade} from "react-reveal";

class Contacts extends React.Component {
    render() {
        return (
            <div className={styles.contacts}>
                <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                    <span className={styles.blockTitle}>Contacts</span>
                    <div className={styles.line}> </div>
                    </div>
                    <form className={styles.form}>
                        <input className={styles.formArea} placeholder="Enter your name!" type="text"/>
                        <input className={styles.formArea} placeholder="Enter your Email!"type="email"/>
                        <textarea className={styles.messageArea} placeholder="Enter your message"> </textarea>
                        <button className={styles.button} type="submit"> Send Message</button>

                    </form>


                </div>
                </Fade>


            </div>

        )
    }
}


export default Contacts;
