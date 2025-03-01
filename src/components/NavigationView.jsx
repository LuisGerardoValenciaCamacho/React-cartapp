import React from 'react'
import { NavLink } from 'react-router-dom'

export const NavigationView = () => {
  return (
    <nav className="navbar bg-secondary" data-bs-theme="dark">
        <div className="container-fluid justify-content-start">
            <NavLink className={"navbar-brand"} to={"/"}><img src='/src/assets/react.svg'/> Cart App</NavLink>
            <NavLink className={"navbar-brand"} to={"/about"}>About</NavLink>
            <NavLink className={"navbar-brand"} to={"/catalog"}>Catalog</NavLink>
            <NavLink className={"navbar-brand"} to={"/cart"}>Cart</NavLink>
        </div>
    </nav>
  )
}
