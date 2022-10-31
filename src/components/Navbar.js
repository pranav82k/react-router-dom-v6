import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul className="nav navbar-nav">
        <li className="nav">
          <Link to='/'>Home</Link>
        </li>
        <li className="nav">
          <Link to='/products'>Products</Link>
        </li>
        <li className="nav">
          <Link to='/about'>About</Link>
        </li>
        <li className="nav">
          <Link to='/contact'>Contact</Link>
        </li>
        <li className="nav">
          <Link to='/admin'>Admin</Link>
        </li>
        <li className="nav">
          <Link to='/login'>Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar