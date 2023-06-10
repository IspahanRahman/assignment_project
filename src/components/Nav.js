import React,{useCallback, useEffect, useState } from 'react';
import NavbarItem from './NavbarItem';
import MobileMenu from './MobileMenu';
import MenuIcon from '@mui/icons-material/Menu';
import { BsChevronDown, BsSearch, BsBell} from 'react-icons/bs'
import { useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'


const Nav = () => {
  const inactiveLink = 'text-black text-lg font-semibold cursor-pointer hover:text-red-600 transition';
  const activeLink =' text-red-600 text-lg font-semibold cursor-pointer transition';
  const router = useLocation();

  const [showMobileMenu,setShowMobileMenu]= useState(false);
  const toggleMobileMenu = useCallback(()=>{
    setShowMobileMenu((current)=>!current)
  },[]);

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
         <img className="h-16 lg:h-20" src="https://deshcareer.com/logo/short-logo.png" alt="Logo"/>
         <div className='
          flex-row
          ml-8
          gap-5
          hidden
          lg:flex
          items-center
          justify-center
         '>
          <NavbarItem className={router.pathname==='/'?activeLink:inactiveLink} to={'/'} label={'Home'}/>
          <NavbarItem className={router.pathname==='/privacy/policy'?activeLink:inactiveLink} to={'/privacy/policy'} label={'Privacy Policy'}/>
          <NavbarItem className={router.pathname==='/terms/condition'?activeLink:inactiveLink} to={'/terms/condition'} label={'Terms Condition'}/>
          <NavbarItem className={router.pathname==='/about/us'?activeLink:inactiveLink} to={'/about/us'} label={'About Us'}/>
          <NavbarItem className={router.pathname==='/contact/us'?activeLink:inactiveLink} to={'/contact/us'} label={'Contact Us'}/>
          <NavbarItem className={router.pathname==='/user/advertisement'?activeLink:inactiveLink} to={'/user/advertisement'} label={'Advertise'}/>
          <button className='bg-red-600 hover:bg-red-700 text-white  font-semibold py-2 px-3 border border-red-100 rounded-md shadow transition focus:red-4 '>Join Now</button>
         </div>
         <div onClick={toggleMobileMenu} className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative">
            <p className="text-black text-sm">Browse</p>
            <GiHamburgerMenu className={`text-black transition ${showMobileMenu ? 'rotate-180':'rotate-0'}`}/>
            <MobileMenu visible={showMobileMenu}/>
          </div>
      </div>
    </div>
  )
}

export default Nav