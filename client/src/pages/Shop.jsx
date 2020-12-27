import React,{ useEffect, useContext } from 'react'
import IntroSection from '../components/IntroSection'
import Header from '../components/Header'
import MainSection from '../components/MainSection'
import ItemCard from '../components/ItemCard'

//import products from "../product"
import ProductServices from '../services/ProductServices'
import { MainContext } from '../context/MainContext'






function Shop() {

    const { products, productDispatch } = useContext(MainContext)

    useEffect(() => {
        ProductServices.fetch()
            .then(data => {
                console.log(data.data.products);
                productDispatch({ type: "PRODUCT_FETCH", payload: data.data.products})
            })
    },[])

    return (
        <>
         <Header />
         <IntroSection >
            shop
         </IntroSection>   

         <section className="bg-red-600/ ">
             <MainSection>
                {/* -----items------ */}
                <div className="w-full md:w-3/4 md:order-2 flex flex-col ">
                    <div className="flex p-2 box">
                        <h1 className="flex-grow text-lg font-thin">1-12 show of 18</h1>
                        <select name="" id="">
                            <option value="1">Low-High</option>
                            <option value="1">High-Low</option>
                        </select>
                    </div>
                    <div className="grid grid-cols-12 gap-2  pt-4 ">

                        { products.products.map((item) =>(

                            <div key={item._id} className="col-span-6 sm:col-span-4 bg-white">
                                <ItemCard item={item}/>
                            </div>

                        )) }


                        
                    </div>
                </div>

                {/* -----filter------- */}
                <div className="w-full md:order-1 md:w-1/4 mt-10 md:mt-0">
                    <div className="flex flex-col p-2 border-b border-gray-50">
                        <h1 className="text-2xl font-semibold">Filter</h1>
                    </div>
                    <div className="flex flex-col p-2 border-b border-gray-50">
                        <h1 className="text-xl font-semibold">Color</h1>
                        <ul className="pl-2 text-gray-600">
                            <li className="flex items-center"><div className="w-4 h-4 mr-1 bg-black"></div><p> Black</p></li>
                            <li className="flex items-center"><div className="w-4 h-4 mr-1 bg-red-500"></div><p> Red</p></li>
                            <li className="flex items-center"><div className="w-4 h-4 mr-1 bg-blue-500"></div><p> Blue</p></li>
                            <li className="flex items-center"><div className="w-4 h-4 mr-1 bg-yellow-500"></div><p> Yellow</p></li>
                            <li className="flex items-center"><div className="w-4 h-4 mr-1 bg-green-500"></div><p> Green</p></li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-2 border-b border-gray-50">
                        <h1 className="text-xl font-semibold">Size</h1>
                        <ul className="pl-2 text-gray-600">
                            <li className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-1"/><p>XS</p></li>
                            <li className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-1"/><p>S</p></li>
                            <li className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-1"/><p>M</p></li>
                            <li className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-1"/><p>L</p></li>
                            <li className="flex items-center"><input type="checkbox" className="w-4 h-4 mr-1"/><p>XL</p></li>
                        </ul>
                    </div>
                    <div className="flex flex-col p-2 border-b border-gray-50">
                        <h1 className="text-xl font-semibold">Price</h1>
                        <div className="flex w-full/ justify-between px-5 w-3/4">
                            <p className="text-lg">0</p>
                            <p className="text-lg">1000</p>
                        </div>
                        <input type="range" name="" id="" className="mt-2 w-3/4" />
                    </div>
                </div>
             </MainSection>

         </section>


        </>
    )
}

export default Shop
