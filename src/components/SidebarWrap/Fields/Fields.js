import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';

import './Fields.less';


class Fields extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'Regular',
    };
  }

  handleChange(value) {
    this.props.onUpdate(this.refs.child.parentNode.clientWidth);
    this.setState({
      value: value,
    });
  }

  render() {
    return (
      <div className="fields" ref="child">
        <h4>You can change the width of the sidebar from this component</h4>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <Tab label="Regular" value="Regular">
            <p className="regular-text">This is the regular width of the Sidebar</p>
          </Tab>
          <Tab label="Large" value="Large">
            <p className="large-text">This is the Large width of the Sidebar</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}

Fields.propTypes = {
  onUpdate: PropTypes.func
};

export default Fields;
