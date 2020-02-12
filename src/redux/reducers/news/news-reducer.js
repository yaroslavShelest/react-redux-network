import { newsApi } from "../../../api/news-api"

const SET_NEWS = 'news/SET_NEWS';
const TOGGLE_IS_LOADING = "news/TOGGLE_IS_LOADING";
const SET_NEWS_CURRENT_PAGE = "news/SET_NEWS_CURRENT_PAGE";
const SET_TOTAL_COUNT_NEWS = "news/SET_TOTAL_COUNT_NEWS";
const CHANGE_PORTION_NUMBER = "news/CHANGE_PORTION_NUMBER";
const OPEN_NEW = "news/OPEN_NEW";


const initialState = {
     news:[],
     isLoading: true,
     pageSize: 3,
     currentPage: 1,
     totalNewsCount: 0,
     portionNumber:1,
     moreNewsContent: 'null',
};

const newsReducer = (state = initialState, action) => {
     switch (action.type) {
         case SET_NEWS:
             return {
               ...state,
               news: action.news
          };
          
         case TOGGLE_IS_LOADING:
               return {
               ...state,
               isLoading: action.isLoading
          };

         case SET_NEWS_CURRENT_PAGE:
             return {
               ...state,
               currentPage: action.currentPage
          };

          case SET_TOTAL_COUNT_NEWS:
            return {
                 ...state,
                totalNewsCount: action.totalNews
          };

          case CHANGE_PORTION_NUMBER:
            return {
                ...state,
                portionNumber: action.portion
          }; 
          case OPEN_NEW:
            return {
                ...state,
                moreNewsContent: action.tittle
          }; 
        
         default:
             return state;
     }
 };


export const actionSetNews = (news) => {
     return {
         type: SET_NEWS,
         news
     }
}; 

export const actionsToggleIsLoading = (isLoading) => {
     return {
         type: TOGGLE_IS_LOADING, 
         isLoading 
     }
};

export const actionsSetNewsCurrentPage = (currentPage) => {
     return {
         type: SET_NEWS_CURRENT_PAGE, 
         currentPage 
     }
 };

export const actionsSetTotalNewsCounts = (totalNews) => {
     return {
         type: SET_TOTAL_COUNT_NEWS, 
         totalNews 
     }
 };

export const actionsPortionNews = (portion) => {
     return {
         type: CHANGE_PORTION_NUMBER, 
         portion 
     }
 };

 export const actionsOpenNewsInNewTab = (tittle) => {
    return {
        type: OPEN_NEW, 
        tittle 
    }
};

 

export const getNewsThunk = (currentPage, pageSize) => {
     return async (dispatch) => {
         dispatch(actionsToggleIsLoading(true)) 
         let data = await newsApi.getNews(currentPage , pageSize)
             dispatch(actionSetNews(data.articles))
             dispatch(actionsSetTotalNewsCounts(data.totalResults))
             dispatch(actionsSetNewsCurrentPage(currentPage)) 
             dispatch(actionsToggleIsLoading(false))  
      }
};


export default newsReducer;


