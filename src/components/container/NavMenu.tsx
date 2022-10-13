import React, { useState } from 'react'
import Hamburger from 'hamburger-react' // hamburger component
import { hamburguerMenuIcons } from '../../asset/icons/icons'

// *********************** styles ****************************
import styles from './../../styles/components/NavMenu.module.scss'

// *********************** context ******************************
import { useLanguajeContext, useThemeContext } from '../../hooks/UseProvider'
import { useGetPropertyValue } from '../../hooks/useGetPropertyValue'

// *********************** types ****************************
import { section } from '../pure/types/types'

function NavMenu () {
  const myLang = useLanguajeContext()
  const theme : string = useThemeContext()

  // hamburger button - state
  const [isOpen, setOpen] = useState(false)

  // hamburguer button - change state function
  const burgerMenuHandler = (value: boolean) => {
    setOpen(!value)
  }

  if (isOpen) {
    document.querySelector('#header')?.classList.add(`${styles.activeSideBar}`)
  } else {
    document.querySelector('#header')?.classList.remove(`${styles.activeSideBar}`)
  }

  return (
    <header id='header' className={`${styles.header} ${styles[theme]}`} >
      <div className={styles.hamburgerContainer}>
        <h2 className={styles.title}>{myLang.navbarText}</h2>
        <Hamburger toggled={isOpen} color={'rgba(255,255,255,.75)'} toggle={() => burgerMenuHandler(isOpen)} ></Hamburger>
      </div>
      <nav className={`${styles.sideBar}`} >
        <section className={styles.menuImg}>
        </section>
        <ul className={styles.menuContainer} >
          {
            myLang.section.map((item: section, index: number) =>
              <li key={index}>
                <a className={`${styles.text}`} href={`#${item.id}`} onClick={() => burgerMenuHandler(isOpen)} >
                  {item.textId}
                  <img className={`${styles.icon}`} src={useGetPropertyValue(hamburguerMenuIcons, item.id)} alt={''} />
                </a>
              </li>
            )
          }
        </ul>
    </nav>
    </header>
  )
}

export default NavMenu
