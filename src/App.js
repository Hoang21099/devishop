import React from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';

//Component
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/shop" component={ShopPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
