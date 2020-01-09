import React from 'react';
import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import Projects from "./Projects/Projects";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

class App extends React.Component {



    render() {
        return (

            <div className="App">
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
