import React from 'react';
import {Route , Switch , Redirect , withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import { compose } from 'redux';
import "bootstrap/dist/css/bootstrap.css"

import Header from './components/Header/Header';
import Footer from './components/Foother/Foother';
import ProfileContainer from './components/Profile/ProfileContainer';
import NewsContainer from './components/News/NewsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ShopContainer from './components/Shop/ShopContainer';
import Login from './components/Login/Login';
import NewsAll from './components/News/NewsAll';
// const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'));
import Preloader from './components/common/Preloader/Preloader';


import './App.scss';
import { initializeAppThunkCreater } from './redux/reducers/app/app-reducer';
import PageNotFound from './components/404page/404page';



class App extends React.Component {
  componentDidMount() {
    this.props.initalizeApp()
}

  render() {
    if (!this.props.initialized) {
      return <Preloader />
  }
  
   
return (
  <>
  <main className="content">
    <Header />
    <div className ='container'>
    <Switch>
    <Route exact path='/' render={() => <Redirect to={"/profile"}/>}/>
    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
    <Route path='/news' render={() => <NewsContainer />  }/>
    <Route path='/newsall' render={() => <NewsAll />  }/>
    <Route path='/users' render={() => <UsersContainer /> }/>
    <Route path='/shop' render={() => <ShopContainer /> }/>
    <Route path='/login'  render={() => <Login />} />
    <Route path='*'  render={() =>  <PageNotFound/>} />
    {/* <Route path='/weather'  render={() =>  <PageNotFound/>} /> */}
    {/* <Route path='/settings'  render={() =>  <PageNotFound/>} /> */}
    {/* <Route path='/todo'  render={() => <ToDo />} /> */}
    {/* <Route path='/dialogs'
                               render={withSuspense(DialogsContainer)}/> */}
    </Switch>
    </div>
  </main>
 
  <Footer />

  </>
  );}
}



const mapStateToProps = (state) => ({
  initialized: state.appReducer.initialized
})
export default  compose(  withRouter,
                        connect(mapStateToProps, {
                          initalizeApp:initializeAppThunkCreater,
                        }),
                                  )(App) 