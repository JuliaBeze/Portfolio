import React from 'react';
import styles from './Projects.module.css';
import Counter from './../assets/image/Counter.jpg'
import TodoList from './../assets/image/TodoList.jpg'
import SocialNetwork from './../assets/image/SocialNetwork.jpg'



class Project extends React.Component {



    render() {
debugger
        return (
            <div className={styles.project}>
                    <div className={styles.projectImg} style={this.props.style}>
                <a className={styles.show} href={this.props.url}>Watch</a>

            </div>

                        <span className={styles.projectTitle}> {this.props.title}</span>
                        <span className={styles.description}>{this.props.description}</span>
                    </div>

        )
    }

}


export default Project;
