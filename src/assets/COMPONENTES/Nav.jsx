import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav>
        <NavLink className={({isActive})=>(isActive? "activado": null)}
        to= "/">Inicio</NavLink>
        <NavLink className={({isActive})=>(isActive? "activado": null)} to= "/SOBREMI">Sobre Mi</NavLink>
        <NavLink className={({isActive})=>(isActive? "activado": null)} to= "/MiPortafolio">Mi Portafolio</NavLink>
        <NavLink className={({isActive})=>(isActive? "activado": null)} to= "/Contactame">Contactame</NavLink>
      

    </nav>
  )
}

export default Nav