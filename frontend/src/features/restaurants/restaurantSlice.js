import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const getRestaurantDetails = createAsyncThunk('http://localhost:8080/api/restaurants/', async () => {
    const response = await axios.get('', {})
    return response.data;
})

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        isLoading: false,
        restaurant: []
    },
    reducers: {
        editRestaurant: (state, action) => {
            let { newrestaurantObj } = action.payload
            state.restaurant = [...state.restaurant, newrestaurantObj]
        },
        deleteRestaurant: (state, action) => {
            let { index } = action.payload
            state.restaurant.splice(index, 1)
        }
    },

    extraReducers: {
        [getRestaurantDetails.pending]: state => {
            state.isLoading = true
        },
        [getRestaurantDetails.fulfilled]: (state, action) => {
            state.leads = action.payload.data
            state.isLoading = false
        },
        [getRestaurantDetails.rejected]: state => {
            state.isLoading = false
        },
    }
})

export const { editRestaurant, deleteRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;