import { NavLink } from 'react-router-dom';
import './header.css';

// const pages = [
//   <Link to='/' className='if active'> Home</Link>, <Link to='about'  className='if'> About</Link>, <Link to='services'  className='if'> Services</Link>, <Link to='contact'  className='if'> Contact</Link>];
// const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
  return(
    <nav>
      {/* <NavLink to='/payment'><a href="#payment">Payment</a></NavLink> */}
    <NavLink to='/contact'><a href="#contact">Contact</a></NavLink>
    <NavLink to='/services'><a href="#about">Services</a></NavLink>
    <NavLink to='/about'><a href="#news">About</a></NavLink>
    <NavLink to='/'><a href="#home">Home</a></NavLink>
    
  </nav>
  );
}
export default ResponsiveAppBar;
