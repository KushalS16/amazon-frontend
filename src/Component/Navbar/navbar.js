import React from 'react'
import Navbarbelt from './Navbarbelt/navbarbelt'
import NavbarBanner from './NavbarBanner/navbarBanner'


const Navbar = () => {
    return (
        <div className='navbar'>
            <Navbarbelt/>
            <NavbarBanner/>
        </div>
    )
}

export default Navbar