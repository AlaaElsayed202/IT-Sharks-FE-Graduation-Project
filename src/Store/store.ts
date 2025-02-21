
import { configureStore } from '@reduxjs/toolkit';
import foodReducer from '../components/components/FoodSlice/foodslice';
import cartReducer from "../components/pages/Card/cartSlice";
const store = configureStore({
  reducer: {
    food: foodReducer,
    cart: cartReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;