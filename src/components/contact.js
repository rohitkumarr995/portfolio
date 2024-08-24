import { Link } from "react-router-dom";
import '../scss/global.css'
import { MapPin } from 'lucide-react';
import { Mail } from 'lucide-react';
import { PhoneCall } from 'lucide-react';
import Button from '../utils/Button.js'
import { useEffect, useState } from "react";
import { serverURL } from "../utils/Constants.js";
import ArrowUp from "../utils/arrow-up.js";

const nameRegex = /^([a-zA-Z\s]+)$/
const emailRegex = /^([a-zA-Z0-9\.]+)@([a-zA-Z]{2,10}).([a-zA-Z]{2,5})$/
const subjectRegex = /^([a-zA-Z0-9\.\-\s]+)$/
const messageRegex = /^([a-zA-Z0-9\.\-\:\s , ?]+)$/

const Contact = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [isSent, setIsSent] = useState(false)
    const [alert, setAlert] = useState('')
    const [opacity, setOpacity] = useState(false)
    const [dateTime, setDateTime] = useState('')

    useEffect(()=>{
        setOpacity(true)
        window.scrollTo(0,0);
        let date = new Date();
        setDateTime(`${date.toLocaleDateString()}, ${date.toLocaleTimeString()}`)
    },[])


    const sendMesage = async (event) =>{
        event.preventDefault();

        if(!nameRegex.test(name)){
            setAlert("Invalid Name")
        }else if(!emailRegex.test(email)){
            setAlert("Invalid Email")
        }else if(!subjectRegex.test(subject)){
            setAlert("Invalid Subject")
        }else if(!messageRegex.test(message)){
            setAlert("Invalid Message")
        }else{
            setIsSent(true)
            const form = document.forms['submit-to-google-sheet']
            let response = await fetch(serverURL, { method: 'POST', body: new FormData(form)})
            response = await response.json();
            if(!response.ok){
                console.log("Something went wrong");
            }
            setAlert("Meesage sent successfully")
            setIsSent(false)
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }      
    }

  return (
    <>
      <section className= {`fade-in ${opacity ? 'visible' : ''} contact-main-container`}>
        <div className="inner-contact-container">
            <div className="map-section">
                <h2>Contact</h2>
                <p>We're here to help with any questions or concerns. Feel free to reach out through the contact form or the details below.</p>
                <div className="google-map-iframe">
                    <iframe
                        width="100%"
                        height="600"
                        frameborder="0"
                        scrolling="no"
                        marginheight="0"
                        marginwidth="0"
                        src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Sector-41,%20Noida,%20Uttar%20Pradesh%20India+(Portfolio)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    >
                    <Link to="https://www.gps.ie/">gps tracker sport</Link>
                    </iframe>
                </div>
            </div>

            <div className="contact-details-section">
                <div className="user-detail">
                    <div className="user-markers">
                        <div className="user-marker-component">
                            <div className="marker">
                                <div>
                                    <MapPin /> 
                                </div>
                            </div>
                            <div className="marker-details">
                                <p id="marker-name">Location</p>
                                <p id="marker-desc">Sector-41, Noida, Uttar Pradesh, India 201303</p>
                            </div>
                        </div>
                        <div className="user-marker-component">
                            <div className="marker">
                                <div>
                                    <Mail /> 
                                </div>
                            </div>
                            <div className="marker-details">
                                <p id="marker-name">Email</p>
                                <p id="marker-desc">rkrs227@gmail.com</p>
                            </div> 
                        </div>
                        <div className="user-marker-component">
                            <div className="marker">
                                <div>
                                    <PhoneCall /> 
                                </div>
                            </div>
                            <div className="marker-details">
                                <p id="marker-name">Phone</p>
                                <p id="marker-desc">+91-7906916680</p>
                            </div>            
                        </div>  
                    </div>
                </div>
                <div className="contact-form">
                    <form name="submit-to-google-sheet" onSubmit={sendMesage}>
                        <div className="form-element-basic">
                            <div>
                                <input type="text" name="date"  value={dateTime} hidden/>                           
                            </div>
                            <div>
                                <input type="text" name="name"  value={name} style={alert.includes('Name') ? {border:"1px solid red"} : null} placeholder="Name" onChange={e=>setName(e.target.value)}/>                               
                            </div>
                            <div>
                                <input type="email" name="email" value={email} style={alert.includes('Email') ? {border:"1px solid red"} : null} placeholder="Email" onChange={e=>setEmail(e.target.value)}/> 
                            </div>                           
                        </div>
                        <div className="form-element-subject">
                            <div>
                                <input type="text" name="subject" value={subject} style={alert.includes('Subject') ? {border:"1px solid red"} : null} placeholder="Subject" onChange={e=>setSubject(e.target.value)}/>
                            </div>   
                        </div>
                        <div className="form-element-message">
                            <div>
                                <textarea name="message" value={message} style={alert.includes('Message') ? {border:"1px solid red"} : null} placeholder="Message" onChange={e=>setMessage(e.target.value)}/>
                            </div>                          
                        </div>
                        <div className="btn-msg-container">
                        <div className="res-status" style={alert.includes('successfully') ? {color:"green"} : {color:"red"}}>{alert}</div>
                            <div>
                                <Button className="btn-message">{isSent?"Sending..." : "Send Message"}</Button>
                            </div>                          
                        </div>                       
                    </form>
                </div>
            </div>
        </div>      
      </section>
      <ArrowUp/>
    </>
  );
};

export default Contact;
