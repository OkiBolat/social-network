/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Preloader from "../../common/Preloader/Preloader";
import s from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
  
  return (!props.profile ? <Preloader/> :
    <div className={s.content__card}>
      <img className={s.profileImage}src={props.profile.photos.large} />
      <div className={s.card__info}>
        <h1>{props.profile.fullName}</h1>
        <ProfileStatus status={props.status}
        updateStatus={props.updateStatus}/>
        <ul>
          <li>Date of Birdth:{props.birdth}</li>
          <li>City: {props.city}</li>
          <li>Education: {props.education}</li>
          <li>WebSite: {props.website}</li>
        </ul>
      </div>

    </div>
  )
}

export default ProfileInfo;

