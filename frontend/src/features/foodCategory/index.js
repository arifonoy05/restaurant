import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TitleCard from "../../components/Cards/TitleCard"
import { openModal } from "../common/modalSlice"
import { getFoodCategoryContent } from "./foodCategorySlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_BODY_TYPES } from '../../utils/globalConstantUtil'
import TrashIcon from '@heroicons/react/24/outline/TrashIcon'
import { showNotification } from '../common/headerSlice'

const TopSideButtons = () => {

    const dispatch = useDispatch()

    const openAddNewFoodCategoryModal = () => {
        dispatch(openModal({ title: "Add New FoodCategory", bodyType: MODAL_BODY_TYPES.FOOD_CATEGORY_ADD }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewFoodCategoryModal()}>Add New</button>
        </div>
    )
}

function FoodCategory() {
    const [foodCategoryData, setFoodCategoryData] = useState([]);
    const { foodCategory } = useSelector(state => state.foodCategory)
    const dispatch = useDispatch()

    function callYourAPI() {
        fetch('http://localhost:8080/api/food-category/list')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setFoodCategoryData(data);
                console.log(data);
            })
    };

    useEffect(() => {
        callYourAPI()
        // dispatch(getFoodCategoryContent())
    }, [])

    const DisplayData = foodCategoryData.map((l, k) => {
        return (
            <tr key={k}>
                <td>{l.name}</td>
                <td>{l.description}</td>
                <td>
                    <div className="join join-horizontal lg:join-horizontal">
                        <button className="btn btn-sm btn-primary join-item" onClick={() => editFoodCategory(l)}> Edit</button>
                        <button className="btn btn-sm btn-danger join-item" onClick={() => deleteFoodCategory(k)}> Delete</button>
                    </div>
                </td>
            </tr>
        )
    })

    const editFoodCategory = (index) => {
        dispatch(openModal({
            title: "Edit FoodCategory", bodyType: MODAL_BODY_TYPES.FOOD_CATEGORY_EDIT,
            extraObject: index
        }))
    }

    const deleteFoodCategory = (index) => {
        dispatch(openModal({
            title: "Confirmation", bodyType: CONFIRMATION_MODAL_CLOSE_TYPES.FOOD_CATEGORY_DELETE,
            extraObject: { message: `Are you sure you want to delete this FoodCategory?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.FOOD_CATEGORY_DELETE, index }
        }))
    }

    return (
        <>

            <TitleCard title="Current foodCategory" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>

                {/* foodCategory List in table format loaded from slice after api call */}
                <div className="overflow-x-auto">
                    <table className="table min-w-full">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Description</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                            {/* {
                                foodCategory.map((l, k) => {
                                    return (
                                        <tr key={k}>
                                            <td>{l.name}</td>
                                            <td>{l.description}</td>
                                            <td>
                                                <button className="btn btn-square btn-ghost" onClick={() => editFoodCategory(l)}> Edit</button>
                                                <button className="btn btn-square btn-ghost" onClick={() => deleteFoodCategory(k)}><TrashIcon className="w-5" /></button>
                                            </td>
                                        </tr>
                                    )
                                })
                            } */}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default FoodCategory