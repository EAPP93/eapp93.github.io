import React from 'react'
// components
import About from '../pure/AboutMe'
import Contact from '../pure/ContactMe'
import Education from '../pure/Education'
import Portfolio from '../pure/Portfolio'
import Resume from '../pure/Resume'
// styles
import styles from './../../styles/components/Main.module.scss'

function Main () {
  return (
    <main className={styles.main}>
        <Resume></Resume>
        <About></About>
        <Education></Education>
        <Portfolio></Portfolio>
        <Contact></Contact>
    </main>
  )
}

export default Main
