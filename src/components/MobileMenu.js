import React from 'react'
import NavbarItem from './NavbarItem';
import { useLocation } from 'react-router-dom';
const MobileMenu = ({visible}) => {
  const inactiveLink = 'text-black text-lg font-semibold cursor-pointer hover:text-red-600 transition';
  const activeLink =' text-red-600 text-lg font-semibold cursor-pointer transition';
  const router = useLocation();
  if(!visible)
    return null;
  return (
    <div className='
          flex-col
          ml-8
          gap-1
          flex
          lg:hidden
          items-center
          justify-center
         '
         style={{ transitionDuration: '500ms' }}
         >
          <NavbarItem className={router.pathname==='/'?activeLink:inactiveLink} to={'/'} label={'Home'}/>
          <NavbarItem className={router.pathname==='/privacy/policy'?activeLink:inactiveLink} to={'/privacy/policy'} label={'Privacy Policy'}/>
          <NavbarItem className={router.pathname==='/terms/condition'?activeLink:inactiveLink} to={'/terms/condition'} label={'Terms Condition'}/>
          <NavbarItem className={router.pathname==='/about/us'?activeLink:inactiveLink} to={'/about/us'} label={'About Us'}/>
          <NavbarItem className={router.pathname==='/contact/us'?activeLink:inactiveLink} to={'/contact/us'} label={'Contact Us'}/>
          <NavbarItem className={router.pathname==='/user/advertisement'?activeLink:inactiveLink} to={'/user/advertisement'} label={'Advertise'}/>
          <button className='bg-red-600 hover:bg-red-700 text-white  font-semibold py-2 px-3 border border-red-100 rounded-md shadow transition focus:red-4 '>Join Now</button>
         </div>
  )
}

export default MobileMenu