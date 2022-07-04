import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Wha I Offer</h5>
      <h2>Services</h2>
      
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>AR experience design in Adobe XD.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Figma Designs.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Mobile app UX and UI design services..</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Web design services.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Design workshops..</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Delopment</h3>
          </div>
          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Responsive web development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Creative development.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Integration with databases.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>E-commerce.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Mail management.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Development with react js.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Creative designs.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Designs for product sales</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>Video and image editing</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>HTML, CSS course.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>React course.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>JavaScript course.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>E-learning soon.</p>
            </li>
            <li>
            <BiCheck className='service__list-icon'/ >
              <p>General theory of the web.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION*/}
      </div>
    </section>
  )
}

export default Services