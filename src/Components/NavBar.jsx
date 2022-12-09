import React from 'react'
import logo from '../assets/logo.png'
import sun from '../assets/sun.svg'

function NavBar() {
    return ( 
        <div className='h-[100px] w-full flex justify-between p-5 border-b-[1px] border-grn/25'>
            <div className="logo flex items-center w-1/2 gap-x-1.5	">
                <img src={logo} alt=""  className='w-[40px]'/>
                <h1 className='font-mont font-black text-2x'>raphy.blog</h1>
            </div>
            <div className="menu flex items-center">
                <img src={sun} alt="" />
            </div>
        </div>
     );
}

export default NavBar;