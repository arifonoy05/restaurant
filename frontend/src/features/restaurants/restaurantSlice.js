import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

// export const getRestaurants = createAsyncThunk('restaurant/get', async () => {
//     const data = await fetch('http://localhost:8080/api/restaurants/list');
//     const result = data.data;
//     console.log(data);
//     return result;
// })

export const restaurantSlice = createSlice({
    name: 'restaurant',
    initialState: {
        isLoading: false,
        restaurant: []
    },
    reducers: {
        getRestaurants: (state, action) => {
            state.restaurant = action.payload
        },
        addRestaurant: (state, action) => {
            let { newrestaurantObj } = action.payload
            state.restaurant = [...state.restaurant, newrestaurantObj]
        },
        editRestaurant: (state, action) => {
            let { newrestaurantObj } = action.payload
            state.restaurant = [...state.restaurant, newrestaurantObj]
        },
        deleteRestaurant: (state, action) => {
            let { index } = action.payload
            state.restaurant.splice(index, 1)
        }
    },

    // extraReducers: {
    //     [getRestaurantsApi.pending]: state => {
    //         state.isLoading = true
    //     },
    //     [getRestaurantsApi.fulfilled]: (state, action) => {
    //         state.restaurant = action.payload
    //         state.isLoading = false
    //     },
    //     [getRestaurantsApi.rejected]: state => {
    //         state.isLoading = false
    //     },
    // }
})



export const { getRestaurants, addRestaurant, editRestaurant, deleteRestaurant } = restaurantSlice.actions;

export default restaurantSlice.reducer;


export function getRestaurantsApi() {
    return async function getRestaurantsThunk(dispatch, getState) {
        const data = await fetch('http://localhost:8080/api/restaurants/list');
        const result = data.json;
        console.log(data);
        // dispatch(getRestaurants(result))

        // const response = await axios.get('http://localhost:8080/api/restaurants/list', {})
        // const data = response.data;
        // console.log(data);
        dispatch(getRestaurants(data))
    }
}