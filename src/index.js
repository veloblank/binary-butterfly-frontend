import App from './App.js';

window.load = new App();

function fetchUserPicks() {
  let user_id = this.state.user_id;
  return fetch(`http://localhost:3050/api/v1/user_picks?user_id=${user_id}`)
    .then(response => response.json())
    .then(json => console.log(json));
}

function createUserPicks() {
  return fetch('http://localhost:3050/api/v1/user_picks', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({
      user_id: 100,
      contest_prop_id: 1,
      side: "away",
      confidence: 17
    })
  })
    .then(response => response.json())
    .then(json => console.log(json));
}
