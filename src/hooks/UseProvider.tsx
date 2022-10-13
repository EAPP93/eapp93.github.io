import React, { useContext, useState } from 'react'
import { es, en, Language } from '../asset/lang/language'

// theme context and function changeTheme
const themeContext = React.createContext<string>('light')
const themeChangeContext = React.createContext<Function| undefined>(undefined)

// language context and function changeLanguage
const languageContext = React.createContext<Language>(en)
const languageChangeContext = React.createContext<Function| undefined>(undefined)

export function useThemeContext () {
  return useContext(themeContext)
}

export function useLanguajeContext () {
  return useContext(languageContext)
}

function Provider ({ children }: any): any {
  const [theme, setTheme] = useState<string>('light')
  const changeTheme = () => theme === 'light' ? setTheme('dark') : setTheme('light')

  const [language, setLanguage] = useState<Language>(es)
  const changeLanguage = () => language === es ? setLanguage(en) : setLanguage(es)

  return (
    <themeContext.Provider value={theme}>
    <themeChangeContext.Provider value={changeTheme}>
      <languageContext.Provider value={language} >
      <languageChangeContext.Provider value={changeLanguage} >
        {children}
      </languageChangeContext.Provider>
      </languageContext.Provider>
    </themeChangeContext.Provider>
    </themeContext.Provider>
  )
}

export default Provider
/**
   *
   * const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }
  alert(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])
  */
