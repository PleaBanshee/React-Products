import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center font-bold absolute text-xs p-3 bottom-0 w-full border-t">
            &copy; Copyright {new Date().getFullYear()} {/* &copy : Copyright symbol */}
        </footer>
    );
}

export default Footer;