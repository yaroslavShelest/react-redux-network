import  axios from "axios";

const instanseUsersApi = axios.create(
     {
          withCredentials: true,
          baseURL: 'https://social-network.samuraijs.com/api/1.0/',
          headers: {
              "API-KEY": "80eaf0cc-65a7-4a96-8fd0-95355af8e7d0"
          }
     }
);


export const usersApi = {
     getUsers(pageNumber, pageSize) {
          return instanseUsersApi.get(`users?page=${pageNumber}&count=${pageSize}`)
               .then(response => {
                    return response.data
               })
     },
     getUsersTerm(pageSize,pageNumber, text) {
          return instanseUsersApi.get(`users?count=${pageSize}&page=${pageNumber}&term=${text}`)
               .then(response => {
                    return response.data
               })
     },
     userFollow(userId) {
          return instanseUsersApi.post(`follow/${userId}`)
     },
     userUnfollow(userId) {
          return instanseUsersApi.delete(`follow/${userId}`)
     }
};

