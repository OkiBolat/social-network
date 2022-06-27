/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { NavLink } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import s from './Users.module.css';
const cardBackground = 'https://png.pngtree.com/png-vector/20191023/ourlarge/pngtree-user-vector-icon-with-white-background-png-image_1849343.jpg'


const Users = (props) => {

  let pagesCount = Math.ceil(props.totalCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return <> <div className={s.pageSizes}>
    {pages.map(page => (
      <span className={props.currentPage === page ? s.selectedPage : s.pages} onClick={() => props.onPageChanged(page)}>{page}</span>
    ))}
  </div>
    <div className={s.user_card}>
      {props.isFetching ? <Preloader /> : props.users.map((obj) => (
        <div style={{ backgroundImage: `url(${obj.photos.small !== null ? obj.photos.small : cardBackground })` }} className={s.user_block} >
          <div className={s.user_logo}>
            <NavLink to={`/profile/${obj.id}`}>
              {/* <img className={s.userImage} src={obj.photos.small} alt="asd" /> */}

              <div className={s.userInfo}>
                <p>{obj.name}</p>
                <p>{obj.status}</p>
              </div>
            </NavLink>
            {obj.followed ?
              <button className={s.myButton} disabled={props.followingInProgress.some(id => id === obj.id)} onClick={() => {
                props.unfollowUser(obj.id)
              }}>Unfollow</button> :
              <button className={s.myButton}  disabled={props.followingInProgress.some(id => id === obj.id)} onClick={() => {
                console.log(obj.followed)
                props.followUser(obj.id)
              }}>Follow</button>
            }
          </div>
        </div>
      ))}
    </div>
  </>
};

export default Users;
