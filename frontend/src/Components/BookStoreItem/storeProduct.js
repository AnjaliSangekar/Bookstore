import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartProduct';

const store = configureStore({
    reducer: {  
        cart: cartReducer ,
        
    },
})

export default store;
