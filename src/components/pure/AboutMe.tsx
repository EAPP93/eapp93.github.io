import React from 'react'
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import styles from './../../styles/components/about.module.scss'
import face from './../../asset/img/original/face.png'

// import Foto from './../../asset/img/face.png'

function AboutMe () {
  const theme : string = useThemeContext()
  const myLang = useLanguajeContext()
  const about = myLang.section[1]

  return (
    <section className={`${styles[theme]} ${styles.about}`} >
      <h2 id={about.id} className={styles.sectionID} >{about.textId}</h2>

        <article className={`${styles.article} `} >
            <img src={face} alt={about.data.textImg.face} ></img>
            <h4 className={`${styles.title}`} >
              {about.data.text[0].title}
            </h4>
            <br/>
            <p className={`${styles.text}`} >
              {about.data.text[0].paragraph[0]}
            </p >
            <br/>
            <p className={`${styles.text}`} >
              {about.data.text[0].paragraph[1]}
            </p>
            <br/>
            <a href={`#${myLang.section[4].id}`} >
              {about.data.textBtn.hireMe}
            </a>
        </article>

      <div>
        <ul>

        </ul>
      </div>

    </section>
  )
}

export default AboutMe
