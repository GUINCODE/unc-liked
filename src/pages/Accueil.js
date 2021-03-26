import React, { Component } from 'react';
import Article from '../components/Article';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import SideBlock from '../components/SideBlock';


class Accueil extends Component {
    valcontrol
    render() {
        return (
            <div className="Accueil">
                <Header />
                <div className="accueil-content">
                    <div> <Navigation /></div>
                    <div id="articleID">
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div >
                        <SideBlock />
                    </div>



                </div>


            </div>


        );
    }
}

export default Accueil;