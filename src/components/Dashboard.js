import React, { Component } from 'react';
import SidebarWrap from './SidebarWrap';
import '../styles/example.less';

export default class Dashboard extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (
      <div id="outer-container" style={{height: '100%'}}>

        <SidebarWrap />
        <main id="viewport">
          <h1><a href="">Contents Goes Here..</a></h1>
        </main>
      </div>
    );
  }
}



