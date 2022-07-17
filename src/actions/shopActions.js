'use strict'

// Shop action types for the Redux Store.
// Actions specific to fetching and updating the shopping cart.
export const FETCH_CART = 'FETCH_CART';
export const FETCH_CART_SUCCESS = 'FETCH_CART_SUCCESS';
export const FETCH_CART_FAILURE = 'FETCH_CART_FAILURE';
export const CART_ADD_ITEM = 'CART_ADD_ITEM';
export const CART_ADD_ITEM_SUCCESS = 'CART_ADD_ITEM_SUCCESS';
export const CART_ADD_ITEM_FAILURE = 'CART_ADD_ITEM_FAILURE';
export const CART_REMOVE_ITEM = 'CART_REMOVE_ITEM';
export const CART_REMOVE_ITEM_SUCCESS = 'CART_REMOVE_ITEM_SUCCESS';
export const CART_REMOVE_ITEM_FAILURE = 'CART_REMOVE_ITEM_FAILURE';



// Action creators for the Redux Store.
export const fetchCart = () => ({
    type: FETCH_CART
});

export const fetchCartSuccess = (shoppingCart) => ({
    type: FETCH_CART_SUCCESS,
    payload: shoppingCart
});

export const fetchCartFailure = (cartErr) => ({
    type: FETCH_CART_FAILURE,
    payload: cartErr.payload,
    error: cartErr.error
});

export const cartAddItem = () => ({
    type: CART_ADD_ITEM
});

export const cartAddItemSuccess = (item) => ({
    type: CART_ADD_ITEM_SUCCESS,
    payload: item
});

export const cartAddItemFailure = (cartErr) => ({
    type: CART_ADD_ITEM_FAILURE,
    payload: cartErr.payload,
    error: cartErr.error
});

export const cartRemoveItem = () => ({
    type: CART_REMOVE_ITEM
});

export const cartRemoveItemSuccess = (item) => ({
    type: CART_REMOVE_ITEM_SUCCESS,
    payload: item
});

export const cartRemoveItemFailure = (cartErr) => ({
    type: CART_REMOVE_ITEM_FAILURE,
    payload: cartErr.payload,
    error: cartErr.error
});

// Cart actions for the Redux Store.
export function addItemToCart(item) {
    return async (dispatch) => {
        dispatch(cartAddItem());
        try {
            dispatch(cartAddItemSuccess(item));
        } catch (err) {
            dispatch(cartAddItemFailure({
                payload: err,
                error: true
            }));
        }
    }
}

export function removeItemFromCart(item) {
    return async (dispatch) => {
        dispatch(cartRemoveItem());
        try {
            dispatch(cartRemoveItemSuccess(item));
        } catch (err) {
            dispatch(cartRemoveItemFailure({
                payload: err,
                error: true
            }));
        }
    }
}

// Authorization actions for the Redux Store.
// export function authorizeLogin(usernameOrEmail, password) {
//     return async (dispatch) => {
//         dispatch(loginUser());
//         try {
//             await checkIfAuthorized().then(async (res) => {
//                 if (res.authenticated) {
//                     dispatch(loginUserSuccess({userId: res.payload.userId}));
//                     dispatch(getUserPreferences(res.payload.userId));
//                 } else {
//                     await authorizeUser(usernameOrEmail, password).then((results) => {  
//                         if (!results) dispatch(loginUserFailure({error: false}));
//                         else {
//                             dispatch(loginUserSuccess({userId: results.payload.userId}));
//                             dispatch(getUserPreferences(results.payload.userId));
//                         }
//                     }).catch((err) => {
//                         console.log(err);
//                         // Handle the error here...
//                         dispatch(loginUserFailure({
//                             payload: err,
//                             error: true
//                         }));
//                     });
//                 }
//             });
//         } catch (err) {
//             dispatch(loginUserFailure({
//                 payload: err,
//                 error: true
//             }));
//         }
//     }
// }

// export function setFavoriteCharacter(userId, characterId) {
//     return async (dispatch) => {
//         dispatch(setUserPreferences());
//         try {
//             await updateFavoriteCharacter(userId, characterId).then((res) => {
//                 if (res.data) dispatch(setUserPreferencesSuccess(characterId));
//                 else dispatch(setUserPreferencesFailure({data: res.data, error: true}));
//             });
//         } catch (err) {
//             console.log(err);
//             dispatch(setUserPreferencesFailure({
//                 payload: err,
//                 error: true
//             }));
//         }
//     }
// }