import React from 'react';
import './header.styles.scss';

//connect-redux
import { connect } from 'react-redux';

import {auth} from '../../firebase/firebase.utils'

import {Link} from 'react-router-dom';

import {ReactComponent as Logo} from '../../assets/logo.svg';

const Header = ({currentUser}) =>(
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
        </div>
    </div>
)



const mapStatetoProps = (state) => ({
    currentUser : state.user.currentUser
})

export default connect(mapStatetoProps)(Header);