import React from 'react';
import styles from './Projects.module.css';
import Counter1 from './../assets/image/counter1.jpg'
import TodoList1 from './../assets/image/TodoList1.jpg'
import Notifications from './../assets/image/notifications.jpg'
import SocialNetwork1 from './../assets/image/SocialNetwork1.jpg'
import CrazyDog from './../assets/image/CrazyDog.jpg'
import Weather from './../assets/image/Weather.jpg'
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
        const crazyDogImg = {
            backgroundImage: `url(${CrazyDog}) `
        };
        const weatherImg = {
            backgroundImage: `url(${Weather}) `
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
                            <Project url={"https://github.com/JuliaBeze/TodoList"}
                                     title={"TodoList"}
                                     style={todoListImg}
                                     description={"Redux, axios, api, thunk"}/>
                            <Project url={"https://github.com/JuliaBeze/Social-Network"}
                                     title={"Social Network"}
                                     style={socialNetworkImg}
                                     description={"Redux, axios, api, thunk, redux-form, hoc "}/>
                            <Project url={"https://github.com/JuliaBeze/counter-local-state"}
                                     title={"Counter"}
                                     style={counterImg}
                                     description={"Local State"}/>
                            <Project url={"https://github.com/JuliaBeze/counter_redux"}
                                     title={"Counter"}
                                     style={counterImg}
                                     description={"Redux"}/>
                            <Project url={"https://github.com/JuliaBeze/TypeScript"}
                                     title={"Notifications"}
                                     style={notificationsImg}
                                     description={"TypeScript"}/>
                            <Project  url={"https://github.com/JuliaBeze/CrazyDog"}
                                      title={"Crazy Dog"}
                                      style={crazyDogImg}
                                      description={"Local state"}/>
                            <Project  url={"https://github.com/JuliaBeze/weather_app"}
                                      title={"Weather"}
                                      style={weatherImg}
                                      description={"Local state, api"}/>

                        </div>

                    </div>
                </Fade>
            </div>
        )
    }
}

export default Projects;
