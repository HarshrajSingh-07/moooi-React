import React from "react";
import "./Contact.css";
import { MdOutlineMailOutline } from "react-icons/md";
import { BsChatQuote } from "react-icons/bs";
// document.querySelector('#contact-form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     e.target.elements.name.value = '';
//     e.target.elements.email.value = '';
//     e.target.elements.message.value = '';
//   });
const handleContact=(e)=>{
    e.preventDefault();
    e.preventDefault();
    e.target.elements.name.value = '';
    e.target.elements.email.value = '';
    e.target.elements.message.value = '';
}
const Contact = () => {
  return (
    <>
      <section id="ContactUs">
        <div className="contactHead">
            <h1>Contact</h1>
            <p>Do you want to know more regarding Moooi or our products? We’d be happy to hear from you!</p>
            <div className="cntBtn">
                <button><MdOutlineMailOutline className="cntBtnIcon" style={{marginTop:2}}/>send us an e-mail</button>
                <button><BsChatQuote className="cntBtnIcon"/>Chat with us</button>
            </div>
        </div>
        <div id="contact">
  <div class="contact-wrapper">

    
    <form id="contact-form" class="form-horizontal" role="form" onSubmit={handleContact}>
       
      <div class="form-group">
        <div class="col-sm-12">
          <input type="text" class="form-control" id="name" placeholder="NAME" name="name" value={"harsh"} required onChange={(e)=>e.target.value}/>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-12">
          <input type="email" class="form-control" id="email" placeholder="EMAIL" name="email" value="harsh@123" required/>
        </div>
      </div>

      <textarea class="form-control" rows="10" placeholder="MESSAGE" name="message" required></textarea>
      
      <button class="btn btn-primary send-button" id="submit" type="submit" value="SEND">
        <div class="alt-send-button">
          <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
        </div>
      
      </button>
      
    </form>
    
    
      <div class="direct-contact-container">

        <ul class="contact-list">
          <li class="list-item"><i class="fa fa-map-marker fa-2x"><span class="contact-text place">City, State</span></i></li>
          
          <li class="list-item"><i class="fa fa-phone fa-2x"><span class="contact-text phone"><a href="tel:1-212-555-5555" title="Give me a call">(212) 555-2368</a></span></i></li>
          
          <li class="list-item"><i class="fa fa-envelope fa-2x"><span class="contact-text gmail"><a href="mailto:#" title="Send me an email">hitmeup@gmail.com</a></span></i></li>
          
        </ul>

        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-github" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-codepen" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-twitter" aria-hidden="true"></i></a>
          </li>
          <li><a href="#" target="_blank" class="contact-icon">
            <i class="fa fa-instagram" aria-hidden="true"></i></a>
          </li>       
        </ul>

        <div class="copyright">&copy; ALL OF THE RIGHTS RESERVED</div>

      </div>
    
  </div>
  
        </div>
      </section>
    </>
  );
};

export default Contact;
