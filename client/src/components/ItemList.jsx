import React from 'react';
import { Link } from 'react-router-dom'

function ItemList({item, image}) {
    return (
        <div className="flex flex-col mt-4 bg-white w-full rounded-sm shadow-md max-w-full" style={{minWidth: "788px"}}>
            <div className="shadow-sm py-1 px-3">
                <button className="text-bold text-2xl" >&times;</button>
            </div>
                <div className="flex p-3 space-x-4">
                    <div className="w-1/4d bg-yellow-200a">
                            <img 
                            src={image}
                            alt="1"
                            className="w-24 h-32"
                            />
                    </div>
                    <div className="flex flex-wrap w-2/4 pl-5 space-x-4 items-center space-x-1">
                        <Link to={"/product/" + item._id}>
                        <h1 className="flex-auto text-xl font-semibold">
                             {item.name}
                        </h1>
                         </Link>

                        <p><span className="text-gray-400">SIZE: </span> {item.size.join(",")}</p>
                        <p>{item.color}</p>
                        
                        <div className="text-xl font-semibold text-gray-500">
                            ${item.price}
                        </div>
                       
                    </div>
                    <div className="flex space-x-3 items-center">
                        <p className="text-gray-400">COLOR :</p>
                            
                            { item.colors.map((c, i) => (
                                    <div 
                                        key={i} 
                                        className={`w-9 h-9 text-xl bg-${c} flex items-center justify-center rounded-sm`}
                                        
                                    ></div>
                            ))}  
                    </div>
                </div>
            </div>
    )
}

export default ItemList
