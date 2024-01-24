import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cartSlice";
import favReducer from "../features/favSlice";
 const store = configureStore({
  reducer: {allCart: cartReducer,
  allFav:favReducer },
  
});

export default store