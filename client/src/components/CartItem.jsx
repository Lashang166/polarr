import React, { useContext } from 'react'
import { MainContext } from '../context/MainContext'

function CartItem({ item }) {

    const { cartDispatch, cart } = useContext(MainContext);
    const removeHandle = (item) => {
        cartDispatch({ type: "CART_REMOVE" , payload: item});
    } 


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
                    <div className="flex flex-wrap w-2/4 pl-5 items-center space-x-4">
                        <h1 className="flex-auto/ text-xl font-semibold">
                             {item.name}
                        </h1>
                        <p>Size: {item.size}</p>
                        <div className="flex space-x-3 items-center">
                        Color: 
                        <div 
                            className={`w-9 h-9 border-2 ml-1 text-xl bg-${item.color} flex items-center justify-center rounded-sm`}
                        ></div>
                        </div>
                        <div className="text-xl font-semibold text-gray-500">
                            ${item.price}
                        </div>
                        <div>QTY: {item.qty}</div>
                    </div>
                    
                </div>
            </div>
    )
}

export default CartItem
