import React  from 'react';

import './Paginators.scss';


const Paginators = ({totalPageCount , pageSize  , portion , onPageCanged , currentPage , onPortionCanged , portionSize = 18}) => {
     const pagesCount = Math.ceil(totalPageCount / pageSize);
     const pages = [];
     for (let i = 1; i <= pagesCount; i++) {
         pages.push(i)
     }

     let portionCount = Math.ceil(pagesCount / portionSize); // сколько порций вышло
     let leftPortionPageNumber = (portion - 1) * portionSize + 1;// узнать число начальное слева
     let rightPortionPageNumber = portion * portionSize; // узнать число начальное справа
     
     const disbledButtonLeft = () => {
          if(portion === 1){
               return true
          } 
          return false
     };

     const disbledButtonRigth = () => {
          if(portionCount > portion){
               return false
          } 
          return true
     };

     const portionInStateMinus = () => { 
          onPortionCanged(portion - 1)
     };

     const portionInStatePlus = () => {
          onPortionCanged(portion + 1)
     };
   
     return (
       <div>
         <button
           className="button_paginators"
           disabled={disbledButtonLeft()}
           onClick={portionInStateMinus}
         >
           &#8656;
         </button>
         {pages
           .filter(
             p => p >= leftPortionPageNumber && p <= rightPortionPageNumber
           )
           .map(page => {
             return (
               <span
                 onClick={() => {
                   onPageCanged(page);
                 }}
                 className={currentPage === page && "current"}
               >
                 {page}
               </span>
             );
           })}

         <button
           className="button_paginators"
           disabled={disbledButtonRigth()}
           onClick={portionInStatePlus}
         >
           &#8658;
         </button>
       </div>
     );
}

export default Paginators;

 