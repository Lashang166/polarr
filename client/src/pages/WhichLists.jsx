import React,{ useContext } from 'react'
import ItemCard from '../components/ItemCard'
import { MainContext } from '../context/MainContext'

function WhichLists() {

    const { products } = useContext(MainContext)

    return (
        <>
          <h1 className="text-3xl font-medium">WhichLists</h1>   
          <div className="grid grid-cols-12 gap-2  pt-4 ">
              {products.products.map((item) => (
                <div
                  key={item._id}
                  className="col-span-6 sm:col-span-4 bg-white"
                >
                  <ItemCard item={item} />
                </div>
              ))}
            </div>
        </>
    )
}

export default WhichLists
