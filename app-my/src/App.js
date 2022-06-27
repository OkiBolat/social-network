import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter, Route, Switch, withRouter } from "react-router-dom";
import { compose } from "redux";
import './App.css';
import Preloader from "./components/common/Preloader/Preloader";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import TableContainer from './components/Table/TableContainer.jsx';
import UserContainer from "./components/Users/User.container";
import { initializeApp } from "./redux/appReducer";
import TodosContainer from "./components/Todos/TodosContainer";


const App = (props) => {

  useEffect(() => {
    props.initializeApp()
  });

  if (!props.initialised) {
    return <Preloader />
  }
  return (
    <BrowserRouter>
      <div className='container'>
        <div className='app-wrapper'>
          <HeaderContainer />
          <NavbarContainer />
          <div className='app-wrapper-content'>
            <Switch>
              <Route path='/profile/:userId?'>
                <ProfileContainer />
              </Route>
              <Route path='/dialogs' exact>
                <DialogsContainer />
              </Route>
              <Route path='/login' exact>
                <Login />
              </Route>
              <Route path='/users' exact>
                <UserContainer />
              </Route>
              <Route path='/todos' exact>
                <TodosContainer />
              </Route>
              <Route path='/table' exact>
                <TableContainer />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
};

const mapStateToProps = (state) => ({
  initialised: state.app.initialised
});

export default compose(withRouter, connect(mapStateToProps, { initializeApp }))(App);



