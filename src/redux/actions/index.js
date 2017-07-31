import api from '../../api/api';

function receiveRentals(json) {
  return {
    type: 'RECEIVE_RENTALS',
    payload: json
  };
}

function receiveUsers(data) {
  return {
    type: 'RECEIVE_USERS',
    contributors: data
  }
}

export function fetchRentals() {
  return dispatch => {
    return api.getRentals()
      .then(json => dispatch(receiveRentals(json)));
  };
}

// export function fetchContributors(reposUser) {
//   return dispatch => {
//     return GithubApi.getContributors(reposUser)
//       .then(data => dispatch(receiveContributors(data)))
//   };
// }

