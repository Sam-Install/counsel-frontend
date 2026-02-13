import React, { useState } from 'react'
import { SiMinds } from "react-icons/si";
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div className='relative top-0 left-0 w-full flex items-center justify-between py-5 px-6 z-50'>
            
            <div className='flex gap-2 items-center'>
                <SiMinds className='text-white text-2xl' />
                <h1 className='text-white font-bold text-lg'>LolaTherapy</h1>
            </div>

    
            <ul className='hidden sm:flex gap-6 text-white'>
                <NavLink to='' className='hover:text-orange-400'><p>Home</p></NavLink>
                <NavLink to='/about' className='hover:text-orange-400'><p>About</p></NavLink>
                <NavLink to='/services' className='hover:text-orange-400'><p>Services</p></NavLink>
                <NavLink to='/contact' className='hover:text-orange-400'><p>Contact</p></NavLink>
            </ul>

        
            <div className='flex items-center gap-4'>
                <GiHamburgerMenu onClick={() => setVisible(true)} className='sm:hidden text-white text-2xl cursor-pointer' />
                <button className='bg-orange-400 text-white text-sm px-6 py-2 rounded'>Admin</button>
            </div>

        
            {visible && (
                <div className='sm:hidden fixed top-0 left-0 w-full h-screen bg-black/90 flex flex-col items-center justify-center gap-8 z-50'>
                    <FaTimes onClick={() => setVisible(false)} className='absolute top-5 right-5 text-white text-2xl cursor-pointer' />
                    <NavLink to='' onClick={() => setVisible(false)} className='text-white text-xl'>Home</NavLink>
                    <NavLink to='/about' onClick={() => setVisible(false)} className='text-white text-xl'>About</NavLink>
                    <NavLink to='/services' onClick={() => setVisible(false)} className='text-white text-xl'>Services</NavLink>
                    <NavLink to='/contact' onClick={() => setVisible(false)} className='text-white text-xl'>Contact</NavLink>
                </div>
            )}
        </div>
    )
}

export default Navbar;
