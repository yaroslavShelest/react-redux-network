import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import Shop from './Shop';
import Preloader from '../common/Preloader/Preloader';




class ShopContainer extends React.Component  {
     componentDidMount() {
          // this.props.getNewsThunk(this.props.currentPage, this.props.pageSize)
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
    
});


export default compose(
     connect(mapStateToProps,{
         
     }),
     )(ShopContainer)

     