import { useEffect } from 'react'
import { MODAL_BODY_TYPES, CONFIRMATION_MODAL_CLOSE_TYPES } from '../utils/globalConstantUtil'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../features/common/modalSlice'
import AddNewRestaurantModalBody from '../features/restaurants/components/AddNewRestaurantModalBody'
import EditRestaurantModalBody from '../features/restaurants/components/EditRestaurantModalBody'
import DeleteRestaurantModalBody from '../features/restaurants/components/DeleteRestaurantModalBody'
import AddNewFoodCategoryModal from '../features/foodCategory/components/AddNewFoodCategoryModal'
import DeleteFoodCategoryModal from '../features/foodCategory/components/DeleteFoodCategoryModal'
import EditFoodCategoryModal from '../features/foodCategory/components/EditFoodCategoryModal'


function ModalLayout() {

    const { isOpen, bodyType, size, extraObject, title } = useSelector(state => state.modal)
    const dispatch = useDispatch()

    const close = (e) => {
        dispatch(closeModal(e))
    }

    return (
        <>
            {/* The button to open modal */}

            {/* Put this part before </body> tag */}
            <div className={`modal ${isOpen ? "modal-open" : ""}`}>
                <div className={`modal-box  ${size === 'lg' ? 'max-w-5xl' : ''}`}>
                    <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={() => close()}>✕</button>
                    <h3 className="font-semibold text-2xl pb-6 text-center">{title}</h3>


                    {/* Loading modal body according to different modal type */}
                    {
                        {
                            [MODAL_BODY_TYPES.RESTAURANT_EDIT]: <EditRestaurantModalBody closeModal={close} extraObject={extraObject} />,
                            [MODAL_BODY_TYPES.RESTAURANT_ADD]: <AddNewRestaurantModalBody closeModal={close} extraObject={extraObject} />,
                            [CONFIRMATION_MODAL_CLOSE_TYPES.RESTAURANT_DELETE]: <DeleteRestaurantModalBody extraObject={extraObject} closeModal={close} />,

                            [MODAL_BODY_TYPES.FOOD_CATEGORY_ADD]: <AddNewFoodCategoryModal extraObject={extraObject} closeModal={close} />,
                            [MODAL_BODY_TYPES.FOOD_CATEGORY_EDIT]: <EditFoodCategoryModal extraObject={extraObject} closeModal={close} />,
                            [CONFIRMATION_MODAL_CLOSE_TYPES.FOOD_CATEGORY_DELETE]: <DeleteFoodCategoryModal extraObject={extraObject} closeModal={close} />,

                            [MODAL_BODY_TYPES.DEFAULT]: <div></div>
                        }[bodyType]
                    }
                </div>
            </div>
        </>
    )
}

export default ModalLayout