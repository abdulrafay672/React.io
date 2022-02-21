import React from 'react'
// import Logo from '../console.log();'
import {Link} from 'react-router-dom'
import './header.css';
import 'bootstrap/dist/css/bootstrap.min.css';




const  Header=()=>{
    
    const alert1 = ()=>{
      alert("NEw Project")
    }
   
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

{/* hero Tag */}




<div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel">
  {/* <!-- Overlay --> */}
  <div class="overlay"></div>

  {/* <!-- Indicators --> */}
  <ol class="carousel-indicators">
    <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
    <li data-target="#bs-carousel" data-slide-to="1"></li>
    <li data-target="#bs-carousel" data-slide-to="2"></li>
  </ol>
  
  {/* <!-- Wrapper for slides --> */}
  <div class="carousel-inner">
    <div class="item slides active">
      <div class="slide-1"></div>
      <div class="hero">
        <hgroup>
            <h1>Walcome My App</h1>        
            <h3>Get Start Project</h3>
        </hgroup>
        <button class="btn btn-hero btn-lg" onClick={alert1} role="button">See all features</button>
      </div>
    </div>
    <div class="item slides">
      <div class="slide-2"></div>
      <div class="hero">        
        <hgroup>
            <h1>We are smart</h1>        
            <h3>Get start your next awesome project</h3>
        </hgroup>       
        <button class="btn btn-hero btn-lg" role="button">See all features</button>
      </div>
    </div>
    <div class="item slides">
      <div class="slide-3"></div>
      <div class="hero">        
        <hgroup>
            <h1>We are amazing</h1>        
            <h3>Get start your next awesome project</h3>
        </hgroup>
        <button class="btn btn-hero btn-lg" role="button">See all features</button>
      </div>
    </div>
  </div> 
</div>


        </>

)

}
export default Header;