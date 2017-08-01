import { connect } from 'react-redux';
import { fetchRentals, fetchUsers } from '../../../redux/actions';

import Filters from './Filters';

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({
  getRentals: () => {
    dispatch(fetchRentals())
  },

  getUsers: () => {
    dispatch(fetchUsers())
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
