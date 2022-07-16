import React from 'react'

// import img
import introduccionProgramacion from './../../asset/img/Certificado-OpenBootCamp-Introduccion-a-la-programacion.webp'
import java from './../../asset/img/Certificado-OpenBootCamp-Java-Basico.webp'
import git from './../../asset/img/Certificado-OpenBootCamp-Git.webp'
import htmlcss from './../../asset/img/Certificado-OpenBootCamp-HTML-y-CSS-Basico.webp'
import javascript from './../../asset/img/Certificado-OpenBootCamp-Javascript-Basico.webp'
import reactBasico from './../../asset/img/Certificado-OpenBootCamp-React-Basico.webp'
import reactIntermedio from './../../asset/img/Certificado-OpenBootCamp-React-Intermedio.webp'
function Education () {
  return (
    <section className='education'>
      <h2 id='Education'>Education</h2>
      <article className='education__article'>
          <h3>Boot Camp</h3>
          <p>Open Bootcamp - 2022</p>
        <ul>
          <li>
            <img src={introduccionProgramacion}></img>
          </li>
          <li>
            <img src={java}></img>
          </li>
          <li>
            <img src={git}></img>
          </li>
          <li>
            <img src={javascript}></img>
          </li>
          <li>
            <img src={htmlcss}></img>
          </li>
          <li>
            <img src={reactBasico}></img>
          </li>
          <li>
            <img src={reactIntermedio}></img>
          </li>
        </ul>
      </article>

    </section>
  )
}

export default Education
