import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'

import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { editFoodCategory } from "../foodCategorySlice"

const EditFoodCategoryModal = ({ closeModal, extraObject }) => {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [foodCategoryObj, setFoodCategoryObj] = useState(extraObject)

    const updateRestaurant = () => {
        let newFoodCategoryObj = {
            "id": foodCategoryObj.id,
            "name": foodCategoryObj.name,
            "description": foodCategoryObj.description,
        }
        fetch('http://localhost:8080/api/food-category/update', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFoodCategoryObj)
        })
            .then(res => res.json())
            .then(res => {
                console.log(res);
                dispatch(editFoodCategory({ newFoodCategoryObj }))
                dispatch(showNotification({ message: "FoodCategory Updated!", status: 1 }))
            });

        closeModal()
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setFoodCategoryObj({ ...foodCategoryObj, [updateType]: value })
    }

    return (
        <>
            <InputText type="text" defaultValue={foodCategoryObj.name} updateType="name" containerStyle="mt-4" labelTitle="Name" updateFormValue={updateFormValue} />

            <InputText type="text" defaultValue={foodCategoryObj.description} updateType="description" containerStyle="mt-4" labelTitle="Description" updateFormValue={updateFormValue} />


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => updateRestaurant()}>Update</button>
            </div>
        </>
    )
}

export default EditFoodCategoryModal