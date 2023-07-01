import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [mobilestyle, setmobilestyle] = useState("mobile-menu hidden text-center md:hidden bg-black text-white rounded-2xl p-6")
    const [toogle, settoogle] = useState(false);

    useEffect(() => {

        if (window.innerWidth <= 768 && toogle === true) {
            setmobilestyle("mobile-menu text-center md:hidden bg-black text-white rounded-2xl p-6");
        } else {
            setmobilestyle("mobile-menu text-center hidden md:hidden bg-black text-white rounded-2xl p-6");
        }

    }, [window.innerWidth, toogle]);

    // const primaryNavItems = [
    //     {label: 'Courses', link: '/Courses'},
    //     {label: 'About Us', link: '/about'},
    //     {label: 'Resume', link: '/Resume'},
    //     {label: 'Blog', link: '/Blog'},
    //     {label: 'Scholarship', link: '/Scholarship'},
    //     {label: 'Page4', link: '/Page4'},
    //     {label: 'Page5', link: '/Page5'},
    // ];

    // const renderPrimaryNavItems = () => {
    //     const sublistItems = primaryNavItems.reduce((result,item,index) => {
    //         if(index%2==0) {
    //             const sublist=primaryNavItems.slice(index,index+2);
    //             result.push(sublist);
    //         }
    //         return result;
    //     }, []);

    //     return sublistItems.map((sublist,index) => (
    //         <div key={index} className="flex space-x-1">
    //             {sublist.map((item,subIndex) => (
    //                 <Link 
    //                 key={subIndex}
    //                 to={item.link}
    //                 className="py-5 px-3 text-black hover:text-gray-900">
    //                 {item.label}
    //                 </Link>
    //             ))}
    //         </div>
    //     ));
    // };

    return (
        <>
            <nav className="p-6">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="flex justify-between">
                        <div className="flex space-x-[8rem]">
                            <div>
                                <Link
                                    to={"/"}                                    
                                    className="flex items-center py-5 px-2 text-black"
                                >
                                    <svg
                                        className="h-6 w-6 mr-1 text-blue-400"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                        />
                                    </svg>
                                    <span className="font-bold text-2xl">College</span>
                                </Link>
                            </div>
                            {/* primary nav */}
                            <div className="hidden md:flex items-center space-x-1 text-sm font-semibold my-auto">
                                <Link to={"/Courses"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Courses
                                </Link>
                                <Link to={"/about"} className="py-5 px-3 text-black hover:text-gray-900">
                                    About Us
                                </Link>
                                <Link to={"/Resume"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Resume
                                </Link>
                                <Link to={"/Blog"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Blog
                                </Link>
                                <Link to={"/Scholarship"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Scholarship
                                </Link>
                                <Link to={"/Page4"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Page4
                                </Link>
                                <Link to={"/Page5"} className="py-5 px-3 text-black hover:text-gray-900">
                                    Page5
                                </Link>
                            </div>
                        </div>
                        {/* secondary nav */}
                        <div className="hidden md:flex items-center space-x-1">
                            <Link
                               to={"/contact"}
                                className="py-2 px-3 text-lg font-bold bg-black hover:bg-white text-white hover:text-black rounded-full  border-2 border-black transition duration-300"
                            >
                                Contact Us
                            </Link>
                        </div>
                        {/* mobile button goes here */}
                        <div className="md:hidden flex items-center">
                            <button
                                onClick={() => {
                                    settoogle(!toogle);
                                }}
                                className="mobile-menu-button">
                                <svg
                                    className="w-6 h-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                {/* mobile menu */}
                <div className={mobilestyle}>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-blue-600">
                        Explore
                    </a>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-blue-600">
                        About Us
                    </a>
                    <a href="#" className="block py-2 px-4 text-lg hover:bg-blue-600">
                        How it Works
                    </a>
                </div>
                <hr className='border-1 border-black' />
            </nav>
        </>
    )
}

export default Navbar