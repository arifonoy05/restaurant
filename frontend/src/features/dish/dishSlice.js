import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const dishSlice = createSlice({
    name: 'dish',
    initialState: {
        isLoading: false,
        dish: []
    },
    reducers: {
        getDish: (state, action) => {
            state.dish = action.payload
        },
        addDish: (state, action) => {
            let { newDishObj } = action.payload
            state.dish = [...state.dish, newDishObj]
        },
        editDish: (state, action) => {
            let { newDishObj } = action.payload
            state.dish = [...state.dish, newDishObj]
        },
        deleteDish: (state, action) => {
            let { index } = action.payload
            state.dish.splice(index, 1)
        }
    },

})

export const { getDish, addDish, editDish, deleteDish } = dishSlice.actions

export default dishSlice.reducer