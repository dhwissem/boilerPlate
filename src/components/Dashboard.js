import React, { Component } from 'react';
import SidebarWrap from './SidebarWrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import theme from './muiTheme';

import '../styles/example.less';

export default class Dashboard extends Component {

  constructor (props) {
    super(props);
  }

  render() {

    return (
        <MuiThemeProvider muiTheme={theme}>

          <div id="outer-container" style={{height: '100%'}}>

            <SidebarWrap />
            <main id="viewport">
              <h1><a href="">Contents Goes Here..</a></h1>
            </main>
          </div>

        </MuiThemeProvider>
    );
  }
}



