// actions/cartActions.js
export const addToCart = (item) => {
    return {
      type: 'ADD_TO_CART',
      payload: item
    };
  };
  
  export const removeFromCart = (itemId) => {
    console.log("cartAction")
    return {
      type: 'REMOVE_FROM_CART',
      payload: itemId
    };
  };
  