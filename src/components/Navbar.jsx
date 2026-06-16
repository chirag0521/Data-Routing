import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router'



const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='w-full h-15 flex bg-gray-300  items-center justify-between p-4'>
            <h1>Navbar</h1>
            <div className=' flex items-center gap-5'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <NavLink to='/service'>Service</NavLink>
                <Link to='/contact'>Contact</Link>
                <button className='px-3 py-1 rounded bg-blue-500 active:scale-95' onClick={()=>navigate("/auth/login")}>Login</button>
            </div>
        </div>

    )
}

export default Navbar