import React from 'react'
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import { project } from './types/types'
import styles from './../../styles/components/portfolio.module.scss'

function Portfolio () {
  const theme : string = useThemeContext()
  const myLang = useLanguajeContext()
  const portfolio = myLang.section[3]

  // const imageSrc = './../../asset/img/original/'
  // const iconSrc = './../../asset/icons/'

  return (
    <section className={`${styles[theme]} ${styles.portfolio}`}>
      <h2 id={portfolio.id} className={styles.sectionID}>{portfolio.textId}</h2>
      <div className={styles.projectsContainer}>
        {
          portfolio.data.project?.map((project: project, index: number) =>
            <article className={styles.project} key={index}>
              <img src={require(`./../../asset/img/original/${project.img}`)} alt={project.altImg}/>
              <header>
                <a href={project.repoURL} target="_blank" rel="noreferrer">
                  <img src={require(`./../../asset/icons/${project.repoURLImg}`)} alt=''/>
                </a>
                <a href={project.appURL} target="_blank" rel="noreferrer" >
                  <img src={require(`./../../asset/icons/${project.appURLImg}`)} alt=''/>
                </a>
              </header>
              <main>
                <h3>
                  {project.name}
                </h3>
                <br/>
                <p>
                  {project.about}
                </p>
              </main>
            </article>
          )
        }
      </div>
    </section>
  )
}

export default Portfolio
