import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

//Utils
import { auth } from './firebase/firebase.utils';
//Component
import Header from './components/header/header.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component';

class App extends React.Component {
    constructor(){
        super();

        this.state={
            currentUser:null
        }
    }

    unsubcribeFromAuth = null;
    componentDidMount(){
        this.unsubcribeFromAuth = auth.onAuthStateChanged(user=>{
            this.setState({currentUser:user});
        })
    }

    componentWillUnmount(){
        this.unsubcribeFromAuth();
    }

    render() {
        return (
            <div>
              {this.state.currentUser?<h1>Hello: {this.state.currentUser.displayName}</h1>:''}

              <Header currentUser={this.state.currentUser}></Header>
              <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
                <Route path="/sign-in" component={SignInAndSignOut}></Route>
              </Switch>
            </div>
          );
    }
}



export default App;