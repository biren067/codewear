import { createSlice } from '@reduxjs/toolkit'



const nofity = (value) => {
    // toast.configure()
    // toast(value)
    console.log(value)
}

export const CartSlice = createSlice({
    name: 'cartItems',
    initialState: {
        cartitems: []
    },
    reducers: {
        addToCart: (state, action) => {
            let payload = action.payload
            console.log("state::", payload)
            const keys = Object.keys(state.cartitems)
            // console.log("Keys::", keys, typeof keys)
            let newItem = true
            if (keys.length == 0) {
                state.cartitems.push(payload)
                // toast(' is added in cart')
                newItem = false
            } else {
                for (let i = 0; i < keys.length; i++) {
                    if (payload.name === state.cartitems[i].name) {
                        state.cartitems[i].quantity = state.cartitems[i].quantity + 1
                        // state.cartitems.push(payload)
                        newItem = false
                        console.log("Items alrealy exist")
                    }
                }
            }
            if (newItem === true) {
                state.cartitems.push(payload)
                console.log(keys)
                console.log("Item Added", state.cartitems)
            }

        },
        removeFromCart: (state, action) => {
            let isItemExists = false
            let keys = Object.keys(state.cartitems)
            for (let i = 0; i < keys.length; i++) {
                if (state.cartitems[i].name == action.payload.name) {
                    state.cartitems[i].quantity = state.cartitems[i].quantity - 1
                    if (state.cartitems[i].quantity === 0) {
                        state.cartitems.splice(i, 1)
                        break
                    }
                }
                isItemExists = true

            }
            if (isItemExists == true) {
                console.log("Items has been removed")
            } else {
                console.log("Items does not removed")
            }

        },
        cleanCart: (state, action) => {
            console.log("Cleaning")
            state.cartitems = []
        }

    }
}
)

export const { addToCart, removeFromCart, cleanCart } = CartSlice.actions;
export default CartSlice.reducer;