import React from 'react';
import {connect} from 'react-redux';
import {Field , reduxForm} from "redux-form";
import { Redirect } from 'react-router-dom';

import { Input } from '../common/FormControl/FormsControls';
import { required } from '../../helpers/validators';

import './Login.scss';
import { loginThunkCreator } from '../../redux/reducers/auth/auth-reducer';


const Login = ({loginThunk ,  isAuth}) => {
     const onSubmitForMe = (formData) => {
        loginThunk(formData.email, formData.password , formData.rememberMe );
        console.log(formData)
     }
     if (isAuth) {
         return <Redirect to={"/profile"}/>
     }
     
     return (
      <LoginReduxForm  onSubmit={onSubmitForMe}  />
      
    
      )
  }

  const LoginForm = ({handleSubmit , error , captchaUrl }) => {
    return (
      <form   onSubmit={handleSubmit} className="ui-form">
      <h3>Войти в приложение</h3>
       <div class="form-row">
        {/* <input type="text" id="email" placeholder='Логин..' required  /> */}
        <Field      name={'email'} 
                    placeholder={"Логин.."} 
                    validate={[required]} 
                    component={Input} />
      </div>
      <div className="form-row">
        {/* <input type="password" placeholder='Пароль..' required autocomplete="off"/> */}
        <Field      name={'password'} 
                    placeholder={"Пароль.."} 
                    type={"password"}
                    validate={[required]} 
                    component={Input} />
                    
      </div>
      <div className='d-flex justify-content: space-between'> <Field type={"checkbox"} 
                    name={'rememberMe'} 
                    component={Input}/>Запомнить  </div>
      {error && <div className = {"formSummaryError"}>{error}</div>}
      <p><button className='form_button' >Войти</button> </p>
 </form>
    )
}

  const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

  const mapStateToProps = (state) => ({
     isAuth: state.authReducer.isAuth,
     captchaUrl: state.authReducer.captchaUrl
 })  

export default connect(mapStateToProps,  {loginThunk:loginThunkCreator})(Login);