import * as axios from "axios";

const instanseProfileApi = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/profile/',
     headers: {
          "API-KEY": "2eb255d6-bb3d-4e5a-acde-7714d2c2effe"
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