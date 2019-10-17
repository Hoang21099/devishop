import React from 'react';
import { connect } from 'react-redux';

import CustomButton from '../custom-button/custom-button.component';

import CartItem from '../cart-item/cart-item.component';

import {selectorCartItems} from '../../redux/cart/cart.selector';

import './cart-dropdown.styles.scss';

const CartDropDown = ({cartItems})=>(
    <div className={'cart-dropdown'}>
        <div className="cart-items">
        {
            cartItems.map(item=>(
                <CartItem key={item.id} item={item}></CartItem>
            ))
        }
        </div>
        <CustomButton>Go to checkout</CustomButton>
    </div>
)

const mapStateToProps = (state)=>({
    cartItems: selectorCartItems(state)
})

export default connect(mapStateToProps)(CartDropDown);

