/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getProfileUser, getUserStatus, updateUserStatus } from '../../redux/profileReducer'
import { withRouter } from "react-router";
import withAuthRedirect from "../common/Preloader/redirect/redirectLogin";
import { compose } from "redux";



class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId
    if (!userId) {
      userId = this.props.profileUserId
      // userId = 2
    }
    this.props.getProfileUser(userId)
    this.props.getUserStatus(userId)
  }
  render() {
    return (
      <Profile {...this.props} />
      
    )
  }
}
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  profileUserId: state.auth.userId,
  status: state.profilePage.status
})

export default compose(
  connect(mapStateToProps, { getProfileUser,getUserStatus, updateUserStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer)




