import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';


import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginators/Paginators';
import { followThunk, unFollowThunk, getUsersThunk, actionsPortion } from '../../redux/reducers/users/user-reducers';

class UsersContainer extends React.Component  {
     componentDidMount() {
          this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
     };
     
     onPageCanged = (page) => {
          this.props.getUsersThunk(page, this.props.pageSize)
     };
      
     render() {
          return ( 
          <div>
              <div className="d10"><h1 className='d10'>Список всех пользователей</h1></div> 
         <Paginator 
                    totalPageCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize} 
                    currentPage = {this.props.currentPage}
                    onPageCanged = {this.onPageCanged}
                    portion = {this.props.portion}
                    onPortionCanged = {this.props.portionUser}/>
          {this.props.isLoading ? <Preloader /> :  <Users  
            {...this.props}/> }
         
         </div>
         )
      }

}

let mapStateToProps = (state) => {
     return {
          users: state.usersReducer.users,
          pageSize: state.usersReducer.pageSize,
          totalUserCount: state.usersReducer.totalUserCount,
          currentPage: state.usersReducer.currentPage,
          isLoading: state.usersReducer.isLoading,
          isFollowingInProgress: state.usersReducer.isFollowingInProgress,
          portion: state.usersReducer.portionNumber
     }
};


export default compose(
     connect(mapStateToProps,{
          getUsersThunk,
          followThunk,
          unFollowThunk,
          portionUser:actionsPortion
      }),
     )(UsersContainer)
