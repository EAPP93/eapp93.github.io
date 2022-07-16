import React, { useState, useEffect } from 'react'
import SideBar from '../pure/SideBar'
import perfilImage from './../../asset/img/simpson.png'

function NavMenu () {
  const [width, setWidth] = useState(window.innerWidth)
  const handleResize = () => {
    setWidth(window.innerWidth)
  }

  console.log(width)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
  }, [])

  const [isOpen, setOpen] = useState(false)

  const burgerMenuHandler = (value: boolean) => {
    setOpen(!value)
  }

  return (
    <header className='nav-menu'>
      <div className='perfil-image'>
        <img src={perfilImage} alt="Imagen de Perfil"></img>
      </div>

      <SideBar isOpen={isOpen} burgerMenuHandler={burgerMenuHandler}></SideBar>
    </header>
  )
}

export default NavMenu
