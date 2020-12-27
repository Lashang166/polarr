import React, { useContext } from 'react'
import CartItem from '../components/CartItem'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import { MainContext } from '../context/MainContext'

function Cart() {

    const { cart , cartDispatch } = useContext(MainContext);


    return (
        <>
            <Header />
            <IntroSection>Cart</IntroSection>
                <div className="bg-red-600/ p-2 flex mx-auto mt-7 w-10/12 space-x-4"  style={{minWidth: "1280px"}}>
                    {/* ----items---- */}
                    <div className="w-4/6 bg-green-400/ flex flex-col ">
                        {
                            cart.cartItems.map((item, i) => (
                                <CartItem item={item} key={i}/>
                            ))
                        }
                
                        
                    </div>   

                    {/* =====process------ */}
                    <div className="bg-blue-400/ w-2/6 shadow-md" style={{minWidth: "388px"}}>

                        <div className="flex flex-col bg-white sticky top-0 w-full mt-4 ">
                            <div className="bg-white shadow-sm px-5 pt-2">
                                <h3 className="text-xl font-bold uppercase">cart total</h3>
                            </div>
                            <div className="flex p-2 w-full justify-between px-5">
                                <h1 className="text-gray-600 text-xl font-semibold">Subtotal :</h1>
                                <h1 className="text-black text-xl font-semibold">${cart.cartCost}</h1>
                            </div>
                            <div className="flex p-2 w-full justify-between px-5">
                                <h1 className="text-gray-600 text-xl font-semibold">Delivery :</h1>
                                <h1 className="text-black text-xl font-semibold">$30.00</h1>
                            </div>
                            <div className="flex p-2 w-full border-b-2 pb-2 border-gray-200 px-5">
                                <input type="text" name="a" id="a" className="w-2/3 h-10 border p-2 focus:outline-none"  placeholder="Coupon"/>
                                <button className="hover:text-white transition-opacity hover:bg-black px-2 uppercase font-semibold text-center border-2">Confirm</button>
                            </div>
                            <div className="flex p-2 w-full justify-between px-5 py-5">
                                <h1 className="text-gray-600 text-xl font-semibold">TOTAL :</h1>
                                <h1 className="text-black text-xl font-semibold">${cart.cartCost + 30}</h1>
                            </div>
                            <div className="flex p-2 w-full justify-between px-5 py-5">
                                <button className="w-full h-full p-3 hover:text-white transition-opacity hover:bg-black px-2 uppercase font-semibold text-center border-2">process to checkout</button>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}

export default Cart
