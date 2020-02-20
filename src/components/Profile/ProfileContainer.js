import React from "react";
import { compose } from 'redux';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';


import Profile from './Profile';
import { profileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator, savePhotoThunk } from "../../redux/reducers/profile/profile-reducer";
import Preloader from "../common/Preloader/Preloader";
import { withAuthRedirect } from '../../hoc/withAuthRedirect';

class ProfileContainer extends React.Component  {
  
     refreshProfile() {
       let userId = this.props.match.params.userId;
     
       if (!userId) {
          userId = this.props.authorizedUserId;
       }
       this.props.profileThunk(userId);
       this.props.statusThunk(userId)
     }
   
     componentDidMount() {
   
       this.refreshProfile();
     }
     componentDidUpdate(prevProps, prevState) {
       if (this.props.match.params.userId != prevProps.match.params.userId ) {
           this.refreshProfile();
       }
     }
     render(){ 
       return (
            <div>
          {this.props.isLoading ? <Preloader /> :   <Profile           
               profile={this.props.profile} 
               updateStatus={this.props.updateStatus}
               status={this.props.status}
               isOwner={!this.props.match.params.userId}
               savePhoto={this.props.savePhoto}
              //   saveProfile={this.props.saveProfileThunk}
                 /> }
      </div>
         )
     }
       
   }
   

let mapStateToProps = (state) => ({
     isLoading: state.profileReducer.isLoading,
     profile: state.profileReducer.profile,
     status: state.profileReducer.status,
     authorizedUserId: state.authReducer.userId,
     isAuth: state.authReducer.isAuth
})




export  default compose(
     connect(mapStateToProps,{
          profileThunk:profileThunkCreator,
          statusThunk:getStatusThunkCreator,
          updateStatus:updateStatusThunkCreator,
          savePhoto:savePhotoThunk
     }),
     withRouter,
     withAuthRedirect 
     )(ProfileContainer)

