import  axios from "axios";



export const shopApi = {
     getBooks() {
          return axios.get('/items.json')
               .then(response => {
                    return response.data
          })
     }
};