import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header shadow' id='home' >
        <div className="header-contents">
            <h2>Order your Favourite food here.</h2>
            <p className='d-none d-lg-block'>Choose from a diverse menu featuring a delectable array of dishes. Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time. </p>
            <button class="btn btn-light rounded-pill px-3" type="button">View Menu</button>
        </div>
    </div>
  )
}

export default Header