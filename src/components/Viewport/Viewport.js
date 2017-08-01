import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import ActionHome from 'material-ui/svg-icons/action/home';

import './Viewport.less';


const Viewport = (props) => (
  <Tabs value={props.tabValue}>
    <Tab icon={<ActionHome />} label="Rentals" value='a' onClick={() => props.updateTab('a')}>
        <div className="tab-content">
          <p>Some text in rentals..</p>
        </div>
    </Tab>

    <Tab icon={<MapsPersonPin />} label="Users" value='b' onClick={() => props.updateTab('b')}>
       <div className="tab-content">
         <p>Some text in users..</p>
       </div>
    </Tab>

  </Tabs>

);

export default Viewport;
