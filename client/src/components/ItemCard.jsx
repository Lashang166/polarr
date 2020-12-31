import React,{ useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { MainContext } from '../context/MainContext';
function ItemCard({ item, setLoading }) {
    const [itemSelected, setItemSelected] = useState({
        id: '',
        name: '',
        price: '',
        qty: 1,
        color: null,
        size: null,
        image: null,
    });
    const [add, setAdd] = useState(false);
    const { cartDispatch, taostDispatch } = useContext(MainContext);

    useEffect(() => {
        if(add){
            cartDispatch({ type: "CART_ADD" , payload: itemSelected})
            taostDispatch({ type: "ALERT_OPEN", payload: "Add To Cart" })
            setAdd(false);
        }

    }, [add])

    const addtoCart = () => {
        setItemSelected(prev => ({...prev,
            id: item._id,
            name: item.name,
            price: item.price,
            image: item &&  item.images[0],
            color: item &&  item.colors[0],
            size: item &&  item.size[0],
        }));
        setAdd(true);
    }
    return (
            <div className="relative overflow-hidden bg-white max-w-full shadow-sm">
                <div className="w-full h-full bg-white absolute opacity-0 hover:opacity-75 flex flex-col justify-center">
                    <button onClick={() => addtoCart()} className="w-full h-10 bg-white font-semibold uppercase">add to cart</button>
                </div>
                <img 
                    src={item && item.images[0]}
                    alt="1"
                    className=" h-auto max-w-full mx-0 my-auto"
                />
                <div className="text-left  p-3 absolute bottom-0 bg-white w-full">
                    <Link onClick={() => setLoading && setLoading(true)} to={`/product/${item && item._id}`}  className="font-thin text-sm text-gray-600 hover:text-red-500">{item && item.name}</Link>
                    <h3 className="font-semibold">${item && item.price}</h3>
                </div> 
            </div>
            
            
 
    )
}

export default ItemCard
    