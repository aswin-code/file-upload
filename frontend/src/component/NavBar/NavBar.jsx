import React from 'react'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const navigate = useNavigate()
    return (
        <div className='header'>
            <h4 onClick={() => navigate('/')}>Home</h4>
        </div>
    )
}

export default NavBar