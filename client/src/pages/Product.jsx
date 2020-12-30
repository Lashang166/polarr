import React,{ useState, useEffect, useContext } from "react";
import Header from "../components/Header";
import MainSection from "../components/MainSection";
import { BsFillPlusSquareFill, BsFillDashSquareFill, BsFillHeartFill } from "react-icons/bs";
import ItemCard from "../components/ItemCard";

import { MainContext } from "../context/MainContext";
import Footer from '../components/Footer';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import ProductServices from '../services/ProductServices'



function Product( props ) {

    let setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
       
    };

    const { cart, cartDispatch, products, productDispatch } = useContext(MainContext);

    const [image, setImage] = useState('');
    const [qty, setQty] = useState(1);
    const id = props.match.params.id;
    const [add, setAdd] = useState(false);
    const [relate, setRelate] = useState(null);
    const [items, setItems] = useState([]);

    const [itemSelected, setItemSelected] = useState({
        id: '',
        name: '',
        price: '',
        qty,
        color: null,
        size: null,
        image: null,
    });


    useEffect(() => {
        ProductServices.fetchOne(id)
            .then(data => {
                productDispatch({ type: "PRODUCT_FETCHONE", payload: data.data})
                setImage(data.data.images[0])
                setItemSelected(prev => ({...prev,
                    color: data.data.colors[0],
                    size: data.data.size[0]
                }));   
                    ProductServices.relate(data.data.categories)
                        .then(data => setRelate(data.data))
            })

    }, [])



    useEffect(() => {
        if(add === true) {
            cartDispatch({ type: "CART_ADD" , payload: itemSelected})
            console.log(cart);
            setAdd(false);
        }
    }, [add])

    const sizeHandle = (e) => {setItemSelected({...itemSelected, size: e.target.value})};
    const colorHandle = (c) => {setItemSelected({...itemSelected, color: c})};
    const qtyIncrease = () => setQty(prev => prev + 1);
    const qtyDecrease = () => setQty(prev => prev - 1);

    const addToCart = () => {
        setItemSelected(prev => ({...prev,
            id: products.product._id,
            name: products.product.name,
            price: products.product.price,
            qty,
            image: products.product &&  products.product.images[0],
        }));
        console.log(itemSelected);
        setAdd(true);
    }

    const onChangeImage = (pic) => {
        setImage(pic)
    }

  return (
  
    <>
      <Header />
      <MainSection>
        <div className="w-full md:w-2/4 flex flex-col bg-red-400/ mt-7 p-3">
          <div className="relative flex justify-center">
            <img                        
                src={image}
                alt="1" 
                className=" h-auto max-w-full" />
          </div>
          {/* ===image--- */}
            <Slider {...setting} className="flex w-full md:w-3/4 mx-auto mt-4 p-3 space-x-3 bg-red-600/ overflow-hidden focus:outline-none">
                                       
              { products.product && products.product.images.map((image,index) => (
                <div key={index} className="relative bg-green-400/ w-1/3 h-24 focus:outline-none">
                    <img 
                        src={image}
                        alt="1" 
                        width="85"
                        height="78"
                        onClick={() => onChangeImage(image)}
                        className="h-auto max-w-full mx-auto cursor-pointer bg-gray-100 p-1 hover:opacity-70" />
                </div>
              ))} 

            </Slider>
        </div>
          {/* detail---- */}
          <div className="w-full md:w-2/4 bg-blue-400/ mt-7 p-3 flex flex-col space-y-5">
                <h1 className="text-3xl ">{ products.product && products.product.name }</h1>
                <h1 className="text-3xl font-semibold">${ products.product && products.product.price }</h1>
                <p className="text-lg font-thin text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ullam libero, asperiores distinctio laborum animi, laboriosam repellat reprehenderit amet commodi, accusantium delectus qui architecto quos quidem totam eum fugiat voluptatibus expedita earum aspernatur atque?
                </p> 
                <p className="text-lg font-semibold text-green-600">{ products.product &&  products.product.countInStock } In Stock</p>
                <div className="flex space-x-3 items-center">
                   <p>COLOR :</p>
                     
                   { products.product && products.product.colors.map((c, i) => (
                        <div 
                            key={i} 
                            className={`w-9 h-9 text-xl bg-${c} flex items-center justify-center rounded-sm`}
                            onClick={() => colorHandle(c)}
                        ></div>
                   ))}
                  
                </div>
                <div className="flex space-x-3 items-center">
                   <p>QTY :</p>  
                    <button  onClick={qtyDecrease} ><BsFillDashSquareFill className="text-4xl"/></button>
                    <h2 className="w-9 h-9 text-xl bg-gray-300 flex items-center justify-center rounded-sm">{qty}</h2>
                    <button onClick={qtyIncrease} ><BsFillPlusSquareFill className="text-4xl"/></button>
                </div>
                <div className="flex space-x-3 items-center">
                   <p>SIZE :</p>  
                    <select defaultValue="" name="size" id="size" onChange={sizeHandle} >
                        {products.product && products.product.size.map((s, i) => (
                            <option value={s} key={i}>{s}</option>
                        ))}
                    </select>
                </div>
                <div>
                    <button 
                        className="w-full md:w-64 h-12 hover:bg-black rounded-sm hover:text-white uppercase bg-gray-200 transition-colors"
                        onClick={addToCart}
                    >add to cart</button>
                </div>
                <div className="flex space-x-3">
                    <h4 className="font-semibold">ADD TO WHICHLIST: </h4>
                    <BsFillHeartFill  className="text-xl hover:text-red-500"/>
                </div>
                <div className="flex space-x-3">
                    <h4 className="font-semibold">SKU: </h4>
                    <p className="text-gray-400">IN068</p>
                </div>
                <div className="flex space-x-3">
                    <h4 className="font-semibold">Categories: </h4>
                        <p className="text-gray-400">{products.product && products.product.categories}</p>
                </div>
                <div className="flex space-x-3">
                    <h4 className="font-semibold">Tag: </h4>
                    { products.product && products.product.tags.map((tag, index) => (
                            <p key={index} className="text-gray-400">{tag}</p>
                    ))}                </div>
           </div>
           {/* -----review---- */}
           <div className="w-full flex flex-col bg-yellowg-600 p-3 mt-7">
                <h3 className="text-2xl font-medium">Review</h3>
                <div className="flex flex-col bg-gray-200 w-full  mt-4 rounded-sm">
                    
                    {/* { review && review.map((r, i) => (
                        <div key={i} className="flex bg-red-100d w-full p-6 space-x-6">
                            <div className="w-full min-h-44 max-h-full bg-gray-100 flex flex-col p-5">
                                <p className="text-lg font-bold">{r.username} - 3/10/11</p>
                                <p className="text-gray-500 font-thin pt-3">{r.detail}</p>
                            </div>
                        </div>
                    ))} */}

  
                    <div className="flex bg-red-100d w-full p-6 space-x-6">
                            <div className="w-full min-h-44 max-h-full bg-gray-100f flex flex-col p-5">
                            <p className="text-lg font-bold">Your Review *</p>
                            <textarea name="" id="" cols="30" rows="10" className="w-full mt-4 rounded-sm focus:outline-none p-5" placeholder="Your Review"></textarea>
                            <button className="w-64 h-12 bg-black rounded-sm text-white uppercase mt-3">Submit</button>
                        </div>
                    </div>
      

                </div>
            </div>
            {/* ------relate item--------- */}
                <div className="col-span-12 w-full">
                <h3 className="text-2xl font-medium">Relate Items</h3>
                </div>
                <Slider {...setting} className="w-full grid grid-cols-12 bg-red-600/ mt-7 pt-3 gap-3">
                    
                    {relate && relate.map((item, i) => (
                        <div key={i} className="col-span-6 sm:col-span-3 bg-white sm:px-4">
                            <ItemCard item={item}/>
                        </div>
                    )) }

                    
                   
                </Slider>

       
        
      </MainSection>   
      <Footer />
    </>
  );
}

export default Product;
