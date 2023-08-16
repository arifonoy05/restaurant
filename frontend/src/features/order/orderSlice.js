import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const orderSlice = createSlice({
    name: 'order',
    initialState: {
        isLoading: false,
        order: []
    },
    reducers: {
        getOrder: (state, action) => {
            state.order = action.payload
        },
        addOrder: (state, action) => {
            let { newOrderObj } = action.payload
            state.order = [...state.order, newOrderObj]
        },
        editOrder: (state, action) => {
            let { newOrderObj } = action.payload
            state.order = [...state.order, newOrderObj]
        },
        deleteOrder: (state, action) => {
            let { index } = action.payload
            state.order.splice(index, 1)
        }
    },

})

export const { getOrder, addOrder, editOrder, deleteOrder } = orderSlice.actions

export default orderSlice.reducer