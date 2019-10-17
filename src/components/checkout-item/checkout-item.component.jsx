import React from 'react';
import {connect} from 'react-redux';
import './checkout-item.styles.scss';

import {addItem,clearItemFromCart,removeItem} from '../../redux/cart/cart.action'

const CheckoutItem = ({cartItem,clearItemFromCart,addItem,removeItem})=>{
    const {name,imageUrl,price,quantity}=cartItem;
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt=""/>
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" 
                onClick={()=>removeItem(cartItem)}
            >
                    &#10094;
            </div>
            {quantity}
            <div className="arrow" onClick={()=>addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={()=>clearItemFromCart(cartItem)}>X</span>
    </div>
)
}
const mapDispatchToProps = dispatch=>({
    clearItemFromCart:item=>dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem:item=>dispatch(addItem(item))
    
})

export default connect(null,mapDispatchToProps)(CheckoutItem);