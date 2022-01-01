import { Link } from 'react-router-dom';

const Menu = (props) => {
    return (
        <div>
            <div className='font-bold font-black py-3'>
                MENU
            </div>
            <ul>
                <li>
                    <Link to='/' 
                    className="text-blue-500 py-3 border-t border-b block" 
                    onClick={ props.hideMenu }>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='/about' 
                    className="text-blue-500 py-3 border-b block"  
                    onClick={ props.hideMenu }>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='/products/:id' 
                    className="text-blue-500 py-3 border-b block"  
                    onClick={ props.hideMenu }>
                        Products
                    </Link>
                </li>
                <li>
                    <Link to='/contact' 
                    className="text-blue-500 py-3 border-b block"  
                    onClick={ props.hideMenu }>
                        Contact Us
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
