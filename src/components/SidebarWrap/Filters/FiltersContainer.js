import { connect } from 'react-redux';
import { fetchRentals } from '../../../redux/actions';

import Filters from './Filters';

const mapStateToProps = (state) => ({
  rentals: state.rentals
});

const mapDispatchToProps = (dispatch) => ({
  // initialise: () => {
  //   dispatch(infoCardActions.initialiseApplication());
  // }
  getRentals: () => {
    dispatch(fetchRentals())
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
