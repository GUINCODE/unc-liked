import React, { Component } from 'react';
import evenement1 from '../images/evenement1.png';

class PartageExp extends Component {
    render() {
        return (
      

            <div className="card  partageExceperience bg-secondary" >
            
            {/* <figure class="figure">
           <img className="card-img-top figure-img img-fluid rounded-top image-experience" src={evenement1} alt="Card image cap" />
           <figcaption class="figure-caption  text-center">Retour d'experience </figcaption>
           </figure> */}
               <div className="card-body body-card-evenement">
                   <p className="card-text">
                       Retour d'experience de <strong> Antoine Mazing </strong> Ingenieur Logiciel chez SYNOPTYQUE 
                    </p>
                    <a href="#" className="btn btn-outline-light ">Lire</a>
                  
               </div>
    </div>
            
        );
    }
}

export default PartageExp;