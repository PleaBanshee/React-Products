import React from 'react';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="border-4 font-bold p-3 flex justify-between items-center">
            <span className="font-bold font-black">
                SHOPPYMART
            </span>
            <NavBar/>
        </header>
    );
}

export default Header;