import {Link} from 'react-router-dom'

const ProductCard = (props) => {
    return (
        <div className="border mb-4 rounded overflow-hidden bg-red-700 bg-cover" 
        style={{"border":"5px solid","borderColor": "#34e8eb","boxShadow": "0.5px 0.5px 20px 0.5px #34e8eb"}}>
            <Link to={`/products/${props.product.id}`}>
                <div 
                    style={{
                        'backgroundImage': `url('${props.product.images[0].imageURL}')`,
                    }}
                    className="w-full h-64 bg-blue bg-cover"
                >
                </div>
            </Link>
            <div className="p-3">
                <h3 className="font-bold text-xl mb-3 text-center">
                    <Link to={`/products/${props.product.id}`}>
                        { props.product.name }
                    </Link>    
                </h3>
                <div className="font-bold mb-3 text-center">
                    R{ props.product.price }
                </div>
                <div className="mb-3 text-center">
                    { props.product.description }
                </div>
                <Link 
                    to={`/products/${props.product.id}`}
                    className="bg-blue-500 text-white p-2 flex justify-center w-full"
                >
                    View
                </Link>
            </div>
        </div>
    )
}

export default ProductCard