import { combineReducers } from "redux";

// reducers
import cartReducer from "./cart/cartReducer";
import favoriteReducer from "./favorite/favoriteReducer";
import productsReducer from "./products/productsReducer";

const rootReducer = combineReducers({
    productsState: productsReducer,
    cartState: cartReducer,
    favoriteState: favoriteReducer
})

export default rootReducer;