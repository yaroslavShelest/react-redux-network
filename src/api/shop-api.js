import  axios from "axios";



export const shopApi = {
     getNews() {
          return axios.get(`'/items.json'`)
               .then(response => {
                    return response.data
          })
     }
};