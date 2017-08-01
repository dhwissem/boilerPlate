import api from '../../api/api';

function receiveRentals(json) {
  return {
    type: 'RECEIVE_RENTALS',
    payload: json
  };
}

function receiveUsers(json) {
  return {
    type: 'RECEIVE_USERS',
    payload: json
  }
}

export function updateTab(tab) {
  return {
    type: 'UPDATE-TAB',
    payload: tab
  }
}

export function fetchRentals() {
  return dispatch => {
    return api.getRentals()
      .then(json => dispatch(receiveRentals(json)));
  };
}

export function fetchUsers() {
  return dispatch => {
    return api.getUsers()
      .then(json => dispatch(receiveUsers(json)));
  };
}

