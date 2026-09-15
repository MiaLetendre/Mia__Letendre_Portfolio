import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className = "header">
        {/*
        <NavLink to = "/" className = "w-10 h-10  bg-pale-burnt-lake rounded-lg items-center justify-center flex font-sosonormal shadow-md hover:shadow-lg transition-shadow duration-300">
          <p className = "text-black text-lg">AH</p>
        </NavLink>
        */}
        <nav className = "flex justify-center items-center text-lg gap-5 font-sosonormal lg:rounded-lg bg-arcane-violet p-2 shadow-md hover:shadow-lg transition-shadow duration-300">
            <NavLink to = "/" className = {({ isActive }) => (isActive ? 'text-arcane-violet  font-bold transition-colors duration-300': 'hover:text-arcane-violet font-bold transition-colors duration-300')}>
            <p className = "w-32 h-12 bg-white rounded-lg flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow duration-300">Home</p>
          </NavLink>
          <NavLink to = "/about" className = {({ isActive }) => (isActive ?  'text-arcane-violet  font-bold transition-colors duration-300': 'hover:text-arcane-violet font-bold transition-colors duration-300' )}>
            <p className = "w-32 h-12 bg-white rounded-lg flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow duration-300">About</p>
          </NavLink>
          <NavLink to = "/projects" className =  {({ isActive }) => (isActive ? 'text-arcane-violet  font-bold transition-colors duration-300': 'hover:text-arcane-violet font-bold transition-colors duration-300')}>
            <p className = "w-32 h-12 bg-white rounded-lg flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow duration-300">Projects</p>
          </NavLink>
          <NavLink to = "/proficiencies" className =  {({ isActive }) => (isActive ? 'text-arcane-violet  font-bold transition-colors duration-300': 'hover:text-arcane-violet font-bold transition-colors duration-300')}>
            <p className = "w-32 h-12 bg-white rounded-lg flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow duration-300">Proficiencies</p>
          </NavLink>
          <NavLink to = "/contact" className =  {({ isActive }) => (isActive ? 'text-arcane-violet  font-bold transition-colors duration-300': ' hover:text-arcane-violet font-bold transition-colors duration-300')}>
            <p className = "w-32 h-12 bg-white rounded-lg flex items-center justify-center text-xl shadow-md hover:shadow-lg transition-shadow duration-300">Contact</p>
          </NavLink>
        </nav>
    </header>
  )
}

export default Navbar