import GithubApi from '../../api/GitHubAPI';

function receiveRepos(json) {
  return {
    type: 'RECEIVE_POSTS',
    repos: json
  };
}

function receiveContributors(data) {
  return {
    type: 'RECEIVE_CONTRIBUTORS',
    contributors: data
  }
}

export function fetchRepos(language) {
  return dispatch => {
    return GithubApi.getAllRepos(language)
      .then(json => dispatch(receiveRepos(json)));
  };
}

export function fetchContributors(reposUser) {
  return dispatch => {
    return GithubApi.getContributors(reposUser)
      .then(data => dispatch(receiveContributors(data)))
  };
}

