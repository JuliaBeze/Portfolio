import React from 'react';
import styles from './Skills.module.css';
import {Fade} from "react-reveal";

class Skills extends React.Component {
    render() {
        return (
            <div className={styles.skills} id={'skills'}>
                <Fade bottom>
                    <div className={styles.container}>
                        <h2 className={styles.blockTitle}> </h2>
                        <div className={styles.line}> </div>

                        <div className={styles.skillsWrapper}>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                </div>
                                <h3 className={styles.skillTitle}>React/redux</h3>

                            </div>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                </div>
                                <h3 className={styles.skillTitle}>  HTML/CSS </h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                </div>
                                <h3 className={styles.skillTitle}> JavaScript </h3>
                            </div>


                        </div>
                    </div>
                </Fade>
            </div>
        )

    }

}


export default Skills;
