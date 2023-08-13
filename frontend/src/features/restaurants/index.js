import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { openModal } from "../common/modalSlice"
import TitleCard from "../../components/Cards/TitleCard"
import { getRestaurantContent } from './restaurantSlice';

import { MODAL_BODY_TYPES, CONFIRMATION_MODAL_CLOSE_TYPES } from '../../utils/globalConstantUtil'

const TopSideButtons = () => {
    const dispatch = useDispatch()
    const openAddNewRestaurantModal = () => {
        dispatch(openModal({ title: "Add New Restaurant", bodyType: MODAL_BODY_TYPES.RESTAURANT_ADD }))
    }

    return (
        <div className="inline-block float-right">
            <button className="btn px-6 btn-sm normal-case btn-primary" onClick={() => openAddNewRestaurantModal()}>Add New</button>
        </div>
    )
}

const Restaurants = () => {

    const { restaurant } = useSelector(state => state.restaurant)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRestaurantContent())
    }, [])

    const openEditRestaurantModal = (item) => {
        dispatch(openModal({ title: "Edit Restaurant", bodyType: MODAL_BODY_TYPES.RESTAURANT_EDIT, extraObject: item }))
    }
    const openDeleteRestaurantModal = (index) => {
        dispatch(openModal({
            title: "Confirmation", bodyType: CONFIRMATION_MODAL_CLOSE_TYPES.RESTAURANT_DELETE,
            extraObject: { message: `Are you sure you want to delete this restaurant?`, type: CONFIRMATION_MODAL_CLOSE_TYPES.RESTAURANT_DELETE, index: index }
        }))
    }

    // const tableData = response.sort((a,b) => a.id > b.id ? 1 : -1 )

    const DisplayData = restaurant.sort((a, b) => a.id > b.id ? 1 : -1).map(
        (item) => {
            return (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.foundingYear}</td>
                    <td>{item.email}</td>
                    <td>{item.websiteUrl}</td>
                    <td>{item.phone}</td>
                    <td>{item.openingHours ? item.openingHours : "N/A"}</td>
                    <td>{item.capacity}</td>
                    <td>{item.open ? "Open" : "Closed"}</td>
                    <td>{item.rating}</td>
                    <td>{item.address}</td>
                    <td>{item.city}</td>
                    <td>
                        <div className="join join-horizontal lg:join-horizontal">
                            <button className="btn btn-sm btn-primary join-item" onClick={() => openEditRestaurantModal(item)}>Edit</button>
                            <button className="btn btn-sm btn-danger join-item" onClick={() => openDeleteRestaurantModal(item.id)}>Delete</button>
                        </div>
                    </td>
                </tr>
            )

        }
    )

    return (
        <>
            <TitleCard title="List of Restaurants" topMargin="mt-2" TopSideButtons={<TopSideButtons />}>
                <div className="overflow-x-auto">
                    <table className="table min-w-full ">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>name</th>
                                <th>founding Year</th>
                                <th>email</th>
                                <th>website</th>
                                <th>phone</th>
                                <th>opening Hours</th>
                                <th>capacity</th>
                                <th>is Open</th>
                                <th>rating</th>
                                <th>address</th>
                                <th>city</th>
                                <th className='text-center'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {DisplayData}
                        </tbody>
                    </table>
                </div>
            </TitleCard>
        </>
    )
}

export default Restaurants