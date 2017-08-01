import React from 'react';
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

export default User;
