import React from 'react';
import './header.styles.scss';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDropDown from '../cart-dropdown/cart-dropdown.component';

//connect-redux
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils'

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg';

const Header = ({currentUser,toogleCartHidden}) =>(
    <div className="header">
        <Link className="logo-container" to="/">
           <Logo className="logo"></Logo>
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>
            {
                currentUser? ( 
                    
                    <div className="option" onClick={()=>auth.signOut()}>Sign Out</div>
                ):(
                <Link className="option" to="/sign-in">SIGN IN</Link>
                )

            }

           <CartIcon> </CartIcon>

            
        </div>
        {toogleCartHidden?null:<CartDropDown></CartDropDown>}
    </div>
)



const mapStatetoProps = (state) => ({
    currentUser : state.user.currentUser,
    toogleCartHidden:state.cart.hidden
})

export default connect(mapStatetoProps)(Header);