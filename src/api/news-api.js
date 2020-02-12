import  axios from "axios";

const instanseNewsApi = axios.create(
     {
          baseURL:"https://newsapi.org/v2/",
          headers: {
               "X-Api-Key": "fd349b05a4534df0b1bec0e48f6dc432"
           }
     }
);


export const newsApi = {
     getNews(currentPage , pageSize) {
          return instanseNewsApi.get(`top-headlines?country=us&category=business&page=${currentPage}&pageSize=${pageSize}`)
               .then(response => {
                    return response.data
          })
     }
};

