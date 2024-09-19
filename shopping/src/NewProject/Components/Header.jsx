import React from 'react'

const Header = () => {
  return (
    <div className='headerSection text-white'>
        <div className="left">
            <div className="title">
                <h1 className='img1'><img src="images/meg.jpg" alt="anil_pic" /><i>MEGHANIL FASHIONS</i></h1>

            </div>
        </div>
        <div className="center">
            <ul>
                <li>Women</li>
                <li>Men</li>
                <li>Child</li>
                <li>beauty </li>
            </ul>
        </div>
        <div className="search ">
            <input type="text" class="rounded-5" placeholder='search..' />
        </div>
        <div className="right">
            <div className="signin">Signin / SignUp</div>
            <div className="cart">Cart</div>
        </div>
      
    </div>
  )
}

export default Header
