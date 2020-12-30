import React,{ useState, useContext } from 'react'
import ItemList from '../components/ItemList'
import { MainContext } from '../context/MainContext'

function AllProducts() {
  
  const { products } = useContext(MainContext)

    return (
        <>
          <h1 className="text-3xl font-medium">All Product</h1>   

          { products && products.products.map((item) => (
            <ItemList item={item} image={item.images[0]} key={item._id}/>
          ))}
        </>
    )
}

export default AllProducts
