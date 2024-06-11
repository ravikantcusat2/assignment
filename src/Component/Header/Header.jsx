import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-1">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://fonts.gstatic.com/s/i/materialicons/menu/v6/24px.svg"
                                className="mr-3 h-12"
                                alt="Logo"
                            />
                        </Link>
                        <Link
                            to="card"
                            className="text-black-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            HOME
                        </Link>
                        <Link
                            to="#"
                            className="text-black-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            SHOP
                        </Link>
                        <Link
                            to="#"
                            className="text-black-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            MAGAZINE
                        </Link>
                    </div>
                    <div className="flex justify-between items-center lg:order-2">
                        <Link to="/" className="">
                            <img
                                src="https://fonts.gstatic.com/s/i/materialicons/search/v6/24px.svg"
                                className="mr-3 h-6"
                                alt="Logo"
                            />
                        </Link>
                        <Link to="/" className="">
                            <img
                                src="https://fonts.gstatic.com/s/i/materialicons/add_shopping_cart/v6/24px.svg"
                                className="mr-3 h-6"
                                alt="Logo"
                            />
                        </Link>
                        

                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 "
                        >
                            Log in
                        </Link>
                        {/* <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link> */}
                    </div>
                </div>
            </nav>
        </header>
        
    );
}


