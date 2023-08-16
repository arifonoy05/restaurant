import { useDispatch, useSelector } from 'react-redux'
import { deleteFoodCategory } from '../foodCategorySlice'
import { showNotification } from "../../common/headerSlice"
import { CONFIRMATION_MODAL_CLOSE_TYPES } from '../../../utils/globalConstantUtil'

const DeleteFoodCategoryModal = ({ extraObject, closeModal }) => {
    const dispatch = useDispatch()

    const { message, type, _id, index } = extraObject


    const proceedWithYes = async () => {
        if (type === CONFIRMATION_MODAL_CLOSE_TYPES.FOOD_CATEGORY_DELETE) {
            // positive response, call api or dispatch redux function
            dispatch(deleteFoodCategory({ index }))

            fetch('http://localhost:8080/api/food-category/delete', {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json, text/plain, */*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(index)
            }).then(res => res.json())
                .then(res => {
                    dispatch(showNotification({ message: "Food Category Deleted!", status: 1 }))
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

export default DeleteFoodCategoryModal