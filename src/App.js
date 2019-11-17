import React from 'react';

import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Particles from "react-particles-js";
import TodoList from "./assets/image/TodoList.jpg";
import SocialNetwork from "./assets/image/SocialNetwork.jpg";
import Counter from "./assets/image/Counter.jpg";

const particlesOpt = {
    particles: {
        number:{
            value:150,
            density: {
                enable:true,
                value_area: 800
            }
        }
    }
}

class App extends React.Component {



    render() {
        return (

            <div className="App">
                {/*<Particles className = "particles" params = {particlesOpt}/>*/}
                <div className="portfolio">

                    <Header/>
                    <Main/>
                    <div className="portfolio1">

                    <Skills/>
                    <Projects />
                    <Contacts/>
                    <Footer/>
                </div>
                </div>


            </div>

        )

    }

}


export default App;
