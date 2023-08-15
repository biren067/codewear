import { configureStore } from '@reduxjs/toolkit'
import CartSlice from '../redux_states/cartSlice'
export default configureStore({
    reducer: {
        cartItems: CartSlice,
    }
})