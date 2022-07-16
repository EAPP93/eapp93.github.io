import React from 'react'
import Hamburger from 'hamburger-react'

// imports icons from react icons library
import { FaHome, FaRegAddressCard } from 'react-icons/fa'
import { IoSchool } from 'react-icons/io5'
import { GoBriefcase } from 'react-icons/go'
import { MdAttachEmail } from 'react-icons/md'

interface props {
  isOpen: boolean;
  burgerMenuHandler: Function;
}

function SideBar ({ isOpen, burgerMenuHandler }:props) {
  if (isOpen) {
    document.querySelector('#hamburgerBtn')?.classList.add('side-bar__menu--active')
  } else {
    document.querySelector('#hamburgerBtn')?.classList.remove('side-bar__menu--active')
  }

  return (
    <nav className="side-bar">

      <div className="side-bar__hamburger">
        <span>Navigation</span>
        <Hamburger toggled={isOpen} color={'rgba(255,255,255,.5)'} toggle={() => burgerMenuHandler(isOpen)} ></Hamburger>
      </div>

      <ul className='side-bar__menu' id='hamburgerBtn' >
        <li>
          <a href="#Resume">
            Inicio
            <FaHome/>
          </a>
        </li>
        <li>
          <a href="#AboutMe">
            About
            <FaRegAddressCard/>
          </a>
        </li>
        <li>
          <a href="#Education">
            Education
            <IoSchool />
          </a>
        </li>
        <li>
          <a href="#Portfolio">
            Porfolio
            <GoBriefcase/>
          </a>
        </li>
        <li>
          <a href="#ContactMe">
            Contact
            <MdAttachEmail/>
          </a>
        </li>
      </ul>

    </nav>
  )
}

export default SideBar
