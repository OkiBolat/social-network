/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {NavLink} from "react-router-dom";
import s from  './Navbar.module.css'

const Navbar = (props) => {
  return (
    <nav className={s.nav}>
        <div>
          <p className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></p>
        </div>
        <div>
          <p className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></p>
        </div>
        <div>
          <p className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></p>
        </div>
        <div>
        <p className={s.item}><NavLink to="/todos" activeClassName={s.active}>Todos</NavLink></p>
        </div>
        <div>
        <p className={s.item}><NavLink to="/table" activeClassName={s.active}>Table</NavLink></p>
        </div>
        <div>
        <p className={s.item}><NavLink to="/friends" activeClassName={s.active}>Friends</NavLink>
            <div>
              {props?.friends?.map(obj => (
                <span>{obj.name}</span>
              ))}
            </div>
        </p>
        </div>
      </nav>
  
  )
}


export default Navbar;
