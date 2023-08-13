import { configureStore } from '@reduxjs/toolkit'
import headerSlice from '../features/common/headerSlice'
import modalSlice from '../features/common/modalSlice'
import rightDrawerSlice from '../features/common/rightDrawerSlice'
import leadsSlice from '../features/leads/leadSlice'
import restaurantSlice from '../features/restaurants/restaurantSlice'
import foodCategorySlice from '../features/foodCategory/foodCategorySlice'

const combinedReducer = {
  header: headerSlice,
  rightDrawer: rightDrawerSlice,
  modal: modalSlice,
  lead: leadsSlice,
  restaurant: restaurantSlice,
  foodCategory: foodCategorySlice
}

export default configureStore({
  reducer: combinedReducer
})