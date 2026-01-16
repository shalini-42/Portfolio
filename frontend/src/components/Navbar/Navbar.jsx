import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="navbar navbar-expand-lg bg-dark" style={{ backgroundColor: "#131111ff",height:"60px",alignContent:"center",}}>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark container" >
<a className="navbar-brand fw-bold text-light me-0" href="#">
 Shalini M
</a>
<div className="ms-auto">
<ul className="navbar-nav flex-row gap-4">
<li className="nav-item">
<NavLink to='/' className='nav-link'>Home</NavLink>
</li>
<li className="nav-item">
<NavLink to='/skillcard' className='nav-link'>Skills</NavLink>
</li>
<li className="nav-item">
<NavLink to='/project' className='nav-link'>Projects</NavLink> 
  </li>
  <li className="nav-item">
<NavLink to='/education' className='nav-link'>Education</NavLink> 
  </li>
  <li className="nav-item">
<NavLink to='/about' className='nav-link'>About</NavLink> 
  </li>
  
<li className="nav-item">
 <NavLink to='/contact' className='nav-link'>Contact</NavLink>
</li>
</ul>
</div>
</nav>
</div>
    )
}

export default Navbar;