import React from 'react';
import './assetss/css/App.css';
import 'bootstrap/dist/css/bootstrap.css'

import LoginPage from './components/LoginPage';
import UserPage from './components/UserPage';
import PropertyDetail from './components/PropertyDetail';
import UpdateUser from './components/UpdateUser';

import { BrowserRouter, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render ={ props => ( <LoginPage {...props} />)}></Route>
          <Route path="/userpage" exact render = { props => ( <UserPage {...props} />)}></Route>
          <Route path="/idproperty/:id" exact render = { props => ( <PropertyDetail {...props} />)}></Route>
          <Route path="/update" exact render = { props => ( <UpdateUser {...props} />)}></Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>

  );
}

export default App;
