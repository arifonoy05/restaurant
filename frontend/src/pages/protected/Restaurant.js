import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setPageTitle } from '../../features/common/headerSlice'
import Restaurants from '../../features/restaurants'

function InternalPage() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setPageTitle({ title: "Restaurants" }))
    }, [])


    return (
        <Restaurants />
    )
}

export default InternalPage