class SportsPropAdapter {
  constructor() {
    this.baseUrl = 'http://localhost:3050/api/v1/';
  }

  getCurrentProps() {
    return fetch(baseUrl + "current").then(resp => resp.json())
  }
}