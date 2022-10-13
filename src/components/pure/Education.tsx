import React from 'react'
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import { studyCenter } from './types/types'
import styles from './../../styles/components/education.module.scss'
import Carousel from './carousel'

function Education () {
  const theme : string = useThemeContext()
  const myLang = useLanguajeContext()
  const education = myLang.section[2]

  return (
    <section className={`${styles[theme]} ${styles.education}`}>
      <h2 id={education.id} className={styles.sectionID} >{education.textId}</h2>
      <div className={styles.education__container} >
        {
          education.data.study.map((studyCenter: studyCenter, index: number) =>
            <article className={styles.article} key={index}>
              <header>
                <h2>{studyCenter.certificate}</h2>
                <h3>
                  {`${studyCenter.name} `}
                </h3>
              </header>
              <main>
                <Carousel />
              </main>
            </article>
          )
        }
      </div>
    </section>
  )
}

export default Education
