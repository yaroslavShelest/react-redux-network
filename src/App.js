import React from 'react';
import {Route , Switch , Redirect} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css"

import Header from './components/Header/Header';
import Footer from './components/Foother/Foother';
import ProfileContainer from './components/Profile/ProfileContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import Login from './components/Login/Login';


import './App.scss';




function App() {
  return (
  <>
  <main className="content">
    <Header />
    <div className ='container'>
    <Switch>
    <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
    <Route path='/profile' render={() => <ProfileContainer />}/>
    <Route path='/news' render={() => <NewsContainer />  }/>
    <Route path='/users' render={() => <UsersContainer /> }/>
    <Route path='/login'  render={() => <Login />} />
    </Switch>
    </div>
  </main>
  <Footer />
  </>
  );
}

export default App;
 