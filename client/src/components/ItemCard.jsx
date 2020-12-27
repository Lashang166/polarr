import React from 'react'
import { Link } from 'react-router-dom'
function ItemCard({ item }) {
    return (
            <div className="relative overflow-hidden max-w-full">
                <div className="w-full h-full bg-white absolute opacity-0 hover:opacity-75 flex flex-col justify-center">
                    <button className="w-full h-10 bg-white font-semibold uppercase">add to cart</button>
                </div>
                <img 
                    src={item && item.images[0]}
                    alt="1"
                    className=" h-auto max-w-full mx-0 my-auto"
                />
                <div className="text-left  p-3 absolute bottom-0 bg-white w-full">
                    <Link to={`/product/${item && item._id}`}  className="font-thin text-sm text-gray-600 hover:text-red-500">{item && item.name}</Link>
                    <h3 className="font-semibold">${item && item.price}</h3>
                </div>
            </div>
            
            
 
    )
}

export default ItemCard
    