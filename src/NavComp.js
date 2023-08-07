import React from 'react'

export default function NavComp() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-success ">
    <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href=" ">MY-PRODUCT </a>
    </div>
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <li className="nav-item"><a className="nav-link active" aria-current="page" href=" ">Home</a></li>
      <li className="nav-item"><a className="nav-link active" aria-current="page" href=" ">About</a></li>
      <li className="nav-item"><a className="nav-link active" aria-current="page" href=" ">Contact</a></li>
      <li className="nav-item"><a className="nav-link active" aria-current="page" href=" ">Link</a></li>
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
