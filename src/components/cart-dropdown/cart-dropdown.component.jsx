import React from 'react';
import { connect } from 'react-redux';

import {withRouter} from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import {selectCartItems} from '../../redux/cart/cart.selector';

import {toogleCartHidden} from '../../redux/cart/cart.action';


import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems,history,dispatch})=>(
    <div className={'cart-dropdown'}>
        <div className="cart-items">
        {
            cartItems.length?
            cartItems.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))
            : <span className="empty-message">Your cart is empty</span>
        }
        </div>
        <CustomButton inverted onClick={()=>{
            history.push('/checkout');
            dispatch(toogleCartHidden());
            }}>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStateToProps)(CartDropDown));

