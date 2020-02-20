import { profileApi } from "../../../api/profile-api";


const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_USER_PROFILE_HEADER = 'SET_USER_PROFILE_HEADER';


const initialState = {
    isLoading: false,
    profile: null,
    profileHeader:null,
    status: ""

};
 
const profileReducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_USER_PROFILE:
             return {
                 ...state,
                 profile: action.profile
             };
         case SET_USER_PROFILE_HEADER:
             return {
                 ...state,
                 profileHeader: action.profile
             };

         case SET_STATUS:
             return {
                 ...state,
                 status: action.status
             };

         case SAVE_PHOTO_SUCCESS:
             return {
                 ...state,
                 profile: {
                     ...state.profile,
                     photos: action.photos
                 }
             }

        default:
            return state;
     }
 }

export const actionsSetUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const actionsSetUserProfileHeader = (profile) => ({type: SET_USER_PROFILE_HEADER, profile});
export const actionsSetStatus = (status) => ({type: SET_STATUS, status});
export const actionsCreaterSavePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export const profileThunkCreator = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getProfile(userId)
        dispatch(actionsSetUserProfile(data))
     }
 }

 export const profileHeaderThunk = (userId) => {
    return async (dispatch) => {
        let data = await profileApi.getProfile(userId)
        dispatch(actionsSetUserProfileHeader(data))
     }
 } 


 export const getStatusThunkCreator = (userId) => {
    return async (dispatch) => {
        let response = await profileApi.getStatus(userId)
        dispatch(actionsSetStatus(response.data))
     }
 }


 export const updateStatusThunkCreator = (status) => {
    return async (dispatch) => {
        let response = await profileApi.updateStatus(status)
          if(response.data.resultCode === 0){
            dispatch(actionsSetStatus(status))
          }
     }
 }

 export const savePhotoThunk = (file) => async (dispatch) => {
    let response = await profileApi.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(actionsCreaterSavePhotoSuccess(response.data.data.photos));
    }
} 

export default profileReducer;