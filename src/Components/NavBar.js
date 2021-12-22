import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
    const [showMenu,setMenu] = useState(false);

    let menu = null;
    let menuMask = null;

    if (showMenu) { // conditional rendering
        menu = <div className='fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow'>
            Menu
        </div>
        menuMask = <div className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
        onClick={() =>  setMenu(false)}>
        </div>
    }
    
    return (
        <nav >
            <span className='text-xl'>
                <FontAwesomeIcon icon={faBars} 
                onClick={() => setMenu(!showMenu)}/> {/* toggek Menu */}
            </span>
            {menuMask}
            {menu}
        </nav>
    );
}

export default NavBar;