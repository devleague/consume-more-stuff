import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../containers/Home';
import RegisterUser from '../containers/RegisterUser';
import Login from '../containers/Login';
import Logout from '../containers/Logout';
import UserSettings from '../containers/UserSettings';
import NewItem from '../containers/NewItem';
import EditItem from '../containers/EditItem';
import ItemList from '../containers/ItemList/index';
import Categories from '../containers/Categories';
import NoMatch from '../components/NoMatch';
import SingleItem from '../containers/SingleItem';
import UserListing from '../containers/UserListing';


const Main = (props) => {

  return (
    <main className="page-content">

      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/items" component={ ItemList } />
        <Route exact path="/new-item" component={NewItem} />
        <Route exact path="/item/edit-item/:id" component={EditItem} />
        <Route path="/categories/:id" component={Categories} />
        <Route exact path="/register" component={RegisterUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/logout" component={Logout} />
        <Route path="/settings" component={UserSettings} /> 
        <Route path="/item/:id" component={SingleItem} /> 
        <Route path="/users/:id" component={UserListing} />
        <Route component={ NoMatch }/>
      </Switch>
      
    </main>
  ) 
}

export default Main;