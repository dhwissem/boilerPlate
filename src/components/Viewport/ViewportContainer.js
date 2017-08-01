import { connect } from 'react-redux';
import { updateTab, fetchTabs } from '../../redux/actions';

import Viewport from './Viewport';

const mapStateToProps = (state) => ({
  tabValue: state.tabs.activeTab,
  rentals: state.rentals,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  updateTab: (tab) => {
    dispatch(updateTab(tab))
  },
  postTab: (data) => {
    fetchTabs(data)
  }

});

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
