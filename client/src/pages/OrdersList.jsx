import React,{useState, useEffect}  from 'react'
import OrdersListsItem from '../components/OrdersListsItem'
import OrderServices from '../services/OrderServices';

function OrdersList() {
    const [orders, setOrders] = useState([]);
    const [show, setShow] = useState(false);

    useEffect(() => {
        OrderServices.myorder()
            .then(data => {
                if(data){
                setOrders(data.order)
            }
            });
    }, [])

    return (
        <>
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-medium">My Orders</h1>   
                <button className="bg-transparent font-thin text-black" onClick={() => setShow(!show)} > Show </button>
            </div>            
            {orders.length > 0 ? orders.map((order) => (
                <OrdersListsItem order={order} key={order._id}  show={show}  />
            ))
                : <h1 className="font-medium text-gray-400 text-center text-3xl mt-20">---------------No Order---------------</h1>
            }
        </>
    )
}

export default OrdersList
