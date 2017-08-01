import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Filters from './Filters/FiltersContainer';
import Fields from './Fields';

import './SidebarWrap.less';

class SidebarWrap extends Component {
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
    });
  }

  render() {
    const { id } = this.props;
    return (
      <div className="right">
        { this.state.isOpen && (<div
          className="overlay"
          onClick={() => this.toggleMenu()}
        />)}

        <div id={id} className={`menu-wrap ${this.state.isOpen}`} style={{width: this.state.width}}>

          <h2>Sidebar</h2>
          <Fields onUpdate={this.toggleWidth.bind(this)} />
          <Filters />

          <div className="close-button">
              <span className="cross">
                <span className="cross-right" />
                <span className="cross-left" />
              </span>
            <button className="close-button-inside" onClick={() => this.toggleMenu()}>Close</button>
          </div>

        </div>

        <div className="burger-button">
            <span>
              <span className="burger-bar top" />
              <span className="burger-bar middle" />
              <span className="burger-bar bottom" />
            </span>

          <button className="open-button" onClick={() => this.toggleMenu()}> Open</button>
        </div>
      </div>
    );
  }
}

SidebarWrap.propTypes = {
  id: PropTypes.number
};

export default SidebarWrap;
