import  axios from "axios";

const instanseUsersApi = axios.create(
     {
          withCredentials: true,
          baseURL: 'https://social-network.samuraijs.com/api/1.0/',
          headers: {
              "API-KEY": "2eb255d6-bb3d-4e5a-acde-7714d2c2effe"
          }
     }
);


export const usersApi = {
     getUsers(currentPage , pageSize) {
          return instanseUsersApi.get(`users?page=${currentPage}&count=${pageSize}`)
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
}