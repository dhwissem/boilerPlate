import React, { Component } from 'react';
import SidebarWrap from './SidebarWrap';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './muiTheme';

import Viewport from './Viewport/ViewportContainer';

import '../styles/example.less';
import './Dashboard.less';

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
              <h1 style={{paddingBottom: 45}}><span>Disponio</span></h1>
              <div className="view-port">
                <Viewport />
              </div>

            </main>
          </div>

        </MuiThemeProvider>
    );
  }
}



