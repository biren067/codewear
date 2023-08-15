import { createSlice } from '@reduxjs/toolkit'

export const CartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        // : 0,
        cartitems: []
    },
    reducers: {
        addToCart: (state, items) => {
            let newCart = items.payload
            console.log("state::", items.payload)
            if (state.cartitems.length === 0)
                console.log("Length of cart " + state.cartitems.length)

            // console.log(typeof (state.cartitems.keys()))
            state.cartitems.push({ name: newCart.name, price: newCart.price })
            console.log("Length of cart " + state.cartitems.length)
            // console.log(Object.keys(state.cartitems))
            let totalItems = Object.keys(state.cartitems).length
            // state.cartitems.push(state.cartitems)
            state.cartitems.map((row) => {
                console.log(row.name)
                console.log("map")
            })
            // for (let i = 0; i < totalItems; i++) {
            //     console.log(state.cartitems)
            // }
            // console.log("initialState::" + state.cartitems)

        },
        // updatePrice: (state, items) => {
        //     console.log("items::", items)
        //     state.value = items.payload
        //     console.log(state.value)
        // }
    }
})

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;