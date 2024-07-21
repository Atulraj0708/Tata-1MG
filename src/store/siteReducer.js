const reducer = (state, action) => {
    switch(action.type) {
        case "ADD":
            const prevItem = state.cart.find(item => item.id === action.item.id);
            let cartItems;

            if (prevItem) {
                cartItems = state.cart.filter(item => item.id !== action.item.id);
                cartItems.push({
                    ...prevItem,
                    price: prevItem.price + (+action.item.price),
                    amount: prevItem.amount + 1
                });
            } else {
                cartItems = [...state.cart, {...action.item, price: parseInt(action.item.price)}];
            }

            return {
                ...state,
                cart: cartItems
            };

        case "REMOVE":
            const newItems = state.cart.filter(item => item.id !== action.id);

            return {
                ...state,
                cart: newItems
            };

        case "CLEAR":
            return {
                ...state,
                cart: []
            };

        case "INCREASE":
            const itemToIncrease = state.cart.find(item => item.id === action.id);
            if (itemToIncrease) {
                const updatedCart = state.cart.map(item => 
                    item.id === action.id
                    ? { ...item, amount: item.amount + 1, price: item.price + item.price / item.amount }
                    : item
                );
                return {
                    ...state,
                    cart: updatedCart
                };
            }
            return state;

        case "DECREASE":
            const itemToDecrease = state.cart.find(item => item.id === action.id);
            if (itemToDecrease && itemToDecrease.amount > 1) {
                const updatedCart = state.cart.map(item => 
                    item.id === action.id
                    ? { ...item, amount: item.amount - 1, price: item.price - item.price / item.amount }
                    : item
                );
                return {
                    ...state,
                    cart: updatedCart
                };
            }
            return state;

        case "SET_USER":
            let userName = null;

            if (action.user) {
                const idx = action.user.indexOf('@');
                userName = action.user.substr(0, idx);
            }

            return {
                ...state,
                user: userName
            };

        default:
            return state;
    }
};

export const initialState = {
    cart: [],
    user: null
};

export default reducer;
