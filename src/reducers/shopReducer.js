import * as actions from '../actions/shopActions'

/*
 * Items to be added in this sort of a format:
 * {
 *  itemId: itemcount
 * }
 * EX:
 * {
 * 1saer32: 2,
 * ui87s2a: 1
 * }
 * Where the item's UUID is the key, and the value is the count of the items.
 * We don't need all of the details in the store? At least not for now. Perhaps later it might be nice to cache all the details for less DB calls.
 * If we want all the details and the speed of a map rather than an array, we can replace the item count with an object full of count and all details.
 */
const initState = {
    cart: {
        totalCount: 0,
        subTotal: 0,
        items: {}
    },
    loading: false
};

const shopReducer = (state = initState, action) => {
    let cart;
    switch (action.type) {
        // Shopping Cart Actions
        case actions.FETCH_CART:
            return { ...state, loading: true };
        case actions.FETCH_CART_SUCCESS:
            return { ...state, loading: false };
        case actions.FETCH_CART_FAILURE:
            return { ...state, loading: false };
        case actions.CART_ADD_ITEM:
            return { ...state, loading: true };
        case actions.CART_ADD_ITEM_SUCCESS:
            cart = {...state.cart};
            if (action.payload != null) {
                // If item is in the cart, add on the new amount, else add the new amount from 0 and set the details.
                if (cart.items.hasOwnProperty(action.payload.itemId)) {
                    cart.items[action.payload.itemId].count += action.payload.itemCount;
                    cart.subTotal += action.payload.itemCount * cart.items[action.payload.itemId].price;
                }
                else {
                    cart.items[action.payload.itemId] = {
                        name: action.payload.itemName,
                        count: action.payload.itemCount,
                        image: action.payload.itemImage,
                        price: action.payload.itemPrice
                    };
                    cart.subTotal += action.payload.itemPrice
                }
                cart.totalCount += action.payload.itemCount;
                
            }
            return { ...state, cart: cart, loading: false }; 
        case actions.CART_ADD_ITEM_FAILURE:
            // Something went wrong, figure out how to handle it / display a message to try again?
            return { ...state, loading: false };
        case actions.CART_REMOVE_ITEM:
            return { ...state, loading: true };
        case actions.CART_REMOVE_ITEM_SUCCESS:
            cart = {...state.cart};
            if (action.payload != null) {
                // If item is in the cart, remove the amount, if it would be 0, remove it from the cart.
                if (cart.items.hasOwnProperty(action.payload.itemId)) {
                    if (action.payload.itemCount === -1) {
                        // If remove count is -1, we want to completely remove ALL of the item.
                        cart.totalCount -= cart.items[action.payload.itemId].count;
                        cart.subTotal -= cart.items[action.payload.itemId].price * cart.items[action.payload.itemId].count;
                        delete cart.items[action.payload.itemId];
                    }
                    else {
                        let count = cart.items[action.payload.itemId].count;
                        count -= action.payload.itemCount;
                        if (count <= 0)  {
                            cart.totalCount -= cart.items[action.payload.itemId].count;
                            cart.subTotal -= cart.items[action.payload.itemId].price * cart.items[action.payload.itemId].count;
                            delete cart.items[action.payload.itemId];
                        }
                        else {
                            cart.totalCount -= action.payload.itemCount;
                            cart.subTotal -= action.payload.itemCount * cart.items[action.payload.itemId].price;
                            cart.items[action.payload.itemId].count = count;
                        }
                            
                    }
                }
            }
            return { ...state, cart: cart, loading: false }; 
        case actions.CART_REMOVE_ITEM_FAILURE:
            // Something went wrong, figure out how to handle it / display a message to try again?
            return { ...state, loading: false };
        default:
            return state;
    }
}

export default shopReducer;