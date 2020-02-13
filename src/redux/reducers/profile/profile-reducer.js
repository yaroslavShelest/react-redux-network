import { profileApi } from "../../../api/profile-api";


const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';


const initialState = {
    isLoading: false,
    profile: null,
    status: ""

};
 
const profileReducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_USER_PROFILE:
             return {
                 ...state,
                 profile: action.profile
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
export const actionsSetStatus = (status) => ({type: SET_STATUS, status});
export const actionsCreaterSavePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});

export default profileReducer;