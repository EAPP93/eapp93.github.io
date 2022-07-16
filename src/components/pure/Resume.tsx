import React from 'react'
import Foto from './../../asset/img/body.png'

const image: Object = {
  backgroundImage: `url(${Foto})`,
  backgroundPosition: ' 100% 100%',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat'
}

function Resume () {
  return (
    <section className="resume">
      <div className="resume__container" style={image} >
          <h2 >i am</h2>
          <h1 id='Resume'>Edwing Picado</h1>
          <span>web developer</span>
      </div>
      <div className="resume__btn" >
        <button id='more'>More</button>
        <button id='hireMe'>Hire Me</button>
      </div>
    </section>
  )
}

export default Resume
