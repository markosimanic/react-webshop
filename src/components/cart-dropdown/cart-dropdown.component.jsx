import React from 'react'

import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { toggleCartHidden } from '../../redux/cart/cart.actions.js'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'

import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'



import './cart-dropdown.styles.scss' 

const CartDropdown = ({cartItems, history, dispatch}) => (
    <div className="cart-dropdown">
        <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)) :  <span className='empty-message'>Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={()=> {
             history.push('/checkout'); 
             dispatch(toggleCartHidden())}}>
                 
             GO TO CHECKOUT
        </CustomButton>
    </div>
)

                        // cart -> its key from root reducer, and here we get its value which is cartReducer and then we get cartItems from cartReducer's INITIAL_STATE
 const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
 })

 // if we dont pass mapDispatchToProps to connect, it will pass dispatch automatically to our component
export default withRouter(connect(mapStateToProps)(CartDropdown))