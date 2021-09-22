import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../features/cart/cartSlice';
import formReducer from '../features/form/formSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    form: formReducer,
  },
});
