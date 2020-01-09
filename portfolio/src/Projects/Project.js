import React from 'react';
import styles from './Projects.module.css';




class Project extends React.Component {


    render() {

        return (
            <div className={styles.project} id={'project'}>
                <div className={styles.projectImg} style={this.props.style}>
                    <div>
                        <a className={styles.show} href={this.props.url}>View</a>
                    </div>


                </div>
                <div className={styles.projectTitle}>{this.props.title}
                    <div className={styles.description}>{this.props.description}</div>
                </div>
            </div>
        )
    }
}

export default Project;