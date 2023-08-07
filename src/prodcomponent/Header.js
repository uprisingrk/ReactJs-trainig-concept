import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
    {/* <Link to='/' >Home</Link>
    <Link to='/about'>AboutUs</Link>
    <Link to='/contact'>Contact</Link> */}
    <nav className="navbar navbar-expand-lg navbar-light bg-success">
    <div className="container-fluid">
    <div className="navbar-header"><img src='./Images/logo192.png' alt="Logo" width={40} height={29} />
      <a className="navbar-brand" href=" ">MY-PRODUCT </a>
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
    <li className="nav-item">
      <Link to='/' className="nav-link active" aria-current="page" href=" ">Home</Link></li>
      <li className="nav-item">
      <Link to ='/about' className="nav-link active" aria-current="page" href=" ">About</Link></li>
      <li className="nav-item">
      <Link to ='/contact' className="nav-link active" aria-current="page" href=" ">Contact</Link></li>
      <li className="nav-item">
      <Link to ='/users' className="nav-link active" aria-current="page" href=" ">Users</Link></li>
      <li className="nav-item">
      <Link to ='/products' className="nav-link active" aria-current="page" href=" ">Products</Link></li>
      <li className="nav-item">
      <Link to ='/registration' className="nav-link active" aria-current="page" href=" ">Registration</Link></li>
     
    </ul>
    <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-dark" type="submit">Search</button>
      </form>
  </div>
</nav>
    </div>
  )
}
