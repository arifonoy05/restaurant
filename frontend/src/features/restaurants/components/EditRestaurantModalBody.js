import { useState } from "react"
import { useDispatch } from "react-redux"
import InputText from '../../../components/Input/InputText'
import ToogleInput from "../../../components/Input/ToogleInput"
import ErrorText from '../../../components/Typography/ErrorText'
import { showNotification } from "../../common/headerSlice"
import { editRestaurant } from "../restaurantSlice"

function EditRestaurantModalBody({ closeModal, extraObject }) {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [restaurantData, setRestaurantData] = useState(extraObject)

    const updateRestaurant = () => {

        let newRestaurantObj = {
            "id": restaurantData.id,
            "name": restaurantData.name,
            "foundingYear": restaurantData.foundingYear,
            "email": restaurantData.email,
            "websiteUrl": restaurantData.websiteUrl,
            "phone": restaurantData.phone,
            "openingHours": restaurantData.openingHours,
            "capacity": restaurantData.capacity,
            "open": restaurantData.open ? true : false,
            "rating": restaurantData.rating,
            "address": restaurantData.address,
            "city": restaurantData.city
        }

        fetch('http://localhost:8080/api/restaurants/update', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newRestaurantObj)
        }).then(res => res.json())
            .then(res => {
                dispatch(editRestaurant({ newRestaurantObj }))
                dispatch(showNotification({ message: "Restaurant Updated!", status: 1 }))
            });

        closeModal()
    }

    const updateFormValue = ({ updateType, value }) => {
        setErrorMessage("")
        setRestaurantData({ ...restaurantData, [updateType]: value })
    }

    return (
        <>
            <InputText type="text" defaultValue={restaurantData.name} updateType="name" containerStyle="mt-4" labelTitle="name" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.foundingYear} updateType="foundingYear" containerStyle="mt-4" labelTitle="foundingYear" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.email} updateType="email" containerStyle="mt-4" labelTitle="email" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.websiteUrl} updateType="websiteUrl" containerStyle="mt-4" labelTitle="websiteUrl" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.phone} updateType="phone" containerStyle="mt-4" labelTitle="phone" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.openingHours ? restaurantData.openingHours : ""} updateType="openingHours" containerStyle="mt-4" labelTitle="openingHours" updateFormValue={updateFormValue} />
            <InputText type="number" defaultValue={restaurantData.capacity} updateType="capacity" containerStyle="mt-4" labelTitle="capacity" updateFormValue={updateFormValue} />
            <ToogleInput updateType="open" labelTitle="open" defaultValue={restaurantData.open} updateFormValue={updateFormValue} />
            <InputText type="number" defaultValue={restaurantData.rating} updateType="rating" containerStyle="mt-4" labelTitle="rating" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.address} updateType="address" containerStyle="mt-4" labelTitle="address" updateFormValue={updateFormValue} />
            <InputText type="text" defaultValue={restaurantData.city} updateType="city" containerStyle="mt-4" labelTitle="city" updateFormValue={updateFormValue} />

            <ErrorText styleClass="mt-16">{errorMessage}</ErrorText>
            <div className="modal-action">
                <button className="btn btn-ghost" onClick={() => closeModal()}>Cancel</button>
                <button className="btn btn-primary px-6" onClick={() => updateRestaurant()}>Update</button>
            </div>
        </>
    )
}

export default EditRestaurantModalBody