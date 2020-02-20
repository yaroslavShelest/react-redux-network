import * as axios from "axios";



const instanseAuthApi = axios.create({
     withCredentials: true,
     baseURL: 'https://social-network.samuraijs.com/api/1.0/',
     headers: {
          "API-KEY": "80eaf0cc-65a7-4a96-8fd0-95355af8e7d0"
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