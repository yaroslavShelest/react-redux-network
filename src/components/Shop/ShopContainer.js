import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';
import orderBy from 'lodash/orderBy';

import Shop from './Shop';
import Preloader from '../common/Preloader/Preloader';
import { getBooksThunk, actionsSetFilter, actionsSetSearchQuery } from '../../redux/reducers/shop/shop-reducer';

const sortBy = (books, filterBy) => {
     switch (filterBy) {
          case 'price_high':
               return orderBy(books, 'price', 'desc');
          case 'price_low':
               return orderBy(books, 'price', 'asc');
          case 'author':
               return orderBy(books, 'author', 'asc');
          case 'popular':
               return orderBy(books, 'rating', 'desc');
          default:
               return books;
     }
     };

     const filterBooks = (books, searchQuery) =>
          books.filter(
               o =>
               o.title.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
               o.author.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
          );

     const searchBooks = (books, filterBy, searchQuery) => {
          return sortBy(filterBooks(books, searchQuery), filterBy);
     };

class ShopContainer extends React.Component {
     
     componentDidMount() {
          this.props.getBooksThunk()
          };
     render() {
          return ( 
          <div>
               <div className="d10"><h1>Магазин</h1></div>
               {this.props.isLoading ? <Preloader /> :  <Shop  
               {...this.props}/> }
         
         </div>
         )
      }
}

const mapStateToProps = (state) => ({
     isLoading:state.shopReducer.isLoading,
     books:state.shopReducer.items && searchBooks(state.shopReducer.items, state.shopReducer.filterBy, state.shopReducer.searchQuery),
     filterBy:state.shopReducer.filterBy,
     searchQuery:state.shopReducer.searchQuery
});


export default compose(
     connect(mapStateToProps,{
          getBooksThunk,
          setFilter:actionsSetFilter,
          setSearchQuery:actionsSetSearchQuery
     }),
     )(ShopContainer)

     