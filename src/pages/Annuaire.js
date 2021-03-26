import React, { Component } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';

class Annuaire extends Component {
    render() {
        return (
            <div className="annuaire" >
                    <Header/>
                    <div className="annuaire-content">
                          <div className="annuaire-sideLeft">
                               menu place
                          </div>
                          <div className="annuaire-body">
                              place item-ancien
                          </div> 

                    </div>

            </div>
        );
    }
}

export default Annuaire;