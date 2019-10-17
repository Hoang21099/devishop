import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.action';

import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden}) =>(
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className="item-count">0</span>
    </div>
)


const mapDispatchToProps = dispatch =>({
    toogleCartHidden: ()=>dispatch(toogleCartHidden())
})

export default connect(null,mapDispatchToProps)(CartIcon);