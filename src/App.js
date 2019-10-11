import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

//Component
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
        <Route path="/sign-in" component={SignInAndSignOut}></Route>
      </Switch>
    </div>
  );
}

export default App;
