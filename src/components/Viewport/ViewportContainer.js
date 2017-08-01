import { connect } from 'react-redux';
import { updateTab, fetchTabs } from '../../redux/actions';

import Viewport from './Viewport';

const mapStateToProps = (state) => ({
  tabValue: state.tabs.activeTab,
  rentals: state.rentals,
  rentalFilter: state.tabs.rentalFilter,
  users: state.users,
  userFilter: state.tabs.userFilter
});

const mapDispatchToProps = (dispatch) => ({
  updateTab: (tab) => {
    dispatch(updateTab(tab));
  },
  postTab: (data) => {
    fetchTabs(data);
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
