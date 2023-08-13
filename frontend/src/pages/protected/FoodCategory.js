import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import FoodCategory from '../../features/foodCategory'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "FoodCategory" }))
    }, [])


    return (
        <FoodCategory />
    )
}

export default InternalPage