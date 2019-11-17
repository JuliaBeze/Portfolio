import React from 'react';
import styles from './Projects.module.css';
import Counter from './../assets/image/Counter.jpg'
import TodoList from './../assets/image/TodoList.jpg'
import Notifications from './../assets/image/notifications.jpg'
import SocialNetwork from './../assets/image/SocialNetwork.jpg'
import loginPage from './../assets/image/loginpage.png'
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
        const notificationsImg ={
            backgroundImage:`url(${Notifications}) `
        };
        const loginPageImg ={
            backgroundImage:`url(${loginPage}) `
        };
        return (
            <div className={styles.projects}>
                <Fade bottom>
                <div className={styles.container}>
                    <div className={styles.headerTitle}>
                        <span className={styles.blockTitle}> </span>
                        <div className={styles.line}> </div>
                    </div>
                    <div className={styles.projectsWrapper}>
                        <Project title={"TodoList"}
                                 style={todoListImg}
                                 description={"Redux, axios, api, thunk"}/>
                        <Project title={"Social Network"}
                                 style={socialNetworkImg}
                                 description={"Function/class/container components, connect, " +
                                 "life cycle methods, axios, api, redux-thunk, redux-form, hoc, reselect "}/>
                        <Project title={"Counter"}
                                 style={counterImg}
                                 description={"Redux"}/>
                        <Project title={"Notifications"}
                                 style={notificationsImg}
                                 description={"Local state, TypeScript"}/>
                        <Project title={"Universal Login Page"}
                                 style={loginPageImg}
                                 description={"Local state,api"}/>

                    </div>

                </div>
                </Fade>
            </div>
        )
    }

}


export default Projects;
