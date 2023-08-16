import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import restaurantSlice from '../features/restaurants/restaurantSlice'
import foodCategorySlice from '../features/foodCategory/foodCategorySlice'
import dishSlice from '../features/dish/dishSlice'
import orderSlice from '../features/order/orderSlice'

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  restaurant: restaurantSlice,
  foodCategory: foodCategorySlice,
  dish: dishSlice,
  order: orderSlice
}

export default configureStore({
  reducer: combinedReducer
})