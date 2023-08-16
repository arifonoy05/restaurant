// All components mapping with path for internal routes

import { lazy } from 'react'

const Dashboard = lazy(() => import('../pages/protected/Dashboard'))
const Restaurants = lazy(() => import('../pages/protected/Restaurant'))
const FoodCategory = lazy(() => import('../pages/protected/FoodCategory'))
const Dish = lazy(() => import('../pages/protected/Dish'))
const Order = lazy(() => import('../pages/protected/Order'))


const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/restaurants', // the url
    component: Restaurants, // view rendered
  },
  {
    path: '/food-category', // the url
    component: FoodCategory, // view rendered
  },
  {
    path: '/dish', // the url
    component: Dish, // view rendered
  },
  {
    path: '/order', // the url
    component: Order, // view rendered
  },
]

export default routes
