import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import ProductServices from '../services/ProductServices'
import MainSection from "../components/MainSection";
import ItemCard from '../components/ItemCard';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


const bg = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80"

function Home() {
    let setting = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
       
    };

    
    const [products, setProducts] = useState([]);
    const [sort, setSort] = useState("");
    const [page, setPage] = useState(1);
    const [category, setCategory] = useState("");

    useEffect(() => {
        ProductServices.fetch(page, category, sort)
        .then(data => {
            console.log(data.data.products)
            let p =  data.data.products.filter((v, i) => {   
                return i > data.data.products.length - 5;
            })
            setProducts(p);
        }).catch(err => console.log(err))
    },[])

    return (
        <>
            <Header />
            <div 
                style={{height: "85vh", backgroundImage: `url(${bg})`}} 
                className="min-w-full bg-center bg-cover bg-black bg-no-repeat flex items-center justify-center">
                <div className="bg-black w-3/4 bg-opacity-50 items-center justify-center py-2 md:py-5 h-60 text-white flex flex-col md:w-2/4 mx-auto p-3 space-y-5">
                    <p className="text-gray-100 font-thin ">Best Relaxing Collection</p>
                    <h1 className="font-medium text-4xl">Summer Collection</h1>
                    <Link to="/shop" className="w-52 rounded-sm uppercase hover:bg-black  hover:text-white bg-white text-black text-center py-3 px-5 ">Veiw More</Link>
                </div>
            </div>
            <div className="bg-gray-100/">
                <MainSection>
                <div className="mt-14 w-full bg-white px-2 py-3 rounded-sm">
                    <div className="font-meduin text-center">
                        <h1 className="text-2xl">Recent Products</h1>
                        <p>ed quia consequuntur magni dolores eos qui</p>
                    </div>
                    <div className="w-full grid grid-cols-12   mt-7 pt-3 gap-3">
                        { products.map((item,i) => (
                            <div key={i} className="col-span-6 sm:col-span-3 bg-white sm:px-4">
                                <ItemCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
                </MainSection>
            </div>
        </>
    )
}

export default Home
