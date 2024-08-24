import { Link, NavLink } from "react-router-dom";
import '../scss/global.css'
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import { useState } from "react";
import { Github } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { Twitter } from 'lucide-react';

const Navbar = () =>{

    const [navalinkStyle, setNavlinkStyle] = useState(null)
    const [menu, setMenu] = useState(true)
    const navLinkStyle = ({isActive}) =>{
        return {
            fontWeight : isActive ? "bold" : "normal",
            color : isActive ? "#424242" : "#8a8989",
        }
    }

    const displayNavbar = () =>{
        setMenu(false)
        setNavlinkStyle({
            display : "block"
        })
    }
    const hideNavbar = () =>{
        setNavlinkStyle({
            display : "none"
        })
    }

    return(
        <>
            <nav className="nav-main-header">
                <div className="nav-section">
                    <div className="nav-logo-section">
                        <div className="nav-elements logo-element">
                            <NavLink to='/home'>rohit.</NavLink>
                        </div>
                    </div>

                    <div style={navalinkStyle} className="nav-link-sections">
                        <div className="navlink-sub-section">
                            <div className="nav-elements home-element">
                                <NavLink style={navLinkStyle}  className='navlink' to='/home'>
                                    <p className='home-link'>Home</p>
                                </NavLink>
                                <div id="empty-div"></div>
                            </div>
                            <div className="nav-elements about-element">
                                <NavLink style={navLinkStyle}  className='navlink' to='/about'>
                                    <p className='about-link'>About</p>
                                </NavLink>
                            </div>
                            <div className="nav-elements resume-element">
                                <NavLink style={navLinkStyle} className='navlink' to='/resume'>
                                    <p className='resume-link'>Resume</p>
                                </NavLink>
                            </div>
                            <div className="nav-elements services-element">
                                <NavLink style={navLinkStyle}  className='navlink' to='/projects'>
                                    <p  className='services-link'>Projects</p>
                                </NavLink>
                            </div>                       
                            <div className="nav-elements contact-element">
                                <NavLink style={navLinkStyle} className='navlink' to='/contact'>
                                    <p className='contact-link'>Contact</p>
                                </NavLink>
                            </div>
                            <div className="hide-navbar">
                                <X onClick={hideNavbar}/>
                            </div>
                        </div>
                    </div>

                    <div className="nav-social-link-section">
                        <div><Link to={'https://github.com/rohitkumarr995'}><Github/></Link></div>
                        <div><Link to={'https://www.linkedin.com/in/rohit-kumar-856a0a124'}><Linkedin/></Link></div>
                        <div><Link to={'mailto:rkrs227@gmail.com'}><Mail/></Link></div>
                        <div><Link to={'https://x.com/RohitKumarr995'}><Twitter/></Link></div>  
                    </div>
                    <div className="menu">
                        
                          <Menu onClick={displayNavbar}/> 
                        
                        
                        
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar