/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo.jsx";



import s from './Profile.module.css'

const Profile = React.memo((props) => {
  return (
    <div>
      <div className={s.content__image}>
      </div>
      <div className={s.content__card}>
        <ProfileInfo profile={props.profile}
        status={props.status}
        updateStatus={props.updateUserStatus}
        />
      </div>
      <MyPostsContainer/>

    </div>
  )
})

export default Profile;
