import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getFoodCategoryContent = createAsyncThunk('http://localhost:8080/api/food-category/list', async () => {
    const response = await axios.get('http://localhost:8080/api/food-category/list', {})
    return response.data;
})


export const foodCategorySlice = createSlice({
    name: 'foodCategory',
    initialState: {
        isLoading: false,
        foodCategory: []
    },
    reducers: {
        addFoodCategory: (state, action) => {
            let { newFoodCategoryObj } = action.payload
            state.foodCategory = [...state.leads, newFoodCategoryObj]
        },

        deleteFoodCategory: (state, action) => {
            let { index } = action.payload
            state.foodCategory.splice(index, 1)
        }
    },

    extraReducers: {
        [getFoodCategoryContent.pending]: state => {
            state.isLoading = true
        },
        [getFoodCategoryContent.fulfilled]: (state, action) => {
            state.leads = action.payload.data
            state.isLoading = false
        },
        [getFoodCategoryContent.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const { addFoodCategory, deleteFoodCategory } = foodCategorySlice.actions

export default foodCategorySlice.reducer