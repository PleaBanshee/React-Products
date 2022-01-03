import { useAxiosGet } from '../Hooks/HttpRequests'
import { useParams } from 'react-router-dom';
import Loader from '../Components/Loader';
// use https://mockapi.io/ to create products

const Product = () => {
    const { id } = useParams() // returns id from url parameters
    const url = `https://61ceaf1565c32600170c7c9f.mockapi.io/api/v1/Product/${id}`;
    
    let product = useAxiosGet(url);
    let content = null;

    if (product.loading) {
        content =  <Loader/>
    }

    if (product.error) {
            content = <div>
                <div className="bg-blue-300 mb-2 p-3 text-center">
                    If you see this error. Please remember to create your own  
                    <a className='underline text-indigo-600 hover:text-indigo-800 visited:text-purple-600' href="https://mockapi.io/"> Mock API</a>.
                </div>
                <div className="bg-red-300 p-3 text-center">
                    There was an error please refresh or try again later.
                </div>
            </div>
    }

    if (product.data) {
            content = <div className="h-screen overflow-auto"> {/* makes page scrollable */}
                <h1 className="font-bold text-2xl mb-3 m-3 text-center ba-blue">
                    Products
                </h1>
                <h2 className="font-bold text-2xl mb-3 m-3 text-center ba-blue">
                    {product.data.name}
                </h2>
                <div className='flex justify-center align-items'>
                    <img src={product.data.images[0].imageURL} alt={product.data.name}/>
                </div>
                <div className='font-bold text-center text-xl mb-3 ba-blue'>
                    R{product.data.price}
                </div>
                <div className='text-center font-bold ba-blue'>
                    {product.data.description}
                </div>
            </div>
    }

    return (
        <div className='container mx-auto'>
            { content }
        </div>
    );

}

export default Product;