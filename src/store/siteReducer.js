const reducer = (state, action) => {

    if(action.type === "ADD"){


        const prevItem = state.cart.find(item => item.id === action.item.id);

        let cartItems;

        if(prevItem){
            cartItems = state.cart.filter(item => item.id !== action.item.id);
            cartItems.push({
                ...prevItem,
                price: prevItem.price + (+action.item.price),
                amount: prevItem.amount + 1
            });
        }
        else {
            cartItems = [...state.cart , {...action.item,price: parseInt(action.item.price)}];
        }

        console.log(cartItems);

        return {
            ...state,
            cart: cartItems
        };
    }

    if(action.type === "REMOVE"){
        const newItems = state.cart.filter((item) => (item.id !== action.id));

        return {
            ...state,
            cart: newItems
        }
    }

    if(action.type === "SET_USER"){

        let userName = null;

        if(action.user){
            const idx = action.user.indexOf('@');
            
            userName = action.user.substr(0,idx);
        }

        // console.log(action.user);
        if (action.type === "CLEAR") {
            return {
                ...state,
                cart: []
            };
        }
        
        return {
            ...state,
            user: userName
        }
    }

    return state;
}

export const initialState = {
    cart: [],
    user: null
}

export default reducer;