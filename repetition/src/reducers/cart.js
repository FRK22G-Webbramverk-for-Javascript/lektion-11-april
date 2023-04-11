const initialState = { // Vad vår Redux store ska innehålla
    cart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            // const cartArr = state.cart.concat(...state.cart, action.payload);

            // return {
            //     ...state,
            //     cart: cartArr
            // }

            // Nedan kod gör samma som ovan alltså lägger till en ny produkt i vår cart - array

            return {
                ...state,
                cart: [...state.cart, action.payload]
            }
    
        default:
            return state;
    }
}

export default reducer;