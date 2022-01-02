import Loader from '../Components/Loader'
import ProductCard from '../Components/ProductCard'
import { useAxiosGet } from '../Hooks/HttpRequests' // to fetch from Products page
// Create your own Mock API: https://mockapi.io/

const Home = () => {
    // last part of url allows you to only display 10 items from all the product
    const url = `https://5e9623dc5b19f10016b5e31f.mockapi.io/api/v1/product?page=1&limit=10`
    let products = useAxiosGet(url)
    
    let content = null

    if (products.error){
        content = <div>
            <div className="bg-blue-300 mb-2 p-3 text-center">
                If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
            </div>
            <div className="bg-red-300 p-3 text-center">
                There was an error please refresh or try again later.
            </div>
        </div>
    }

    if (products.loading){
        content = <Loader/>
    }

    if (products.data){
        content = 
        products.data.map((product) => 
            <div key={product.id} className="flex-no-shrink w-full md:w-1/4 md:px-3">
                <ProductCard 
                    product={product}
                />
            </div>
        )
    }

    return (
        <div>
            <h1 className="font-bold text-2xl mb-3 m-3 text-center">
                Home
            </h1>
            <h2 className="font-bold italic text-2xl mb-3 m-3 text-center">
                Our Best Sellers:
            </h2>
            {content}
        </div>
    );
}

export default Home;