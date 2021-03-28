import React, { Component } from 'react';
import LogoTwo from '../logos/LogoTwo.png'
import babyBoss from '../images/babyBoss.png'


class Header extends Component {
    render() {
        return (
            <div className="entete bg-secondary rounded-top">
                <img src={LogoTwo} alt="logo GreatAlmuni" style={{ width: '100px' }} />
                <div className="heade-container-right">
                    <div className="cherche-bloc">
                    <form action="">
                            <div className="input-group justify-content-center">
                                 <input type="search" name="q" id="q" placeholder="Rechercehr" className="form-control  inputCherche"  />
                                 <div className="input-group-apend">
                                    <button className="btn  btn-chercher"><span className="fa fa-search"></span></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="icons-bar">
                        <div className="msg-notification">
                            <button type="button" className="icon-button bouton">
                                <span className="material-icons icon-entete " style={{ fontSize: '26px' }}> sms  </span>
                                <span className="icon-butto__badge">14</span>
                            </button>
                        </div>
                        <div className="alert-notification">
                            <button type="button" className="icon-button bouton">
                                <span className="material-icons icon-entete" style={{ fontSize: '26px' }}>notifications_active</span>
                                <span className="icon-butto__badge">3</span>
                            </button>
                        </div>
                        <div className="evenement-notification">
                            <button type="button" className="icon-button bouton">
                                <span class="material-icons icon-entete" style={{ fontSize: '26px' }}>event</span>
                                <span className="icon-butto__badge">1</span>
                            </button>
                        </div>


                    </div>      {/*  end iconc-bar */}
                    <div className="profil-acces-rapide">
                        <button className="btn-compte">
                            <div className="profil-user">
                                <img src={babyBoss} alt="user profil " className="profil" />
                            </div>
                            <div className="petite-zone-text">
                           <p className="xyz"> Mon Compte  </p>
                        <span className="material-icons icon-entete down-fleche xyz" style={{ fontSize: '50px' }}>arrow_drop_down</span>
                            </div>
                          
                        </button>
                       


                        <button className="btn-compte ">
                            <span className="material-icons   grille-acces-rapid " style={{ fontSize: '30px' }}> grid_view</span>
                            <div className="petite-zone-text ">
                            <p> Acces Rapide </p>
                            <span className="material-icons down-fleche " style={{ fontSize: '50px' }}>arrow_drop_down</span>
                            </div>
                            
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;