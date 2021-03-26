import React, { Component } from 'react';
import Evenement from './Evenement';
import PartageExp from './PartageExp';

class SideBlock extends Component {
    render() {
        return (
            <div className=" rounded sideBlock"  id="evenementID">
         <div id="carouselExampleIndicators" className="carousel slide " data-ride="carousel">
         <a className="carousel-control-prev  btn-prev-next" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next btn-prev-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            <div class="carousel-inner  ">
              <div class="carousel-item active ">
                        <Evenement/>
              </div>
              <div class="carousel-item ">
                     <Evenement/> 
             </div>
              <div class="carousel-item ">
                       <Evenement/>
              </div>
            </div>
           
          </div>
        
                
                <PartageExp/>
             
            </div>
        );
    }
}

export default SideBlock;