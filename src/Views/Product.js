import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
// use https://mockapi.io/ to create products

const Product = () => {
    const { id } = useParams() // returns id from url parameters
    const url = `https://61ceaf1565c32600170c7c9f.mockapi.io/api/v1/Product/${id}`;
    const [product,setProduct] = useState(null);

    useEffect(() => {   // executes when rerendering happens
        axios.get(url) // fetch data
        .then(res => {
            setProduct(res.data)
        }); 
    },[url])

    if (product) {
        return (
            <div className="h-screen"> {/* makes page scrollable */}
                <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                    Products
                </h1>
                <h2 className="font-bold text-2xl mb-3 m-3 text-center">
                    {product.name}
                </h2>
                <div className='flex justify-center align-items'>
                    <img src={product.images[0].imageURL} alt={product.name}/>
                </div>
                <div className='font-bold text-center text-xl mb-3'>
                    R{product.price}
                </div>
                <div className='text-center font-bold'>
                    {product.description}
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                Something went wrong... try again
            </h1>
        </div>
    );

}

export default Product;