import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import OrdersListsItem from '../components/OrdersListsItem'
import OrderServices from '../services/OrderServices'

function AllOrders() {
    const [orders, setOrders] = useState([])
    const [show, setShow] = useState(false);

    useEffect(() => {
        OrderServices.all()
          .then((data) => {
            setOrders(data.orders)
          })


    },[])


    return (
        <>  
            <div className="flex">
                <h1 className="text-3xl font-medium">All Orders</h1>   
                <button className="bg-transparent font-thin text-black" onClick={() => setShow(!show)} > Show </button>
            </div>
                { orders && orders.map((order) => (
                    <OrdersListsItem order={order} key={order._id} show={show} />
                ))}
        </>       
    )
}

export default AllOrders
