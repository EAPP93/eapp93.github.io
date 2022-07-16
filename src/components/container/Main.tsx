import React from 'react'
import AboutMe from '../pure/AboutMe'
import ContactMe from '../pure/ContactMe'
import Education from '../pure/Education'
import Portfolio from '../pure/Portfolio'
import Resume from '../pure/Resume'

function Main () {
  return (
    <main>
      <Resume></Resume>
      <AboutMe></AboutMe>
      <Education></Education>
      <Portfolio></Portfolio>
      <ContactMe></ContactMe>
    </main>
  )
}

export default Main
