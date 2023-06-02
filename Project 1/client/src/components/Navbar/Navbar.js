import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/Logo.png';
import Button from '../Button';
import NavLinks from './NavLinks';
import {FaBars, FaTimes} from 'react-icons/fa'

const Navbar = () => {
  return (
   <nav className='bg-white'>
    <div className='flex items-center font-medium justify-around'>
      <div className='z-50 p-5 md:w-auto w-full'>
        <img src={Logo} alt='logo' className='md:cursor-pointer h-9' />
        <div className='text-3xl'>
          <FaBars></FaBars>
        </div>
      </div>
        <ul className='md:flex hidden uppercase items-center gap-8 font-[Poppins]'>
            <li>
               <Link to='/' className='py-7 px-3 inline-block hover:scale-105 duration-300'>Home</Link> 
            </li>
            <NavLinks/>
        </ul>
        <div className='md:block hidden'>
          <Button/>
        </div>
        {/* {MobileNav} */}
        <ul className={`
        md:hidden bg-white absolute w-full h-full bottom-0 py-24
        pl-4
        `}>
          <li>
        <Link to='/' className='py-7 px-3 inline-block hover:scale-105 duration-300'>
          Home
        </Link>
        </li>
        <NavLinks/>
        <div className='py-5'>
         <Button/>
        </div>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
