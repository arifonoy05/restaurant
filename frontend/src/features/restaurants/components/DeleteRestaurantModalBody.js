import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { CONFIRMATION_MODAL_CLOSE_TYPES, MODAL_CLOSE_TYPES } from '../../../utils/globalConstantUtil'
import { deleteRestaurant } from '../../restaurants/restaurantSlice'
import { showNotification } from "../../common/headerSlice"

function DeleteRestaurantModalBody({ extraObject, closeModal }) {

    const dispatch = useDispatch()

    const { message, type, _id, index } = extraObject


    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.RESTAURANT_DELETE) {
            // positive response, call api or dispatch redux function
            console.log(index);
            dispatch(deleteRestaurant({ index }))

            fetch('http://localhost:8080/api/restaurants/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(index)
            }).then(res => res.json())
                .then(res => {
                    dispatch(showNotification({ message: "Restaurant Deleted!", status: 1 }))
                });

            closeModal()
        }
        closeModal()
    }

    return (
        <>
            <p className=' text-xl mt-8 text-center'>
                {message}
            </p>

            <div className="modal-action mt-12">

                <button className="btn btn-outline   " onClick={() => closeModal()}>Cancel</button>

                <button className="btn btn-primary w-36" onClick={() => proceedWithYes()}>Yes</button>

            </div>
        </>
    )
}

export default DeleteRestaurantModalBody