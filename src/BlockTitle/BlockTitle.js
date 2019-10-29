import React from 'react';
import styles from './BlockTitle.module.css';
import Skills from "../Skills/Skills";
import Projects from "../Projects/Projects";
import Contacts from "../Contacts/Contacts";





class BlockTitle extends React.Component {
    render() {
        return (
            <div className={styles.contacts}>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <div className={styles.blockTitle}>  </div>
                        <div className={styles.line}> </div>

                    </div>

                </div>



            </div>

        )
    }
}


export default  BlockTitle ;
