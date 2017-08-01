import React from 'react';
import Divider from 'material-ui/Divider';
import './Rental.less';


const User = ({ city, street, zip }) => (
  <div className="rental">
    <div className="user-list-item">
      City: {city}
    </div>
    <Divider />
    <div className="user-list-item">
      Street: {street}
    </div>
    <Divider />
    <div className="user-list-item">
      Zip Code: {zip}
    </div>
  </div>
);

export default User;
