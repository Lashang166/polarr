import React,{ useState } from 'react'

function AddProduct() {
    const [size, setSize] = useState([]);
    const [colors, setColors] = useState([]);


    const onSubHandle = (e) => {
        e.preventDefault();

        console.log(e.target.size.value);
    }

    return (
        <div>
            <h1 className="text-3xl font-medium">Add Product</h1>   
            
            <form onSubmit={onSubHandle} className="flex flex-col w-3/4 mx-auto">
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    className="h-10 w-3/4 mx-auto p-1 mt-5 ring-2 ring-gray-300 rounded-sm  focus:ring-blue-400" 
                    placeholder="name"
                    />            
                <input 
                    type="text" 
                    name="price" 
                    id="price" 
                    className="h-10 w-3/4 mx-auto p-1 mt-5 ring-2 ring-gray-300 rounded-sm  focus:ring-blue-400" 
                    placeholder="price"
                    />            
                <div className="flex items-center space-x-4">
                    <p>Size: </p> 
                    <input type="checkbox" name="size" id="size" value="XS" className="mx-1"/><p>XS</p>
                    <input type="checkbox" name="size" id="size" value="S" className="mx-1"/><p>S</p>
                    <input type="checkbox" name="size" id="size" value="M" className="mx-1"/><p>M</p>
                    <input type="checkbox" name="size" id="size" value="L" className="mx-1"/><p>L</p>
                </div>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default AddProduct
