import React from 'react';
import styles from './Projects.module.css';
import Counter1 from './../assets/image/counter1.jpg'
import TodoList1 from './../assets/image/TodoList1.jpg'
import Notifications from './../assets/image/notifications.jpg'
import SocialNetwork1 from './../assets/image/SocialNetwork1.jpg'
import loginPage1 from './../assets/image/loginpage1.png'
import Project from "./Project";
import {Fade} from "react-reveal";





class Projects extends React.Component {

    render() {

        const counterImg = {
            backgroundImage: `url(${Counter1}) `
        };
        const todoListImg = {
            backgroundImage: `url(${TodoList1}) `
        };
        const socialNetworkImg = {
            backgroundImage: `url(${SocialNetwork1}) `
        };
        const notificationsImg = {
            backgroundImage: `url(${Notifications}) `
        };
        const loginPageImg = {
            backgroundImage: `url(${loginPage1}) `
        };
        return (
            <div className={styles.projects}>
                <Fade bottom>
                    <div className={styles.container}>
                        <div className={styles.headerTitle}>
                            <span className={styles.blockTitle}> </span>
                            <div className={styles.line}></div>
                        </div>
                        <div className={styles.projectsWrapper}>
                            <Project url={"https://github.com/JuliaBeze/TodoList"}
                                     title={"TodoList"}
                                     style={todoListImg}
                                     description={"Redux, axios, api, thunk"}/>
                            <Project url={"https://github.com/JuliaBeze/Social-Network"}
                                     title={"Social Network"}
                                     style={socialNetworkImg}
                                     description={"Function/class/container components, connect, " +
                                     "life cycle methods, axios, api, redux-thunk, redux-form, hoc, reselect "}/>
                            <Project url={"https://github.com/JuliaBeze/Counter"}
                                     title={"Counter"}
                                     style={counterImg}
                                     description={"Redux"}/>
                            <Project url={"https://github.com/JuliaBeze/TypeScript"}
                                     title={"Notifications"}
                                     style={notificationsImg}
                                     description={"Local state, typeScript"}/>
                            <Project title={"Universal login page"}
                                     style={loginPageImg}
                                     description={"Redux,api,axios"}/>

                        </div>

                    </div>
                </Fade>
            </div>
        )
    }
}

export default Projects;
