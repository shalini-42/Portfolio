import { NavLink } from "react-router-dom";

const Navbar = () =>{
    return (
        <div className="bg-dark text-light" style={{ backgroundColor: "#eeededff", color: "hsla(0, 0%, 7%, 1.00)" }}>
{/* Navbar */}
<nav className="navbar navbar-expand-lg navbar-dark container">
<a className="navbar-brand fw-bold text-light me-0" href="#">
 Shalini M
</a>
<div className="ms-auto">
<ul className="navbar-nav flex-row gap-4">
<li className="nav-item">
<NavLink to='/' className='nav-link'>Home</NavLink>
</li>
<li className="nav-item">
<NavLink to='/skillcard' className='nav-link'>Skill</NavLink>
</li>
<li className="nav-item">
<NavLink to='/project' className='nav-link'>Project</NavLink> 
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