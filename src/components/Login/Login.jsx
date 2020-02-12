import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom';


import './Login.scss';


const Login = ({loginThunk ,  isAuth}) => {
     // const onSubmitForMe = (formData) => {
     //    loginThunk(formData.email, formData.password , formData.rememberMe );
     // }
     // if (isAuth) {
     //     return <Redirect to={"/profile"}/>
     // }
     
     return (
     <form  className="ui-form">
          <h3>Войти в приложение</h3>
           <div class="form-row">
            <input type="text" id="email" placeholder='Логин..' required autocomplete="off" />
          </div>
          <div className="form-row">
            <input type="password" placeholder='Пароль..' required autocomplete="off"/>
          </div>
          <p><button className='form_button' >Войти</button> </p>
     </form>
      )
  }

  const mapStateToProps = (state) => ({
     // isAuth: state.auth.isAuth
 })  

export default connect(mapStateToProps, {})(Login);