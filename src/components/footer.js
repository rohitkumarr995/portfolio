import { Link } from "react-router-dom"

const Footer = () =>{
    return(
        <>
            <footer>
                <div className="main-footer">
                    <div className="left-footer-panel">
                        <p><Link to="/home">Home</Link></p>
                        <p><Link to="/about">About</Link></p>
                        <p><Link to="/resume">Resume</Link></p>
                        <p><Link to="/projects">Projects</Link></p>
                        <p><Link to={'/contact'}>Let's Work Together</Link></p>                     
                    </div>

                    <div className="right-footer-panel">
                        <div className="info-footer-note">
                            <div className="upper-footer-desc">
                                <p>&#169; 2024 Rohit. All Rights Reserved.</p>
                            </div>
                            <div className="lower-footer-desc">
                                <p><Link to="/url-not-found">Privacy Policy</Link></p>
                                <p><Link to="/url-not-found">Terms of Service</Link></p>
                            </div>
                        </div>

                        <div className="contact-footer-note">
                            <p>Email: <Link to="mailto:rkrs227@gmail.com">rkrs227@gmail.com</Link></p>
                            <p>Phone: (+91) 7906916680</p>
                            <p>Location: Sector-41, Noida, Uttar Pradesh, India 201303</p>                                        
                        </div>
                    </div>
                </div>

            </footer>
        </>
    )
}

export default Footer