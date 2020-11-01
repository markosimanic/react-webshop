import React from 'react'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import { ReactComponent as ShoppingIcon } from '../../assets/11.1 shopping-bag.svg'
import { createStructuredSelector } from 'reselect'
import { connect } from 'react-redux'

import './cart-icon.styles.scss'

const CartIcon = ({toggleCartHidden,itemCount}) =>(
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    </div>
);
                        //rootReducer-> cart -> cartReducer-> cartItems
const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
})
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon) 