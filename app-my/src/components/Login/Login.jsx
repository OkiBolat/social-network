import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, required } from '../../helpers/validators/validators';
import {authLogin} from '../../redux/authReducer'
import { Input } from '../common/FormsControls/FormsControls';

const maxLength10 =  maxLengthCreator(50)


const LoginForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field validate={[maxLength10, required]} component={Input} name={'email'} placeholder={'login'} />
      </div>
      <div>
        <Field validate={[maxLength10, required]} component={Input} name={'password'} placeholder={'password'} />
      </div>
      <div>
        <Field component={Input} name={'rememberMe'} type={'checkbox'} />Remember me
      </div>
      {props.error && <div>{props.error}</div> }
      <div>
        <button>Submit</button>
      </div>
    </form>

  )
}

const LoginReduxForm =  reduxForm({
  form: 'login'
})(LoginForm)



const Login = (props) => {
  const onSubmit = (formData) => {
    props.authLogin(formData)
  }
  if(props.isAuth) {
    return <Redirect to='/profile'/>
  }
  return (
    <div >
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit}/>
    </div>
  )
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {authLogin})(Login)