import React, { useContext } from 'react'
// import Mystate from '../context/Mystate'
import MyContext from '../context/MyContext'
export default function Navbar() {
    
    const context = useContext(MyContext)
    const {newsType,setNewsType} =context
    console.log("from navbar",newsType)
  return (
    
    <div>
      <div>
    <nav className="navbar  navbar-expand-lg bg-dark navbar-dark">
  <div className="container-fluid">
    <a className="navbar-brand" href ="/" >News-Master</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" href="/" aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/" >Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
             <li><a className="dropdown-item" href="/" onClick={()=>{setNewsType("Business")}}  >Business</a></li>
            <li><a className="dropdown-item" href="/"  onClick={()=>{setNewsType("Sports")}} >Sports</a></li>
            <li><a className="dropdown-item" href="/" onClick={()=>{setNewsType("Entertainment")}}  >Entertainment</a></li>
            <li><a className="dropdown-item" href="/" onClick={()=>{setNewsType("Technology")}} >Technology</a></li> 
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn  btn-circle btn-outline-success" type="submit">🔍</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    </div>
    
  )
}
