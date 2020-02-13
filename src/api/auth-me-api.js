import * as axios from "axios";



const instanseAuthApi = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
          "API-KEY": "2eb255d6-bb3d-4e5a-acde-7714d2c2effe"
     }
});



export const authMeApi = {
     authMe() {
          return instanseAuthApi.get(`auth/me/`)
               .then(response => {
                    return response.data
               })
     },
     login(email, password, rememberMe = false) {
          return instanseAuthApi.post(`auth/login`, {
               email,
               password,
               rememberMe
          })
     },
     logout() {
          return instanseAuthApi.delete(`auth/login`);
     }
}