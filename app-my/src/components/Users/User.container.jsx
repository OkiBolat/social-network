import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {followUser, unfollowUser, toogleInFollowing, requestUsers } from "../../redux/usersReducer";
import withAuthRedirect from "../common/Preloader/redirect/redirectLogin";
import UsersAPIComponent  from "./UsersAPIComponent";
import {getTotalCount,getCurrentPage,getPageSize,getIsFetching,getFollowingInProgress, getUsersReserlect } from "../../redux/usersSelectors";


const UserContainer = (props) => {
  return <UsersAPIComponent  {...props}/>
}
const mapStateToProps = (state) => {
  return {
    users: getUsersReserlect(state),
    totalCount: getTotalCount(state),
    currentPage: getCurrentPage(state),
    pageSize: getPageSize(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state)
  }
}

export default compose(
  connect(mapStateToProps, {followUser,unfollowUser,toogleInFollowing, requestUsers }),
  withAuthRedirect)
(UserContainer);
