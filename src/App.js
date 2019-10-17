import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';
import { setCollection } from './redux/collection/collection.action';

//Utils
import { auth,createUserProfileDocument } from './firebase/firebase.utils';

//Component
import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shoppage.component';
import SignInAndSignOut from './pages/sign-in-and-sign-up/sign-in-and-sign-out.component';


import SHOP_DATA from './pages/shop/shop.data';

class App extends React.Component {
    

    unsubcribeFromAuth = null;
    componentDidMount(){
        const { setCurrentUser,setCollection } = this.props
        this.unsubcribeFromAuth = auth.onAuthStateChanged(async userAuth=>{
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth);
                userRef.onSnapshot(snapshot=>{
                    setCurrentUser({
                            id:snapshot.id,
                            ...snapshot.data()
                    })
                })
            }
            setCurrentUser(userAuth);
        })

        setCollection(SHOP_DATA);

    }

    componentWillUnmount(){
        //this.unsubcribeFromAuth();
    }

    render() {
        const {currentUser,collection} = this.props;
        return (
            <div>
                {currentUser?currentUser.displayName:''}
              <Header></Header>
              <Switch>
                <Route exact path="/" component={HomePage}></Route>
                <Route path="/shop" component={ShopPage}></Route>
                <Route path="/sign-in" render={()=>
                    this.props.currentUser ? (<Redirect to="/"></Redirect>):(<SignInAndSignOut></SignInAndSignOut>)
                }></Route>
              </Switch>
                <Footer></Footer>
            </div>
          );
    }
}

const mapDispatchToProps = dispatch =>({
    setCurrentUser: user =>dispatch(setCurrentUser(user)),
    setCollection: collection => dispatch(setCollection(collection))
})

const mapStatetoProps = state =>({
    currentUser : state.user.currentUser,
    collection: state.collection.item
})

export default connect(mapStatetoProps,mapDispatchToProps)(App);