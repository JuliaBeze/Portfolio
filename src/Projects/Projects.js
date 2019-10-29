import React from 'react';
import styles from './Projects.module.css';
import Counter from './../assets/image/Counter.jpg'
import TodoList from './../assets/image/TodoList.jpg'
import SocialNetwork from './../assets/image/SocialNetwork.jpg'
import Project from "./Project";
import {Fade} from "react-reveal";



class Projects extends React.Component {




    render() {

        const counterImg = {
            backgroundImage:`url(${Counter}) `
        };
        const todoListImg ={
            backgroundImage:`url(${TodoList}) `
        };
        const socialNetworkImg ={
            backgroundImage:`url(${SocialNetwork}) `
        };

        return (
            <div className={styles.projects}>
                <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <span className={styles.blockTitle}> My projects</span>
                        <div className={styles.line}> </div>
                    </div>
                    <div className={styles.projectsWrapper}>
                        <Project title={"TodoList"}
                                 style={todoListImg}
                                 description={"gdgdg"}/>
                        <Project title={"Social Network"}
                                 style={socialNetworkImg}
                                 description={"gdgdg"}/>
                        <Project title={"Counter"}
                                 style={counterImg}
                                 description={"gdgdg"}/>

                    </div>

                </div>
                </Fade>
            </div>
        )
    }

}


export default Projects;
