import React, { Component } from 'react';

import './SidebarWrap.less';

export default class SidebarWrap extends Component {
    constructor (props) {
      super(props);
      this.state = {
        isOpen: false
      };
    }

    toggleMenu() {
      this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
      return (

        <div className="right">
          { this.state.isOpen && (<div
              className='overlay'
              onClick={() => this.toggleMenu()}
          />)}

          <div id={this.props.id} className={`menu-wrap ${this.state.isOpen}`}>
            <div className='bm-menu'  >
              <div onClick={() => this.toggleMenu()} style={{ height: '50%'}} >

                <h6>components goes here..</h6>

              </div>
            </div>

            <div className='close-button'>
              <span className='cross'>
                <span className='cross-right'>
                </span>
                <span className='cross-left'>
                </span>
              </span>
              <button className='close-button-inside' onClick={() => this.toggleMenu()}>Close</button>
            </div>

          </div>

          <div className='burger-button' >
            <span>
              <span className='burger-bar top' >
              </span>
              <span className='burger-bar middle' >
              </span>
              <span className='burger-bar bottom' >
              </span>
            </span>

            <button className='open-button' onClick={() => this.toggleMenu()}> Open </button>
          </div>
        </div>
      );
    }
}

