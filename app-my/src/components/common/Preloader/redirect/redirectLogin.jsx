import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";


const mapStateToPropsWithRedirect = (state) => ({
  isAuth: state.auth.isAuth
})

const withAuthRedirect = (WrappedComponent) => {
  class RedirectComponent extends React.Component{
    render() {
      if(!this.props.isAuth) return <Redirect to='/login'/>
      return <WrappedComponent {...this.props}/>
    }
    
  }
  const ConnectedWithAuthRedirectComponent = connect(mapStateToPropsWithRedirect)(RedirectComponent)
  return ConnectedWithAuthRedirectComponent
}
export default withAuthRedirect