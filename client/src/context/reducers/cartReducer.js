import { v4 as uuidv4 } from 'uuid';


const cartReducer = (state, action) => {
    switch(action.type){
        case "CART_ADD": 
            const item = action.payload;
            let doesExist = false;
            const newState = state.cartItems.map((stateItem) => {
                if(stateItem.name === item.name && stateItem.size === item.size && stateItem.color === item.color){
                    stateItem.qty += item.qty;
                    doesExist = true;
                }
                return stateItem;
            });
            if(doesExist){
                return {...state, cartItems: newState, cartCost: state.cartCost + item.price}
            }
            return {...state,
                        cartItems: [...state.cartItems, {...item, cartId: uuidv4()}],
                        cartCost: state.cartCost + item.price
                    }
        break;
        
        case "CART_REMOVE":
            return {...state,
                        cartItems: state.cartItems.filter(x => x.cartId !== action.payload.cartId),
                        cartCost: state.cartCost - action.payload.price
                    };
        break;

        case "CART_INCREASE":          
            const i  = action.payload;
            const findItem = state.cartItems.map((stateItem) => {
                if(stateItem.cartId === i.cartId){
                    stateItem.qty = stateItem.qty++
                }
                return stateItem
            });
            console.log(findItem.qty+1);
            return {...state, 
                    cartItems: findItem,
                    cartCost: state.cartCost + i.price }

        default:
            return state;
    }
}

export default cartReducer