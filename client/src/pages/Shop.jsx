import React, { useEffect, useContext, useState } from "react";
import IntroSection from "../components/IntroSection";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import ItemCard from "../components/ItemCard";
import { GoSearch } from "react-icons/go";

//import products from "../product"
import ProductServices from "../services/ProductServices";
import { MainContext } from "../context/MainContext";

function Shop() {
  const { products, productDispatch } = useContext(MainContext);
  const [sort, setSort] = useState("");
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");
  const [result, setResult] = useState(0);
  const [clear, setClear] = useState(false);
  const [relate, setRelate] = useState('');

  useEffect(() => {
    ProductServices.fetch(page, category, sort).then((data) => {
      productDispatch({ type: "PRODUCT_FETCH", payload: data.data.products });
      setResult(data.result);
    });
  }, [sort, page, category]);

  useEffect(() => {
    if(clear){
        ProductServices.relate(relate)
        .then(data => {
          productDispatch({ type: "PRODUCT_FETCH", payload: data.data });
        })
      setClear(false);
    }
  },[clear])

  const cate = (e) => {
      setRelate(e.target.value);
      setClear(true)
  }


  return (
    <div className="bg-gray-100 "> 
      <Header />
      <IntroSection>shop</IntroSection>

      <section className="pt-10 relative">
        <MainSection>
          {/* -----items------ */}
          <div className="w-full md:w-3/4 md:order-2 flex flex-col bg-gray-100  rounded-sm">
            <div className="flex p-2 box">
              <h1 className="flex-grow text-lg font-thin">1-12 show of {products && products.products.length}</h1>
              <select value={sort} onChange={(e) => setSort(e.target.value)}>
                <option value="">Newest</option>
                <option value="sort=createAt">Oldest</option>
                <option value="sort=-price">Price: Hight-Low</option>
                <option value="sort=price">Price: Low-Hight</option>
              </select>
            </div>
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
            <div className="w-2/5 mx-auto h-10 flex items-center justify-center mt-5">
              {result < page * 9 ? (
                ""
              ) : (
                <button
                  className=" animate-bounce  rounded-sm uppercase hover:bg-black hover:text-white bg-white text-center py-3 px-5 border border-solid border-black"
                  onClick={() => setPage(page + 1)}
                >
                  Load more
                </button>
              )}
            </div>
          </div>

          {/* -----filter------- */}
          <div  className="w-full md:order-1 md:w-1/4 mt-10 md:mt-0  md:sticky z-40 md:top-16 md:h-2/4 rounded-sm">
            <div className="flex flex-col p-2 border-b border-gray-50">
              <h1 className="text-2xl font-semibold">Filter</h1>
            </div>
            <div className="flex flex-col p-2 border-b border-gray-50">
              <h1 className="text-xl font-semibold">Color</h1>
              <ul className="pl-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-1 bg-black"></div>
                  <p> Black</p>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-1 bg-red-500"></div>
                  <p> Red</p>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-1 bg-blue-500"></div>
                  <p> Blue</p>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-1 bg-yellow-500"></div>
                  <p> Yellow</p>
                </li>
                <li className="flex items-center">
                  <div className="w-4 h-4 mr-1 bg-green-500"></div>
                  <p> Green</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-2 border-b border-gray-50">
              <h1 className="text-xl font-semibold">Category</h1>
              <ul className="pl-2 text-gray-600">
                <li className="flex items-center">
                  <button onClick={(e) => cate(e)} value="men" className="focus:outline-none hover:text-red-300 mt-2">Man</button>
                </li>
                <li className="flex items-center">
                  <button onClick={(e) => cate(e)}  value="woman" className="focus:outline-none hover:text-red-300 mt-2">Woman</button>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-2 border-b border-gray-50">
              <div className="flex items-center">            
                       <input 
                           type="text" 
                           className="rounded-md h-10 placeholder-gray-400 ring-1 ring-gray-200 w-3/4 pl-1 focus:outline-none"
                           placeholder="Search"
                       />
                       <button className="text-lg"><GoSearch/></button>         
              </div>
            </div>
          </div>
        </MainSection>
      </section>
    </div>
  );
}

export default Shop;
