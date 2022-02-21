// import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <header className="App-header">


       {/* hero tag */}
       

       

<nav class="navbar navbar-expand-md navbar-dark fixed-top" id="banner">
	<div class="container">
  {/* <!-- Brand --> */}
  <a class="navbar-brand" href="#"><span>Logo</span> Here</a>

  {/* <!-- Toggler/collapsibe Button --> */}
    

  {/* <!-- Navbar links --> */}
  <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li> 
	   {/* <!-- Dropdown --> */}
    <li class="nav-item dropdown">
      <a class="nav-link" href="#" id="navbardrop">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
    </ul>
  </div>
	</div>
</nav>

<div class="banner">
	<div class="container">
	<div class="banner-text">
	<div class="banner-heading">
	Glad to see you here !
	</div>
	<div class="banner-sub-heading">
	Here goes the secondary heading on hero banner
	</div>
	<button type="button" class="btn btn-warning text-dark btn-banner">Get started</button>
	</div>
	</div>
</div>
<section id="about">
<div class="container">
	<div class="text-intro">
	<h2>About Us</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
	</div>
</div>
</section>

       {/* hero tag close */}   
      </header>



      <div className="footerCard">
            <p> <i class="fas fa-ice-cream only"></i></p>
            <p> <i class="far fa-street-view"></i> </p>
            <p> <i class="fas fa-ice-cream"></i></p>
            <p> <i class="far fa-street-view"></i> </p>
        </div>  

    </div>
  );
}

export default App;

