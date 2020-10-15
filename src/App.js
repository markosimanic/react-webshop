import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import Header from './components/header/header.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'

const HatsPage = () =>
(
  <div>
    <h1>Hats</h1>
  </div>
)

function App() {
  return (
    <div>
      <Header/>
      <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/hats' component={HatsPage}></Route>
          <Route exact path='/shop' component={ShopPage}></Route>
          <Route exact path='/signIn' component={SignInAndSignUpPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
