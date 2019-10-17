import React from 'react';

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { connect } from 'react-redux';

import { toogleCartHidden } from '../../redux/cart/cart.action';

import { selectorCartItemsCount } from '../../redux/cart/cart.selector';

import './cart-icon.styles.scss';

const CartIcon = ({toogleCartHidden,itemCount}) =>(
    <div className="cart-icon" onClick={toogleCartHidden}>
        <ShoppingIcon className='shopping-icon'></ShoppingIcon>
        <span className="item-count">{itemCount}</span>
    </div>
)


const mapDispatchToProps = dispatch =>({
    toogleCartHidden: ()=>dispatch(toogleCartHidden())
})

const mapStateToProps = (state)=>({
    itemCount: selectorCartItemsCount(state)
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);