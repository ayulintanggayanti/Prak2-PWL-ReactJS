import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className="flex flex-col md:flex-row px-4">
        <div className="flex justify-between items-center px-4 py-4 md:py-0 border-b border-gray-700 md:border-b-0">
            <div className=""><a href="#" className="uppercase font-semibold text-gray-100 md:mr-4 tracking-widest">Ayu Lintang</a></div>
            <div className="md:hidden" onClick={handleClick}>
                <button className="items-center">
                    <svg className="transition duration-500 ease-in-out w-6 h-6 outline-none text-gray-100 block md:hidden" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" /></svg>
                </button>
            </div>
        </div>
        <div className={!nav ? "transition duration-500 ease-in-out md:flex hidden flex-col md:flex-row justify-between w-full py-4 md:py-0 md:bg-transparent bg-gray-700 rounded-xl" : "transition duration-500 ease-in-out md:flex flex-col md:flex-row justify-between w-full py-4 md:py-0 md:bg-transparent bg-gray-700 rounded-xl"}>
            <div className="transition duration-500 ease-in-out flex flex-col md:flex-row md:gap-4"></div>

            <div className="transition duration-500 ease-in-out flex flex-col md:flex-row md:gap-4 p-4">
                <a href="#aboutme" className="block px-4 py-2 md:py-1 rounded-md md:my-2 text-gray-100 md:text-left text-center hover:bg-gray-800 transition duration-200 ease-in-out">About Me</a>
                <a href="#contactme" className="block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100 md:text-left text-center hover:bg-gray-800 transition duration-200 ease-in-out">Contact Me</a>
                <a href="#message" className="block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100 md:text-left text-center hover:bg-gray-800 transition duration-200 ease-in-out">List Message</a>
            </div>

            <div className="flex flex-col md:flex-row md:gap-3 md:items-center">
                <a href="#" className="hidden md:block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100 "><i className="fa fa-facebook-f text-xl"></i></a>
                <a href="#" className="hidden md:block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100 "><i className="fa fa-twitter text-xl"></i></a>
                <a href="https://www.instagram.com/ayulintanggg_/" className="hidden md:block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100 "><i className="fa fa-instagram text-xl"></i></a>
                <a href="https://github.com/ayulintanggayanti" className="hidden md:block px-4 py-2 md:py-1 rounded-md my-2 text-gray-100"><i className="fa fa-github text-xl"></i></a>
                
                
            </div>
        </div>
    </div>
    );
}

export default Navbar;