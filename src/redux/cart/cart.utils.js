export const addItemToCart = (cartItems, cartItemToAdd) => {
    //if found, find sets found cartItem to our const, if it does not find anything, const is null
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem){
        return cartItems.map(
            cartItem => cartItem.id === cartItemToAdd.id 
                //if we already have cartItem in our cart, just add 1 to its quantity
                ? {...cartItem, quantity: cartItem.quantity + 1 } 
                //if its new cart item, pass it in cart without adding 1
                : cartItem 
            )
    }

    return [...cartItems, {...cartItemToAdd, quantity:1}]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToRemove.id
    );
    
    if (existingCartItem.quantity === 1) {
        return cartItems.filter(cartItem => cartItem.id !== cartItemToRemove.id);
    }
    
    return cartItems.map(cartItem =>
        cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

