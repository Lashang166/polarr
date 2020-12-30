import React,{ useState, useContext} from 'react'
import Header from '../components/Header'
import IntroSection from '../components/IntroSection'
import MainSection from '../components/MainSection'
import { MainContext } from '../context/MainContext'
import Paper from '../components/Paper'
import OrderServices from '../services/OrderServices';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'

function Checkout() {
    const [address, setAddress] = useState('');
    const { cart, cartDispatch, taostDispatch } = useContext(MainContext);
    const { isAuthenticated } = useContext(AuthContext)
    const history = useHistory();

    const onSubHandle = (e) => {
        e.preventDefault();
        if(isAuthenticated){
            cartDispatch({type: "CART_SHIPPING"})
            OrderServices.order(
            cart.cartItems, address, e.target.payment.value, cart.cartCost)
                .then(data => {console.log(data)})
                history.push('/dashboard/myorders')
        }else{
            taostDispatch({ type: "ALERT_OPEN", payload: "please signin"})
        }

        
    }

    return (
        <>
         <Header />
         <IntroSection>
            Checkout
        </IntroSection>
            <div className="bg-gray-100">
                <form onSubmit={onSubHandle}>
                <MainSection>
                <div className="mt-5 bg-gray-900/ w-full md:w-3/4 mx-auto min-h-screen">
                    {/* <Paper>
                        <div className="flex bg-red-100d w-full p-6 space-x-6">
                                <div className="w-full min-h-44 max-h-full bg-gray-100f flex flex-col p-5">
                                <h1 className="text-2xl font-medium"><span className="text-gray-400 mr-2 ">1.</span>Contact Information</h1>
                                <textarea cols="30" rows="4" className="w-full ring-1 ring-black mt-4 rounded-sm focus:outline-none p-5" placeholder="Contact Information"></textarea>
                            </div>
                        </div>
                    </Paper>    */}
                    <Paper>
                        <div className="flex bg-red-100d w-full p-6 space-x-6">
                                <div className="w-full min-h-44 max-h-full bg-gray-100f flex flex-col p-5">
                                <h1 className="text-2xl font-medium"><span className="text-gray-400 mr-2 ">2.</span>Shipping</h1>
                                <textarea onChange={(e) => setAddress(e.target.value)} cols="30" rows="5" className="w-full ring-1 ring-black mt-4 rounded-sm focus:outline-none p-5" placeholder="Shipping"></textarea>
                            </div>
                        </div>
                    </Paper>
                    <Paper>
                        <div className="flex bg-red-100d w-full p-6 space-x-6">
                                <div className="w-full min-h-44 max-h-full bg-gray-100f flex flex-col p-5">
                                <h1 className="text-2xl font-medium"><span className="text-gray-400 mr-2 ">3.</span>Payment</h1>
                                <div className="flex items-center space-x-4">
                                <input type="radio" defaultChecked name="payment" value="online by card" id="payment"/><p className="uppercase text-lg">online by card</p>

                                </div>
                            </div>
                        </div>
                    </Paper>
                    <div className="my-5">
                        <button className="w-64 h-12 bg-black rounded-sm text-white uppercase mt-3">checkout</button>
                    </div>
                </div>
                </MainSection>   
                </form>
            </div>
        </>
    )
}

export default Checkout
