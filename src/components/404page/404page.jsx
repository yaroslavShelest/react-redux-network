import React from "react";

import './404page.scss';

const PageNotFound = () => {
     return (
       <div className='notfound'>
         <div className="notfound-404">
           <h1>
             4<span></span>4
           </h1>
         </div>

         <h2>Ооой! Страница не найдена</h2>
         <p>
          Извините,но такой страницы не существует. Попробуйте поискать не так!!!
         </p>
         <a href="#">Вернуться к главной странице</a>
       </div>
     );
};


export default PageNotFound;