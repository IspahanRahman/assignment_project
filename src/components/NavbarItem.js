import React from 'react'

const NavbarItem = ({label}) => {
  return (
    <div className='
      text-black
      text-lg
      font-semibold
      cursor-pointer
      hover:text-red-600
      transition
    '>
      {label}
    </div>
  )
}

export default NavbarItem