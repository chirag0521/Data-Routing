import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router'



const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-15 flex bg-gray-300  items-center justify-between p-4'>
            <h1>Navbar</h1>
            <div className=' flex items-center gap-5'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink className={({isActive}) => isActive ? "text-amber-600" : "text-black"} to='/service'>Service</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
                <button className='px-3 py-1 rounded bg-blue-500 active:scale-95' onClick={()=>navigate("/auth/login")}>Login</button>
            </div>
        </div>

    )
}

export default Navbar