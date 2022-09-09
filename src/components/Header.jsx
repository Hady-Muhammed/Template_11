import React, { useState } from 'react'
import {RiMenu3Line} from 'react-icons/ri'
import {AiFillCloseCircle} from 'react-icons/ai'
const Header = () => {
    const [nav , setNav] = useState(false);

    const handleNav = () => setNav((prev) => !prev)
  return (
    <header className='flex bg-black p-5 text-white justify-between items-center px-12'>
        <div className="logo text-[#00dff8] font-bold text-4xl">Defi</div>
        {
            nav ?
            <button onClick={handleNav} className='text-red-800 xs:block lg:hidden'><AiFillCloseCircle size={30}/></button>
            :
            <button onClick={handleNav} className='hover:scale-105 duration-300 xs:block lg:hidden'><RiMenu3Line size={30}/></button>
        }       
        <ul className='hidden lg:flex space-x-8 font-semibold text-xl items-center'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className='btn-gradient p-5 rounded-full'>Use Defi</button>
        </ul>
        <ul className={`fixed z-[1] top-[7%] ${ nav ? 'left-0' : 'left-[-115%]' } duration-500 w-full h-full bg-black flex justify-center items-center`}>
            <div className='text-center space-y-12 font-bold text-4xl'>
                <li>Platform</li>
                <li>Developers</li>
                <li>Community</li>
                <li>About</li>
                <button className='btn-gradient p-5 rounded-full'>Use Defi</button>
            </div>
        </ul>
    </header>
  )
}

export default Header