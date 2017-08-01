import React, { Component } from 'react';
import Filters from './Filters/FiltersContainer';
import Fields from './Fields';

import './SidebarWrap.less';

export default class SidebarWrap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      width: '300px'
    };
  }

  toggleMenu() {
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleWidth(data) {
    this.setState({
      width: data === 300 ? '400px' : '300px'
    })
  }

  render() {
    return (
      <div className="right">
        { this.state.isOpen && (<div
          className='overlay'
          onClick={() => this.toggleMenu()}
        />)}

        <div id={this.props.id} className={`menu-wrap ${this.state.isOpen}`} style={{ width: this.state.width }}>

          <h2>Sidebar</h2>
          <Fields onUpdate={this.toggleWidth.bind(this)} />
          <Filters />

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

        <div className='burger-button'>
            <span>
              <span className='burger-bar top'>
              </span>
              <span className='burger-bar middle'>
              </span>
              <span className='burger-bar bottom'>
              </span>
            </span>

          <button className='open-button' onClick={() => this.toggleMenu()}> Open</button>
        </div>
      </div>
    );
  }
}

