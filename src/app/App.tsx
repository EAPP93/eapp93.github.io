import React from 'react'
import styles from './../styles/components/App.module.scss'

// ***************** imports components **********************
import NavMenu from '../components/container/NavMenu'
import Main from '../components/container/Main'

// ***************** providers ********************************
import Provider, { useThemeContext } from '../hooks/UseProvider'

export default function App () {
  const theme : string = useThemeContext()
  return (
    <Provider>
      <div id='wrapper' className={`${styles[theme]}`}>
        <div className={styles.container}>
          <NavMenu></NavMenu>
          <Main></Main>
        </div>
      </div>
    </Provider>
  )
}
