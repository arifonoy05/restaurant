/** Icons are imported separatly to reduce build time */
import Squares2X2Icon from '@heroicons/react/24/outline/Squares2X2Icon'
import Bars3Icon from '@heroicons/react/24/outline/Bars3Icon'
import BanknotesIcon from '@heroicons/react/24/outline/BanknotesIcon'
import BuildingOffice from '@heroicons/react/24/outline/BuildingOfficeIcon'

const iconClasses = `h-6 w-6`

const routes = [
  {
    path: '/dashboard',
    icon: <Squares2X2Icon className={iconClasses} />,
    name: 'Dashboard',
  },
  {
    path: '/restaurants',
    icon: <BuildingOffice className={iconClasses} />,
    name: 'Restaurants',
  },
  {
    path: '/food-category',
    icon: <BuildingOffice className={iconClasses} />,
    name: 'Food Category',
  },
  {
    path: '/dish',
    icon: <Bars3Icon className={iconClasses} />,
    name: 'Dish',
  },
  {
    path: '/order',
    icon: <BanknotesIcon className={iconClasses} />,
    name: 'Order',
  },
]

export default routes


