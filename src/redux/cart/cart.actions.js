import CartActionTypes from './cart.types'

export const toggleCartHidden = () =>({
    type : CartActionTypes.TOGGLE_CART_HIDDEN,
    //payload : no need for payload because there's no data, we only set hidden prop to true or false
})

export const addItem = item => ({
    type : CartActionTypes.ADD_ITEM,
    payload : item

})