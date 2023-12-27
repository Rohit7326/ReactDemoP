import './Nav.css';
import '../HomeCompnent/Home.css';
import '../AboutComponent/About.css';
import '../LoginComponent/Login.css';
import '../RegisterCompnent/Register.css';
import '../ServiceComponent/Service.css';
import '../ContactComponent/Contact.css';
import { Link } from 'react-router-dom';
//import { Link, animateScroll as scroll } from "react-scroll";
function Nav() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    
  return (
    <div id="nav">
      <div id="logo">
        <img src="assets/photo/asset 0.jpg" alt="img" />
      </div>
      <div id="search">
        <input type="search" placeholder="Search here..." />
        <img src='assets/photo/search.png' alt='img'/>

      </div>
      <div id="nav2">
        <div id="nav2-1">
          <a onClick={() => scrollToSection('p1')}><Link to="/" >Home</Link></a>
          <a onClick={() => scrollToSection('about')}><Link to="/about">About</Link></a>
          <a onClick={() => scrollToSection('contact')}><Link to="/contact">Contact</Link></a>
          <a onClick={() => scrollToSection('service')}><Link to="/service">Service</Link></a>
          <a onClick={() => scrollToSection('register')}><Link to="/register">Register</Link></a>
          <a onClick={() => scrollToSection('login')}><Link to="/login">Login</Link></a>
        </div>
      </div>
    </div>
  );
}
export default Nav;
