import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md' 
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_owbqung', 'template_xv11dsy', form.current, 'VsYz3sQuC8kuAmDPx')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

      alert("Submitted successfully");
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
              <article className="contact__option">
                  <MdOutlineEmail className='contact__option-icon'/>
                  <h4>Email</h4>
                  <h5>mpaniagua@comexstudio.com</h5>
                  <a target="_blanck" href="mailto:mpaniagua@comexstudio.com">Send a message</a>
              </article>

              <article className="contact__option">
                  <RiMessengerLine className='contact__option-icon'/>
                  <h4>Messager</h4>
                  <h5>Miguel Paniagua</h5>
                  <a target="_blanck" href="https://m.me/migueleduado.paniaguasuarez.9">Send a message</a>
              </article>

              <article className="contact__option">
                  <BsWhatsapp className='contact__option-icon'/>
                  <h4>WhatsApp</h4>
                  <h5>+71263513</h5>
                  <a target="_blanck" href="https://api.whatsapp.com/send?phone=50671263513&amp;text=Hola!&nbsp;me&nbsp;podes&nbsp;ayudar?">Send a message</a>
              </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name'  placeholder='Your Full Name ' required/>
          <input type="email"  name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact