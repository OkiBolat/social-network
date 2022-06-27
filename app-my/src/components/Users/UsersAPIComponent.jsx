import React from "react";
import Users from './Users'

class UsersAPIComponet extends React.Component {

  componentDidMount() {
    this.props.requestUsers(this.props.currentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.requestUsers(pageNumber, this.props.pageSize)
  }

  render() {
    return <Users
      {...this.props}
      onPageChanged={this.onPageChanged}
    />
  }
};

export default UsersAPIComponet;
