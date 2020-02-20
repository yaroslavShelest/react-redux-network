import * as axios from "axios";

const instanseProfileApi = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
     headers: {
          "API-KEY": "80eaf0cc-65a7-4a96-8fd0-95355af8e7d0"
     }
});



export const profileApi = {
     getProfile(userID) {
          return instanseProfileApi.get(`${userID}`)
               .then(response => {
                    return response.data
               })
     },
     getStatus(userID) {
          return instanseProfileApi.get(`status/${userID}`)
     },
     updateStatus(userStatus) {
          return instanseProfileApi.put(`status`, {
               status: userStatus
          })
     },
     savePhoto(photoFile) {
          const formData = new FormData();
          formData.append("image", photoFile);

          return instanseProfileApi.put(`photo`, formData, {
               headers: {
                    'Content-Type': 'multipart/form-data'
               }
          })
     }
};