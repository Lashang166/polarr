import React,{ useState, useContext } from 'react'
import { FaShoppingBag, FaUserAlt, FaAlignRight, FaTimes } from "react-icons/fa";
import { IoExitSharp } from "react-icons/io5";
import { GoSearch } from "react-icons/go";
import { MdDashboard } from "react-icons/md";
import { Link } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext';
import SignIn from '../pages/SignIn';
import AuthServices from '../services/AuthServices';
import { useHistory } from 'react-router-dom';

function Header() {
    const [ nav, setNav ] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const { isAuthenticated, user, setUser, setIsAuthenticated } = useContext(AuthContext);
    const history = useHistory();
    const userModalHandle = () =>{
        setShowModal(!showModal);
        setNav(false)
    } ;

    const navHandle = () => setNav(!nav);


    const signout = () => {
        AuthServices.signout()
            .then(data => {
                console.log(data)
                setIsAuthenticated(data.isAuthenticated);
                setUser(data.user);
                history.push('/')
            })
    }


    return (
        <header  className="bg-white shadow-sm/ sticky z-50 border-b border-gray-300  md:border-transparent ">
            <div className=" w-full flex justify-between h-16 md:h-20 px-5 md:px-28  border-b border-gray-300  ">
                <div className="flex md:justify-center w-2/4 md:w-1/3 order-1 md:order-2">
                    <h1 className="text-4xl font-bold uppercase flex items-center p-4 font-serif md:hidden">P.</h1>
                    <h1 className="text-4xl font-bold uppercase md:flex items-center p-4 font-serif hidden justify-center">Polar</h1>
                </div>
                <div className="bg-yellow-500/  md:w-1/3 flex justify-end  order-2 md:order-3">
                    <ul className="flex items-center w-2/4 md:w-1/4 justify-around">
                        <li className="text-4xl p-2 cursor-pointer md:hidden" onClick={navHandle}>{nav ? <FaTimes/> : <FaAlignRight className=""/> }</li>
                        
                        { isAuthenticated ? 
                            <li  className="md:block items-center hidden text-xl mt-1" ><Link to="/dashboard/myorders"><MdDashboard /></Link> </li>
                        : 
                            <li onClick={() => userModalHandle()} className="md:block items-center hidden text-lg" ><FaUserAlt /></li>
                        }
                        <li><Link to="/cart" className="md:block items-center hidden text-lg"><FaShoppingBag /></Link></li>
                        { isAuthenticated ? <li className="md:block items-center hidden text-xl mt-1" onClick={() => signout()} > <IoExitSharp /> </li>: '' }
                    </ul>
                </div>
                
                    <div class="hidden md:w-1/3 md:flex items-center">
                       
                        <input 
                            type="text" 
                            class="rounded-md h-10 placeholder-gray-400 ring-1 ring-transparent w-2/4 focus:outline-none"
                            placeholder="Search"
                        />
                        <button className="text-lg"><GoSearch/></button>
                        
                    </div>
            </div>
            <div className={`absolute z-50 md:static top-16 ${nav ? "left-0" : "-left-full"} md:transition-none transition-all ease-in duration-700/ flex flex-col md:flex-row md:justify-center bg-gray-100 md:bg-white h-screen md:h-10 w-full `}>
                    <ul className="uppercase font-semibold text-lg flex flex-col md:flex-row items-center space-y-16 md:space-y-0 w-full p-10 md:p-0  md:justify-between lg:ml-48  md:w-3/5 md:pt-5 md:mb-5">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/shop">shop</Link></li>
                        <li><Link to="/">blogs</Link></li>
                        <li><Link to="/">about us</Link></li>
                        <li><Link to="/">contact</Link></li>
                        { isAuthenticated ? "" :
                        <li className="flex items-center md:hidden" onClick={() => userModalHandle()}><FaUserAlt />&nbsp;Login</li>
                        }
                        <li><Link to="/cart" className="flex items-center md:hidden"><FaShoppingBag />&nbsp;Cart </Link></li>
                    </ul>
                </div>
                <SignIn showModal={showModal} setShowModal={setShowModal} />
        </header>
    )
}

export default Header
