import React  from 'react'

function OrdersListsItem({order ,show}) {

    return (
        <>
            <div class="divide-y divide-light-gray-400 relative">
                <div className="flex">
                    <h1 className="my-4 font-medium">#{order._id} for {order.userId.username}</h1>
                </div>
                <div className={`${show ? "block relative" : "hidden -top-2 absolute"} transition-all duration-750 ease-in   w-full h-auto`}>
                    <div className="mt-3 p-3">
                        <div className="flex flex-col">
                            <div className="flex justify-between md:w-2/4">
                                <p className="text-gray-500">Items</p>
                                <p>{order.orderItems.length}</p>
                            </div>
                            <ul className="ml-5 list-decimal">
                            {order.orderItems.map(item => (
                                    <li>{item.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="mt-3 p-3">
                        <div className="flex justify-between md:w-2/4">
                            <p className="text-gray-500">Shipping</p>
                            <p>{order.address}</p>
                        </div>
                    </div>
                    <div className="mt-3 p-3">
                        <div className="flex justify-between md:w-2/4">
                            <p className="text-gray-500">Payment</p>
                            <p class="uppercase">{order.payment}</p>
                        </div>
                    </div>
                    <div className="mt-3 p-3">
                        <div className="flex justify-between md:w-2/4">
                            <p className="text-gray-500">Status</p>
                            <p>{order.isPaid ? "Process" : "not paid yet"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OrdersListsItem
