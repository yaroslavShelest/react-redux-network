import { compose } from 'redux';
import { connect } from 'react-redux';


import Profile from './Profile';



let mapStateToProps = (state) => ({
     
})

let mapDispatchToProops = (dispatch) => {
     return {
        
     }
 }


export default compose(
     connect(mapStateToProps,mapDispatchToProops),
     )(Profile)

