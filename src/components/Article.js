import React, { Component } from "react";
import image_article from "../images/image_article.jpg";
import babyBoss from '../images/babyBoss.png';
import imageProfil from '../images/imageProfil.jpg';


class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentaire:false,
    }
  }
  commenter=()=>{
    this.setState({
      commentaire: !this.state.commentaire
    })
 
  }
  render() {
    console.log(this.state.commentaire);
    const boxCommentaire=this.state.commentaire  && (<div className="box-profil-commentaire">
    <div className=" figure-fluid  profil-side-comment">
                 <img src={babyBoss} alt="user profil " className="img-fluid  " />                                                      
   </div>
   <div className="input-group  box-commentaire">
         <input type="text"   placeholder="Ecrivez votre commentaire..."  autofocus  />
       <div className="input-group-apend ">
                  <button className="btn-envoi-commentaire"><span className="material-icons send-comment-btn" >send</span></button>
         </div>
    </div>
  
</div>)
    return (
      <div className="article  rounded" >
        <div className="artice-zone-text">
          <div className="header-article">
                   <div className=" figure-fluid  profil-user-pub">
                            <img src={imageProfil} alt="user profil " className="  img-fluid img-rounded profil_pub " />     
                   </div>
                 <div className="utilisateur-info_pib">
                 <p className="nameUser-pub">Ousmane Bah  <i className="promoUser-pub"> <i className="fa fa-graduation-cap"></i> 2015   </i>    </p> 
                 <p className="nameUser-pub-profession" >Administareur Reseau chez Guincode</p>
                
                 </div>
                   <span class="material-icons dotPlus " type="button" >more_vert</span>
          </div>
       
          
           <p className="text-article">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem
            asperiores repellat reprehenderit, nihil deleniti voluptate non eius
            placeat commodi accusantium, corrupti et culpa perferendis eos?
            Molestias fuga nostrum eos, aut quia inventore harum natus ducimus
            aliquid incidunt, culpa magnam quis.
          </p>
        </div>
        <div className="article-image figure-fluid">
          <img
            src={image_article}
            alt=" pasque c'est obligatoire de l'article"
            className="img-fluid"
          />
        </div>
        <div className="footer-article">
                           <div className="box-reaction">
                                <p  className="space-reaction-anterieure">
                                     <div className="les-nombre-like-icon"> <div><span className="material-icons  icon-for-likes">thumb_up</span> </div> <div className="text-reaction">123</div>   </div>
                                    <div className="les-nombre-commentaires">  <div className="text-reaction">100  commentaires</div> </div>
                                </p>
                            </div>
                           <div className="box-like-comment  border-top ">
                           <button className="btn-like "> <span className="material-icons btn-likeFils">thumb_up_off_alt</span>  J'aime</button>
                          <button  className="btn-ajout-commentaire" onClick={this.commenter}> <span class="material-icons btn-ajout-commentaire">add_comment</span>Commenter</button>
                                 <button className="btn-ajout-commentaire"> <span class="material-icons btn-ajout-commentaire">shortcut</span>Partager</button>
                          </div>
                                 {boxCommentaire}
                        
            
        </div>
      </div>
    );
  }
}

export default Article;
