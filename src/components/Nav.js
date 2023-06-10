import React,{useCallback, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';

const Nav = () => {
  const [showMobileMenu,setShowMobileMenu]= useState(false);
  const toggleMobileMenu = useCallback(()=>{
    setShowMobileMenu((current)=>!current)
  },[])

  return (
    <div className='w-full z-40 shadow-md'>
      <div className='
        px-6
        md:px-20
        py-16
        flex
        flex-row
        items-center
        trasition
        duration-500
        justify-between
      '>
         <img className="h-4 lg:h-20" src="https://deshcareer.com/logo/short-logo.png" alt="Logo"/>
         <div className='
          flex-row
          ml-8
          gap-5
          hidden
          lg:flex
          items-center
          justify-center
         '>
          <NavbarItem label={'Home'}/>
          <NavbarItem label={'Privacy Policy'}/>
          <NavbarItem label={'Terms Condition'}/>
          <NavbarItem label={'About Us'}/>
          <NavbarItem label={'Contact Us'}/>
          <NavbarItem label={'Advertise'}/>
          <button className='bg-red-600 hover:bg-red-700 text-white  font-semibold py-2 px-3 border border-red-100 rounded-md shadow transition focus:red-4 '>Join Now</button>
         </div>
      </div>
    </div>
  )
}

export default Nav