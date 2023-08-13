import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { addFoodCategory } from "../foodCategorySlice"

const INITIAL_FOOD_CATEGORY_OBJ = {
    first_name: "",
    last_name: "",
    email: ""
}

function AddNewFoodCategoryModal({ closeModal }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [foorCategoryObj, setFoorCategoryObj] = useState(INITIAL_FOOD_CATEGORY_OBJ)
    const saveNewFoorCategory = () => {
        if (foorCategoryObj.first_name.trim() === "") return setErrorMessage("First Name is required!")
        else if (foorCategoryObj.email.trim() === "") return setErrorMessage("Email id is required!")
        else {
            let newFoorCategoryObj = {
                "id": 7,
                "email": foorCategoryObj.email,
                "first_name": foorCategoryObj.first_name,
                "last_name": foorCategoryObj.last_name,
                "avatar": "https://reqres.in/img/faces/1-image.jpg"
            }
            dispatch(addFoodCategory({ newFoorCategoryObj }))
            dispatch(showNotification({ message: "New FoorCategory Added!", status: 1 }))
            closeModal()
        }
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setFoorCategoryObj({ ...foorCategoryObj, [updateType]: value })
    }

    return (
        <>

            <InputText type="text" defaultValue={foorCategoryObj.first_name} updateType="first_name" containerStyle="mt-4" labelTitle="First Name" updateFormValue={updateFormValue} />

            <InputText type="text" defaultValue={foorCategoryObj.last_name} updateType="last_name" containerStyle="mt-4" labelTitle="Last Name" updateFormValue={updateFormValue} />

            <InputText type="email" defaultValue={foorCategoryObj.email} updateType="email" containerStyle="mt-4" labelTitle="Email Id" updateFormValue={updateFormValue} />


            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => saveNewFoorCategory()}>Save</button>
            </div>
        </>
    )
}

export default AddNewFoodCategoryModal