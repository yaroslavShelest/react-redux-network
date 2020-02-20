import { compose } from 'redux';
import { connect } from 'react-redux';
import Navigation from './Navigation';
import { logOutThunkCreator } from '../../../redux/reducers/auth/auth-reducer';






const mapStateToProps = (state) => ({
    login:state.authReducer.login,
    profile:state.profileReducer.profile
});


export default compose(
     connect(mapStateToProps,{
        logOut:logOutThunkCreator
     }),
     )(Navigation)
