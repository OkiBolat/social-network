/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { connect } from "react-redux";
import { authMe, logout } from "../../redux/authReducer";

import Header from "./Header";

class HeaderContainer extends React.Component {
  
  render() {
    return (
      <Header {...this.props} />
    )
  }
}
const mapStateToProps = (state) => ({
  id: state.auth.id,
  login: state.auth.login,
  isAuth: state.auth.isAuth,
  user: state.auth.user
})


export default connect(mapStateToProps, {authMe, logout})(HeaderContainer);
