const initialState = {
    favoriteItems: []
}

const favoriteReducer = (state=initialState, action) => {
    switch(action.type) {
        case "ADD_TO_FAVORITE":
            const index = action.products.findIndex((product) => product.id === action.id)
            const selectedProduct = {...action.products[index], isFavorite: true}
            if(!state.favoriteItems.find((product) => product.id === action.id)) {
                state.favoriteItems.push(selectedProduct)
            }
            return {
                favoriteItems: [...state.favoriteItems]
            }
        case "REMOVE_FROM_FAVORITE":
            const newFavoriteItems = state.favoriteItems.filter((product) => product.id !== action.id)
            return {
                favoriteItems: [...newFavoriteItems]
            }
        default:
            return state
    }
}

export default favoriteReducer;