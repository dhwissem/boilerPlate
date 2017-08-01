import React from 'react';
import PropTypes from 'prop-types';
import { Tabs, Tab } from 'material-ui/Tabs';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import ActionHome from 'material-ui/svg-icons/action/home';
import User from './User';
import Rental from './Rental';

import './Viewport.less';

const Viewport = (props) => (
  <Tabs value={props.tabValue}>
    <Tab icon={<ActionHome />}
         label="Rentals"
         value="Rentals Tab"
         onClick={() => {
           props.updateTab("Rentals Tab");
           props.postTab("Rentals Tab");
         }}
    >
      <div className="tab-content">
        { props.rentals
          .filter(rental => rental.address.city.indexOf(props.rentalFilter) > -1)
          .map(rental => {
            return (
              <Rental key={rental.id}
                      city={rental.address.city}
                      street={rental.address.street}
                      zip={rental.address.zipCode}
              />
            );
          }
        )}
      </div>
    </Tab>

    <Tab icon={<MapsPersonPin />}
         label="Users"
         value="Users Tab"
         onClick={() => {
           props.updateTab("Users Tab");
           props.postTab("Users Tab");
         }}
    >
      <div className="tab-content">
        { props.users
          .filter(user => user.firstName.indexOf(props.userFilter) > -1)
          .map(user => {
            return (
              <User key={user.id}
                    firstName={user.firstName}
                    lastName={user.surname}
                    email={user.email}
              />
            );
          }
        )}
      </div>
    </Tab>

  </Tabs>
);

Viewport.propTypes = {
  tabValue: PropTypes.string,
  updateTab: PropTypes.func,
  postTab: PropTypes.func,
  rentals: PropTypes.array,
  rentalFilter: PropTypes.string,
  users: PropTypes.array,
  userFilter: PropTypes.string,
};

export default Viewport;
