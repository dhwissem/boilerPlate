import { connect } from 'react-redux';
import { fetchRentals, fetchUsers, setRentalFilter, setUserFilter } from '../../../redux/actions';

import Filters from './Filters';

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
  getRentals: () => {
    dispatch(fetchRentals());
  },

  getUsers: () => {
    dispatch(fetchUsers());
  },

  updateRentalFilter: (data) => {
    dispatch(setRentalFilter(data));
  },

  updateUserFilter: (data) => {
    dispatch(setUserFilter(data));
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
