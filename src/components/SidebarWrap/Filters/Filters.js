import React from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

import './Filters.less';

const Filters = ({updateRentalFilter, updateUserFilter, getRentals, getUsers}) => (
  <div className="filters" >
    <div className="filter-input" >
      <TextField
        hintText="Search by City"
        onChange={(e) => { updateRentalFilter(e.target.value);}}
      />

      <TextField
        hintText="Search By User"
        onChange={(e) => { updateUserFilter(e.target.value);}}
      />

    </div>
    <RaisedButton
      label="Load Data"
      primary={true}
      style={{ margin: 10 }}
      fullWidth={true}
      onClick={() => {
        getRentals();
        getUsers();
      }}
    />
  </div>
);

Filters.propTypes = {
  updateRentalFilter: PropTypes.func,
  updateUserFilter: PropTypes.func,
  getRentals: PropTypes.func,
  getUsers: PropTypes.func
};

export default Filters;
