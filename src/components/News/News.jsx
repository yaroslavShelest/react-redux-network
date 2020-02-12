import React , {useState} from "react";
import { Modal } from "react-bootstrap";

import './News.scss';

const News = (props) => {
  const [smShow, setSmShow] = useState(false);
     return (
       <>
         <div  class="post-wrap">
           {props.news.map(oneNews => (
             <div key={oneNews.id} class="post-item">
               <div class="post-item-wrap">
                 <b  class="post-link">
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
                   <p  onClick={() => setSmShow(true)} class="post-content">{oneNews.description}</p>
                   <i className='post_more' onClick={() => setSmShow(true)}>Жми чтобы читать...</i>
                   <Modal
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
                       {oneNews.content} <br />
                       <b>Заходи и читай</b> :
                       <a href={oneNews.url}>{oneNews.url}</a>
                     </Modal.Body>
                   </Modal>
                 </b>
               </div>
             </div>
           ))}
         </div>
       </>
     );
};


export default News;