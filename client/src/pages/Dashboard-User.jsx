import React,{ useContext } from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import { PrivateRoute } from '../routes'
import OrdersList from "./OrdersList";
import WhichLists from "./WhichLists";
import PofilePaper from '../components/PofilePaper'
import { AuthContext } from '../context/AuthContext';
import AllOrders from "./AllOrders";
import AllProducts from "./AllProducts";
import AddProduct from "./AddProduct";


function DashboardUser() {
  const { user } = useContext(AuthContext)


  return (
    <>
      <Header />
      <div className="bg-gray-100 w-full pt-14 min-h-screen">
        <MainSection>
          <div className=" md:w-1/4 relative w-full">
            <PofilePaper user={user} />  
          </div>
          <div className="bg-blue-400/ md:w-3/4 w-full" >
            <div className="w-full shadow-md rounded-md flex flex-col bg-white min-h-screen md:mx-2 p-2 px-7 pt-3">

              <PrivateRoute path="/dashboard/myorders" roles={["user", "admin"]} component={OrdersList}/>
              <PrivateRoute path="/dashboard/mywhich" roles={["user", "admin"]} component={WhichLists}/>
              <PrivateRoute path="/dashboard/allOrders" roles={["admin"]} component={AllOrders}/>
              <PrivateRoute path="/dashboard/allproducts" roles={["admin"]} component={AllProducts}/>
              <PrivateRoute path="/dashboard/addproduct" roles={["admin"]} component={AddProduct}/>

            </div>
          </div>
        </MainSection>
      </div>
    </>
  );
}

export default DashboardUser;
