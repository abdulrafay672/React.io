import React from 'react'
import {Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

const  About=()=>{
    // alert("helo1") 
    
    return(   
        <>
        
      <nav className="navbar navbar-expand-lg navbar-light bg-light h3">
  <div className="container-fluid">Header
   
    <div className="container  navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
      <Link className="nav-link " to="/Home">Home </Link> 

        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/about">About Us</Link> 

        </li>
        <li className="nav-item">
        <Link className="nav-link " to="/contact">Contact</Link> 
        </li>
      </ul>
    </div>
  </div>
</nav>
<div className="container">
<center>
<h1>
    About Page
</h1>
</center>
            </div>
    
        </>

        
)
}
export default About;