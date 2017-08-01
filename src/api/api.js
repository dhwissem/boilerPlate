export default class api {

  static getRentals() {
    return fetch('http://localhost:3004/rentals')
      .then(response => response.json());
  }

  static getUsers() {
    return fetch('http://localhost:3004/users')
      .then(response => response.json());
  }

  static postTabs(data) {
    let today = new Date();
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let currentDate = date + ' ' + time;

    return fetch('http://localhost:3004/tabs',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify({ type: data, date: currentDate })
      });
  }
}


