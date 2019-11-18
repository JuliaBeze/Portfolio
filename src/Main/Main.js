import React from 'react';
import styles from './Main.module.css';
import foto from './../assets/image/foto.png'

class Main extends React.Component {
    render() {
        return (

            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.greeting}>
                        <span>Hey,</span>
                        <span> I`m <span> Julia Beze.</span></span>
                        <span>Front-end developer</span>

                    </div>
                    <div className={styles.photo}>
                        <img src={foto}/>

                    </div>
                </div>
            </div>

        )

    }

}


export default Main;
