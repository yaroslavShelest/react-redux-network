import React  from "react";
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

const NewsAll = (props) =>{
  console.log(props.oneNews)
  return(
    <div>
     <NavLink to='/news'> Вернуться</NavLink>
      <h1>{props.content}</h1>
    </div>
  )
}

const mapStateToProps = (state) => ({
    content:state.newsReducer.moreNewsContent
});

export default connect(mapStateToProps, {})(NewsAll);