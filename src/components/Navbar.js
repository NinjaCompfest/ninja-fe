import React from 'react'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='bg-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='flex justify-between'>

                    {/* logo */}
                    <div>
                        <a href="#" className='logo flex items-center py-3 px-3 text-red-600'>NINJA</a>
                    </div>

                    {/* secondary nav */}
                    <div className='flex items-center space-x-1'>
                        <a href="#" className='py-1 px-7 border border-gray-400 rounded hover:bg-black hover:text-white transition duration-300'>Login</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
