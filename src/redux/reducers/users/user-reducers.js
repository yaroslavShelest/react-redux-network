import { usersApi } from "../../../api/users-api";

const FOLLOW = "users/FOLLOW";
const UNFOLLOW = 'users/UNFOLLOW';
const SET_USERS = 'users/SET_USERS';
const TOGGLE_IS_LOADING = "TOGGLE_IS_LOADING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_COUNT_USERS = "SET_TOTAL_COUNT_USERS";
const CHANGE_PORTION_NUMBER = "eeCHANGE_PORTION_NUMBER";


const initialState = {
     users: [],
     isLoading: true,
     pageSize: 9,
     totalUserCount: 0,
     currentPage: 1,
     portionNumber: 1,
     isFollowingInProgress: []
};

const usersReducer = (state = initialState, action) => {
     switch (action.type) {
          case FOLLOW:
               return {
                    ...state,
                    users: state.users.map((user) => {
                         if (user.id === action.userId) {
                              return {
                                   ...user,
                                   followed: true
                              }
                         }
                         return user;
                    })
               }
          case UNFOLLOW:
               return {
                    ...state,
                    users: state.users.map((user) => {
                         if (user.id === action.userId) {
                              return {
                                   ...user,
                                   followed: false
                              }
                         }
                         return user;
                    })
               }
          case SET_USERS:
               return {
                    ...state,
                    users: action.users
               }
          case SET_CURRENT_PAGE:
               return {
                    ...state,
                    currentPage: action.currentPage
               }
          case SET_TOTAL_COUNT_USERS:
               return {
                    ...state,
                    totalUserCount: action.totalUsers
               }
          case CHANGE_PORTION_NUMBER:
               return {
                    ...state,
                    portionNumber: action.portion
               }
          case TOGGLE_IS_LOADING:
               return {
                    ...state,
                    isLoading: action.isLoading
               }
          case TOGGLE_IS_FOLLOWING_PROGRESS:
               return {
                    ...state,
                    isFollowingInProgress: action.isFollowing ? [...state.isFollowingInProgress, action.userID] : [state.isFollowingInProgress.filter(id => id !== action.userID)]
               }
          default:
               return state;                                            }
     };



export const actionsFollow = (userId) => {
     return {
          type: FOLLOW,
          userId: userId
     }
};

export const actionsUnFollow = (userId) => {
     return {
          type: UNFOLLOW,
          userId: userId
     }
};

export const actionsSetUsers = (users) => {
     return {
          type: SET_USERS,
          users

     }
};

export const actionsSetCurrentPage = (currentPage) => {
     return {
          type: SET_CURRENT_PAGE,
          currentPage
     }
};

export const actionsSetTotalUsersCounts = (totalUsers) => {
     return {
          type: SET_TOTAL_COUNT_USERS,
          totalUsers
     }
};

export const actionsToggleIsLoading = (isLoading) => {
     return {
          type: TOGGLE_IS_LOADING,
          isLoading
     }
};

export const actionsPortion = (portion) => {
     return {
          type: CHANGE_PORTION_NUMBER,
          portion
     }
};

export const actionsToggleFollowingProgress = (isFollowing, userID) => {
     return {
          type: TOGGLE_IS_FOLLOWING_PROGRESS,
          isFollowing,
          userID
     }
};


export const getUsersThunk = (currentPage, pageSize) => {
     return async (dispatch) => {
          dispatch(actionsToggleIsLoading(true))
          let data = await usersApi.getUsers(currentPage, pageSize)
          dispatch(actionsSetUsers(data.items))
          dispatch(actionsSetTotalUsersCounts(data.totalCount))
          dispatch(actionsSetCurrentPage(currentPage))
          dispatch(actionsToggleIsLoading(false))
     }
};

const followUnfollowFlow = async (dispatch, userId, apiMethod, action) => {
     dispatch(actionsToggleFollowingProgress(true, userId))
     let response = await apiMethod(userId);

     if (response.data.resultCode == 0) {
          dispatch(action(userId));
     }
     dispatch(actionsToggleFollowingProgress(false, userId))
};

export const followThunk = (userId) => {
     return async (dispatch) => {
          followUnfollowFlow(dispatch, userId, usersApi.userFollow.bind(usersApi), actionsFollow);
     }
};

export const unFollowThunk = (userId) => {
     return async (dispatch) => {
          followUnfollowFlow(dispatch, userId, usersApi.userUnfollow.bind(usersApi), actionsUnFollow);
     }
};

export default usersReducer;