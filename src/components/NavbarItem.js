import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarItem = ({label,to,className}) => {

  return (
    <NavLink
      exact
      to={to}
     className={className}
    >
      {label}
    </NavLink>
  )
}

export default NavbarItem