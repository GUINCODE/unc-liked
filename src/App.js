import './styles/Index.css';
import React from 'react';
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import Accueil from './pages/Accueil';
import NotFound from './pages/NotFound';
import Annuaire from './pages/Annuaire';

class  App extends React.Component {
  
  render(){
  return (
 
  <BrowserRouter>
        <Switch>
     <Route exact path="/"  component={Accueil} />
     <Route exact path="/annuaire-des-anciens"  component={Annuaire} />
     <Route exact path="/entraide"  component={Accueil} />
      <Route component={NotFound} />
        </Switch>
     </BrowserRouter>

     
   
  );
}
}

export default App;
