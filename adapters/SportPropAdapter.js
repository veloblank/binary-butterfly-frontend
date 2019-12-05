class SportsPropAdapter {
  constructor() {
    this.baseUrl = "http://localhost:3050/api/v1/";
  }

  getCurrentProps() {
    return fetch(this.baseUrl + "current").then(resp => resp.json()
      .then(data => console.log(data)));
  }
}

export default SportsPropAdapter;
