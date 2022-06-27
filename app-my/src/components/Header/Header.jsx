/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import s from './Header.module.css'

const Header = (props) => {
  return <header className={s.header}>
    <div className={s.logo}>
      <h2>Bulat's</h2>
      <h3 className={s.network}>Network</h3>
    </div>
    <div className={s.userLogin}>
      <NavLink to='/login' >
        {!props.isAuth ? "login" : <div>
          <div>{props.login}</div>
          <div>
            <button onClick={props.logout}>Log out</button>
          </div>
        </div>}</NavLink>
    </div>
  </header>
}
export default Header;