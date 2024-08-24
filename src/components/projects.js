import '../scss/global.css'
import BinaryTranslator from '../assets/binary-translator.png'
import XCart from '../assets/xcart.png'
import Portfolio from '../assets/portfolio.png'
import Button from '../utils/Button.js'
import { useEffect, useState } from 'react'
import ArrowUp from '../utils/arrow-up.js'

const Project = () =>{
    const [opacity, setOpacity] = useState(false)

    useEffect(()=>{
        setOpacity(true)
        window.scrollTo(0,0);
    },[])

    const handleNavigation = (url) =>{
        window.location.href = url;
    }

    return (
        <>
        <section className= {`fade-in ${opacity ? 'visible' : ''} services-main-container`}>
            <div className="services-headline-desc">
                <h2 id="headline-title">Projects</h2>
                <p id="headline-desc">I have built couple of projects showcasing my skills in front-end development and SQL. These projects include a dynamic web application using ReactJS, and a responsive website styled with CSS3 and SASS/SCSS. Additionally, I have worked on a data-driven application utilizing SQL for efficient database management. These experiences have honed my abilities and fueled my passion for software development.</p>
            </div>
            <div className="services-card-section">
                <div className="service-card">
                    <div className="img-content">
                        <img src={BinaryTranslator} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>Binary Translator</h1>
                        <Button onclick={()=>handleNavigation('https://binary-translator-ebon.vercel.app/')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="img-content">
                        <img src={XCart} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>X-Cart</h1>
                        <Button onclick={()=>handleNavigation('https://xcart-client-henna.vercel.app/ind/home')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
                <div className="service-card">
                    <div className="img-content">
                        <img src={Portfolio} alt="" />
                    </div>
                    <div className="card-content">
                        <h1 className='card-heading'>Portfolio</h1>
                        <Button onclick={()=>handleNavigation('https://myportfolio-rohit-weld.vercel.app/home')} className="btn-services">Visit Me</Button>
                    </div>
                </div>
            </div>
        </section>
        <ArrowUp/>
        </>
    )
}

export default Project