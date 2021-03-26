import React, { Component } from 'react';
import evenement1 from '../images/evenement1.png';
import evenement2 from '../images/evenement2.jpg';



class Evenement extends Component {
    render() {
        return (
           
            <div className="card  evenement" >
                 <h5 class="card-title">Concours inter-ecole</h5>
                 <figure class="figure">
                <img className="card-img-top figure-img img-fluid rounded" src={evenement2} alt="Card image cap" />
                <figcaption class="figure-caption  text-center">le 02/06/2021</figcaption>
                </figure>
                    <div className="card-body body-card-evenement">
                        <p className="card-text text-evenement">Some quick example text to build on  card's content. 
                         <a href="#" className="btn btn-outline-light btn-voirPlus">Voir plus</a>
                         </p>
                       
                    </div>
         </div>

        );
    }
}

export default Evenement;