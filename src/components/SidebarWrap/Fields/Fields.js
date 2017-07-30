import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import './Fields.less';


export default class Fields extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange(value) {
    this.props.onUpdate(this.refs.child.parentNode.clientWidth);
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      <div className="fields" ref="child" >
        <h4>You can change the width of the sidebar from this component</h4>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange.bind(this)}
        >
          <Tab label="Regular" value="a">
            <p className="regular-text">This is the regular width of the Sidebar</p>
          </Tab>
          <Tab label="Large" value="b">
            <p className="large-text">This is the Large width of the Sidebar</p>
          </Tab>
        </Tabs>
      </div>
    );
  }
}
