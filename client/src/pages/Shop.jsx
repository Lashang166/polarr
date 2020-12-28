import React, { useEffect, useContext, useState } from "react";
import IntroSection from "../components/IntroSection";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import ItemCard from "../components/ItemCard";

//import products from "../product"
import ProductServices from "../services/ProductServices";
import { MainContext } from "../context/MainContext";

function Shop() {
  const { products, productDispatch } = useContext(MainContext);
  const [range, setrange] = useState(0);
  const [sort, setSort] = useState('');
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState('');
  const [result, setResult] = useState(0)
  
  useEffect(() => {
    ProductServices.fetch(page, category, sort).then((data) => {
      console.log(data.data.products);
      productDispatch({ type: "PRODUCT_FETCH", payload: data.data.products });
      setResult(data.result)
    });
  }, [sort, page, category]);

  return (
    <>
      <Header />
      <IntroSection>shop</IntroSection>

      <section className="bg-red-600/ ">
        <MainSection>
          {/* -----items------ */}
          <div className="w-full md:w-3/4 md:order-2 flex flex-col ">
            <div className="flex p-2 box">
              <h1 className="flex-grow text-lg font-thin">1-12 show of 18</h1>
              <select value={sort} onChange={e => setSort(e.target.value)} >
                    <option value=''>Newest</option>
                    <option value='sort=createAt'>Oldest</option>
                    <option value='sort=-price'>Price: Hight-Low</option>
                    <option value='sort=price'>Price: Low-Hight</option>
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
              <div className="w-2/5 mx-auto h-10 flex items-center justify-center my-3">
                  {
                    result < page * 9 ? "":
                      <button className="rounded-sm uppercase hover:bg-black hover:text-white bg-white text-center py-3 px-5 border border-solid border-black" onClick={() => setPage(page+1)}>load more</button>
                  }
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
              <h1 className="text-xl font-semibold">Size</h1>
              <ul className="pl-2 text-gray-600">
                <li className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-1" />
                  <p>XS</p>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-1" />
                  <p>S</p>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-1" />
                  <p>M</p>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-1" />
                  <p>L</p>
                </li>
                <li className="flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-1" />
                  <p>XL</p>
                </li>
              </ul>
            </div>
            <div className="flex flex-col p-2 border-b border-gray-50">
              <h1 className="text-xl font-semibold">Price</h1>
              <div className="flex w-full/ justify-between px-5 w-3/4">
                <p className="text-lg">0</p>
                <p className="text-lg">-</p>
                <p className="text-lg">{range}</p>
              </div>
              <input
                type="range"
                max="1000"
                min="0"
                value={range}
                onChange={(e) => setrange(e.target.value)}
                name=""
                id=""
                className="mt-2 w-3/4"
              />
            </div>
          </div>
        </MainSection>
      </section>
    </>
  );
}

export default Shop;
