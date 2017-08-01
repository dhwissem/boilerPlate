import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';

import './User.less';

const User = ({ firstName, lastName, email }) => (
  <div className="user">
    <div className="user-list-item">
      First Name: {firstName}
    </div>
    <Divider />
    <div className="user-list-item">
      Last Name: {lastName}
    </div>
    <Divider />
    <div className="user-list-item">
      Email: {email}
    </div>
  </div>
);

User.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  email: PropTypes.string
};

export default User;
