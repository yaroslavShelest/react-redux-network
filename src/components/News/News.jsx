import React , {useState} from "react";

import { NavLink } from 'react-router-dom';

import './News.scss';


const News = ({news, openNewsInNewTab}) => {
     return (
       <>
         <div  class="post-wrap">
           
           {news.map(oneNews => (
           <div key={oneNews.id} class="post-item">
               <div class="post-item-wrap">
                
                   <img
                     width="100%"
                     height="150px"
                     src={
                       oneNews.urlToImage != null
                         ? oneNews.urlToImage
                         : "https://media4.s-nbcnews.com/i/newscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png"
                     }
                     alt="blog"
                   />
                   <br />
                   <i>Data :</i>
                   <b>
                     {oneNews.publishedAt != null
                       ? oneNews.publishedAt
                       : "----"}
                   </b>
                   <h6  >{oneNews.description}</h6>
                   <p   className="post-content">{oneNews.description}</p>
                   
                   <i onClick={() => {
                      openNewsInNewTab(oneNews.content)
                   }} className='post_more'><NavLink to='/newsall'>Жми чтобы читать...</NavLink> 
                 
                 </i>
               </div> 
             
             </div>
           ))
           }
          
         </div>
       </>
     );
};


{/* <Modal
size="-sm"
show={smShow}
onHide={() => setSmShow(false)}
aria-labelledby="example-modal-sizes-title--sm"
>
<Modal.Header closeButton>
  <Modal.Title id="example-modal-sizes-title--sm">
    <b>{oneNews.title}</b>
  </Modal.Title>
</Modal.Header>
<Modal.Body>
  <div>
    <img
      width="100%"
      src={oneNews.urlToImage}
      alt="News Info"
    />
  </div>
  {oneNews.content} 
  <b>Заходи и читай</b> :
  <a href={oneNews.url}>ЗДЕСЬ</a>
</Modal.Body>
</Modal> */}
export default News;