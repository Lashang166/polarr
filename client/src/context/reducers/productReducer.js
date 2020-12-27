

const productReducer = (state, action) => {
    switch(action.type){
        case "PRODUCT_FETCH":
            return {
                ...state, products: action.payload
            };
        case "PRODUCT_FETCHONE":
                return {
                    ...state,
                    product: action.payload,
                }



        default:
            return state
    }
}


export default productReducer;