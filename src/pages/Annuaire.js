/** @format */

import React, { Component } from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

class Annuaire extends Component {
  render() {
    return (
      <div className="annuaire">
        <Header />
        <div className="wrapper">
          <div className="annuaire-content">
            <div>
              <Navigation />
            </div>
            <div className="annuaire-body rounded">

              <div className="cherche-alumni rounded">
                <h2 >Rechercher un Alumni</h2>
                <div className="input-group  rounded ">
                  <div className="input-group-prepend ">
                    <button className="btn-cherche-alumi">
                      <span className="material-icons" style={{ fontSize: '50px' }}>person_search</span>
                    </button>
                  </div>
                  <input type="search" className="border-left border-secondary" placeholder="Alumni ou ville ou region ou Pays..." />
                </div>
              </div>
              <div>
                <div className="items-filtre-checkbox">
                  <label className="radio">
                    <input type="radio" name="genre" value="all" defaultChecked="checked" />
                               Tous
                           <span ></span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="genre" value="c1" />
                               Campus 1
                           <span class=""></span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="genre" value="c2" />
                               Capmpus 2
                           <span ></span>
                  </label>
                  <label className="radio">
                    <input type="radio" name="genre" value="c3" />
                               Capmpus 3
                           <span ></span>
                  </label>
                </div>
                <p className="trie">Trier par : 
                 <select className="option-tri rounded" >
                    <option value="promotion" className="aucun" selected> Aucun </option>
                    <option value="promotion" > Promotion</option>
                    <option value="nom"> Nom</option>
                  </select>
                </p>
                <div className="items-alumni">
                  <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A laboriosam port amet consectetur, adipisicing elit. A laboriosam port amet consectetur, adipisicing elit. A laboriosam porro tempora aliquid minus, consectetur magni mollitia quidem. At, necessitatibus.</div>
                  <div>Nemo, tenetur possimus sequi dolore unde molestias natus expedita dolor ullam, aspernatur ducimus iste dicta perferendis impedit veritatis quisquam. Tempora?</div>
                  <div>Nisi sed dignissimos quibusdam quas! Doloremque, adipisci aliquam! Ut ratione sint minus nostrum tenetur tempore accusamus aliquam harum ipsa reprehenderit.</div>
                  <div>Voluptatum, nostrum, tenetur fugit dolorum sint libero adipisci cum perferendis delectus, rerum natus pariatur eius suscipit est eum asperiores nulla!</div>
                  <div>Voluptatum, nostrum, tenetur fugit dolorum sint libero adipisci cum perferendis delectus, rerum natus pariatur eius suscipit est eum asperiores nulla!</div>
                  <div>Voluptatum, nostrum, tenetur fugit dolorum sint libero adipisci cum perferendis delectus, rerum natus pariatur eius suscipit est eum asperiores nulla!</div>
                  <div>Voluptatum, nostrum, tenetur fugit dolorum sint libero adipisci cum perferendis delectus, rerum natus pariatur eius suscipit est eum asperiores nulla!</div>
                  <div>Fugit explicabo corrupti suscipit qui doloribus perspiciatis voluptatibus adipisci dolorum quaerat voluptas, fuga tenetur numquam culpa, ea assumenda praesentium asperiores!</div>
                  <div>Odit accusantium excepturi minima voluptatibus aliquam, accusamus error, tenetur aliquid debitis neque asperiores odio similique in sunt laboriosam aut quasi.</div>
                  <div>Id cupiditate ratione atque nam repudiandae, ea quas ut necessitatibus eum iusto exercitationem ab, odio modi! Doloremque, dolorem! Voluptates, amet.</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Annuaire;
