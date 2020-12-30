import React,{useEffect, useContext} from 'react'
import { Link, Route } from 'react-router-dom';


const menu = [
    {
      id: 1,
      path:"/dashboard/myorders",
      text: "Orsers",
      user: true
    },
    {
      id: 2,
      path:"/dashboard/mywhich",
      text: "Whish Lists",
      user: true
    },
    {
      id: 3,
      path:"/dashboard/allOrders",
      text: "All Order",
      user: false
    },
    {
      id: 4,
      path:"/dashboard/allproducts",
      text: "All Prodct",
      user: false
    },
    {
      id: 5,
      path:"/dashboard/addproduct",
      text: "Add Prodct",
      user: false
    },
  ]


function PofilePaper({ user }) {


    return (
        <div className="w-full sticky shadow-md rounded-md flex flex-col bg-white p-2 justify-center items-center">
            <img 
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
            alt="a" 
            className="rounded-full w-28 h-28 mx-auto m-2" />
            <h1 className="text-lg font-semibold">Thomas Bruns</h1>
            <div className="text-meduim text-gray-400">Joined June 6, 2018</div>
            <div className="flex flex-col w-full px-5 pt-2">
                { user && 
                    user.role === "admin" ? menu.map((m) => (
                        <Link to={m.path} key={m.id} className="text-meduim text-gray-400 block hover:text-black font-medium my-1 " >
                          {m.text}
                        </Link>
                    )) : 
                        menu.map((m) => {
                          if(m.user){
                            return <Link to={m.path} key={m.id} className="text-meduim text-gray-400 block hover:text-black font-medium my-1 " >
                                    {m.text}
                                  </Link>
                          }
                        })
                }

            </div>
        </div>
    )
}

export default PofilePaper
