import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/comexstudio.png'
import IMG2 from '../../assets/gruponosara.png'
import IMG3 from '../../assets/nicoyalex.png'
import IMG4 from '../../assets/apus.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>

      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">

            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG1} alt="Portfolio" />
              </div>
                <h3><a target='_blank' href="https://comexstudio.com/">Comex Studio</a></h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/Miguehk/Comexstudio" className='btn' target='_blank'>Github</a>
                  <a href="https://dribbble.com/Miguelkl" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>  

            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG2} alt="Portfolio" />
              </div>
                <h3><a target='_blank' href="https://gruponosara.com/">Grupo Nosara</a></h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/Miguehk/Grupo-Nosara" className='btn' target='_blank'>Github</a>
                  <a href="https://dribbble.com/Miguelkl" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>  

            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG3} alt="Portfolio" />
              </div>
                <h3><a target='_blank' href="https://nicoyalex.com/">Nicoyalex</a></h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/Comexstudio/NicoyaLex" className='btn' target='_blank'>Github</a>
                  <a href="https://dribbble.com/Miguelkl" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>  

            <article className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={IMG4} alt="Portfolio" />
              </div>
                <h3><a target='_blank' href="https://apus-costarica.com/">Apus</a></h3>
                <div className="portfolio__item-cta">
                  <a href="https://github.com/Miguehk/Apus" className='btn' target='_blank'>Github</a>
                  <a href="https://dribbble.com/Miguelkl" className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>  

            
      </div>
    </section>

  )
}

export default Portfolio