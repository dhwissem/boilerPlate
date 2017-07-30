export default class GitHubAPI {

  static getAllRepos(language) {
    let today = new Date();
    let lastWeek = (new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay()-7)).toISOString().slice(0, 10);

    let languageQuery = language ? "+language:" + language : "";

    return fetch(`https://api.github.com/search/repositories?q=created:>=` + lastWeek + languageQuery + `&sort=stars&order=desc&per_page=10`)
      .then(response => response.json())
      .then(json => json.items);
  }

  static getContributors(reposUser){
    return fetch(`https://api.github.com/repos/` + reposUser + `/contributors`)
      .then(response => response.json())
  }
}


