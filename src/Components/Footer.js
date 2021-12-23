import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-center font-bold text-xs p-3 absolute sm:bottom-10 md:bottom-40 lg:bottom-0 w-full border-t">
            &copy; Copyright {new Date().getFullYear()} {/* &copy : Copyright symbol */}
        </footer>
    );
}

export default Footer;