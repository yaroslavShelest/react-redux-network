import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Shop from './Shop';
import Preloader from '../common/Preloader/Preloader';
import { getBooksThunk } from '../../redux/reducers/shop/shop-reducer';




class ShopContainer extends React.Component  {
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
     books:state.shopReducer.items
});



export default compose(
     connect(mapStateToProps,{
          getBooksThunk
     }),
     )(ShopContainer)

     