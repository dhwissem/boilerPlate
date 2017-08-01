import { connect } from 'react-redux';
import { updateTab } from '../../redux/actions';

import Viewport from './Viewport';

const mapStateToProps = (state) => ({
  tabValue: state.tabs.activeTab,
  rentals: state.rentals,
  users: state.users
});

const mapDispatchToProps = (dispatch) => ({
  updateTab: (tab) => {
    dispatch(updateTab(tab))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Viewport);
