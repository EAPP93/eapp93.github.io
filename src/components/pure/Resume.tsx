import React from 'react'
import { homeIcons } from '../../asset/icons/icons'
import { useGetPropertyValue } from '../../hooks/useGetPropertyValue'
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import styles from './../../styles/components/Home.module.scss'

function Resume () {
  const myLang = useLanguajeContext()
  const home = myLang.section[0]
  const theme : string = useThemeContext()
  const curriculumURL = 'https://drive.google.com/file/d/1pdQqaEAUcH73cqoDs3HipxSNFggnZvHc/view?usp=sharing'
  return (
    <section id={home.id} className={`${styles[theme]} ${styles.home}`}>
      <div className={styles.textContainer} >
          <h2>{home.data.textSection[0]}</h2>
          <h1>{home.data.textSection[1]}</h1>
          <span >{home.data.textSection[2]}</span>
      </div>
      <div className={styles.btnContainer} >
        <a href={curriculumURL} target="_blank" download rel="noreferrer">
          <img src={useGetPropertyValue(homeIcons, 'downloadCV')} className={styles.downloadCV} alt="download"/>
          {home.data.textBtn.downloadCV}
        </a>
        <a href={`#${myLang.section[4].id}`}>
          <img src={useGetPropertyValue(homeIcons, 'hireMe')} className={styles.hireMe} alt=""/>
          {home.data.textBtn.hireMe}
        </a>
      </div>
    </section>
  )
}

export default Resume
