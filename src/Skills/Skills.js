import React from 'react';
import styles from './Skills.module.css';
import html from '../assets/image/html.png';
import {Fade} from "react-reveal";

class Skills extends React.Component {
    render() {
        return (
            <div className={styles.skills}>
                <Fade bottom>
                    <div className={styles.container}>
                            <h2 className={styles.blockTitle}> </h2>
                            <div className={styles.line}></div>

                        <div className={styles.skillsWrapper}>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                    {/*<img src={html}/>*/}
                                </div>
                                <h3 className={styles.skillTitle}> HTML/CSS</h3>

                            </div>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                    {/*<img src="http://weblab.ua/wp-content/uploads/2017/08/react-learning.png"/>*/}
                                </div>
                                <h3 className={styles.skillTitle}> React/redux </h3>
                            </div>
                            <div className={styles.skill}>
                                <div className={styles.icon}>
                                    {/*<img src=""/>*/}
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
