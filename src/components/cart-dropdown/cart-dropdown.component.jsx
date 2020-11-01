import React from 'react'
import {connect} from 'react-redux'

import './cart-dropdown.styles.scss'
import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'


import {selectCartItems} from '../../redux/cart/cart.selectors'

const Cart = ({cartItems}) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
)

                        // cart -> its key from root reducer, and here we get its value which is cartReducer and then we get cartItems from cartReducer's INITIAL_STATE
 const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
 })

export default connect(mapStateToProps)(Cart)