export default class api {

  static getRentals(){
    return fetch('http://localhost:3004/rentals')
      .then(response => response.json())
  }
}


