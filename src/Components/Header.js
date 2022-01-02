import React from 'react';
import NavBar from "./NavBar";

const Header = () => {
    return (
        <header className="border-4 border-blue-400 font-bold p-3 flex justify-between items-center">
            <span className="font-bold" style={{
                color: "#34e8eb" 
            }}>
                SHOPPYMART
            </span>
            <NavBar/>
        </header>
    );
}

export default Header;