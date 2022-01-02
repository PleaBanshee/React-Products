import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
// use https://mockapi.io/ to create products

const Product = () => {
    const { id } = useParams() // returns id from url parameters
    const url = `https://61ceaf1565c32600170c7c9f.mockapi.io/api/v1/Product/${id}`;
    
    const [product,setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });

    useEffect(() => {   // executes when rerendering happens
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url) // fetch data
        .then(res => {
            setProduct({
                loading: false,
                data: res.data,
                error: false
            })
        })
        .catch(() => {
            setTimeout(() => setProduct({
                loading: false,
                data: null,
                error: true
            }),2000)
        }); 
    },[url])

    if (product.loading) {
        return <Loader/>
    }

    if (product.data) {
        return (
            <div className="h-screen"> {/* makes page scrollable */}
                <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                    Products
                </h1>
                <h2 className="font-bold text-2xl mb-3 m-3 text-center">
                    {product.data.name}
                </h2>
                <div className='flex justify-center align-items'>
                    <img src={product.data.images[0].imageURL} alt={product.data.name}/>
                </div>
                <div className='font-bold text-center text-xl mb-3'>
                    R{product.data.price}
                </div>
                <div className='text-center font-bold'>
                    {product.data.description}
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