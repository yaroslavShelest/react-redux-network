import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { getNewsThunk, actionsPortionNews, actionsOpenNewsInNewTab } from '../../redux/reducers/news/news-reducer';
import News from './News';
import Preloader from '../common/Preloader/Preloader';
import Paginator from '../common/Paginators/Paginators';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class NewsContainer extends React.Component  {
     componentDidMount() {
          this.props.getNewsThunk(this.props.currentPage, this.props.pageSize)
     };
     
     onPageCanged = (page) => {
          this.props.getNewsThunk(page, this.props.pageSize)
     };
      
     render() {
          return ( 
          <div>
               <div className="d10"><h1>Новости</h1></div>
         <Paginator 
                    totalPageCount={this.props.totalNewsCount}
                    pageSize={this.props.pageSize} 
                    currentPage = {this.props.currentPage}
                    onPageCanged = {this.onPageCanged}
                    portion = {this.props.portion}
                    onPortionCanged = {this.props.portionNews}/>
          {this.props.isLoading ? <Preloader /> :  <News  
            {...this.props}/> }
         
         </div>
         )
      }

}

const mapStateToProps = (state) => ({
     isLoading:state.newsReducer.isLoading,
     news:state.newsReducer.news,
     pageSize: state.newsReducer.pageSize,
     currentPage: state.newsReducer.currentPage,
     totalNewsCount:state.newsReducer.totalNewsCount,
     portion:state.newsReducer.portionNumber
});


export default compose(
     connect(mapStateToProps,{
          getNewsThunk,
          portionNews:actionsPortionNews,
          openNewsInNewTab:actionsOpenNewsInNewTab
     }),
     withAuthRedirect
     )(NewsContainer)

     

