import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

function CartItem({ item }) {

    const { cartDispatch, cart } = useContext(MainContext);
    console.log(cart);
    const removeHandle = (item) => {
        cartDispatch({ type: "CART_REMOVE" , payload: item});
    } 

    const increaseHandle = () => cartDispatch({ type: "CART_INCREASE", payload: item});
    const decreaseHandle = () => cartDispatch({ type: "CART_DECREASE", payload: item});

    return (
        <div className="flex flex-col mt-4 bg-white w-full rounded-sm shadow-md max-w-full" style={{minWidth: "788px"}}>
            <div className="shadow-sm py-1 px-3">
                <button className="text-bold text-2xl" onClick={() => removeHandle(item)}>&times;</button>
            </div>
                <div className="flex p-3 space-x-4">
                    <div className="w-1/4d bg-yellow-200a">
                            <img 
                            src={item.image}
                            alt="1"
                            className="w-24 h-32"
                            />
                    </div>
                    <div className="flex flex-wrap w-2/4 pl-5 items-center space-x-1">
                        <h1 className="flex-auto text-xl font-semibold">
                             {item.name}
                        </h1>
                        <p>{item.size}</p>
                        <p>{item.color}</p>
                        <div className="text-xl font-semibold text-gray-500">
                            ${item.price}
                        </div>
                    </div>
                    <div className="flex flex-grow justify-end space-x-3 pr-3 bg-green-40d0 items-center ">
                        <button 
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm text-xl font-semibold"
                            onClick={() => increaseHandle(item)}
                        >-</button>
                        <h2 className="w-9 h-9 text-xl bg-gray-300 flex items-center justify-center rounded-sm">{item.qty}</h2>
                        <button 
                            className="w-9 h-9 flex items-center justify-center bg-black text-white rounded-sm text-xl font-semibold"
                            onClick={() => increaseHandle(item)}
                        >+</button>
                    </div>
                </div>
            </div>
    )
}

export default CartItem
