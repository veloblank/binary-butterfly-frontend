function fetchUserPicks(app) {
  let user_id = app.state.user_id;
  return fetch(`http://localhost:3050/api/v1/user_picks?user_id=${user_id}`)
    .then(response => response.json())
    .then(json => console.log(json));
}

function createUserPicks(app, e, side) {
  return fetch('http://localhost:3050/api/v1/user_picks', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accepts": "application/json"
    },
    body: JSON.stringify({
      user_id: app.state.user_id,
      contest_prop_id: 1,
      side: side,
      confidence: e.target.value
    })
  })
    .then(response => response.json())
    .then(json => console.log(json));
}



export function handleLogin() {
  let formData = {
    username: "veloblank",
    email: "veloblank@gmail.com"
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch('http://localhost:3050/api/v1/login', configObj)
    .then(response => response.json())
    .then(json => {
      this.state.user = "User";
      signOutBtn.style.display = "block";
      createActBtn.style.display = "none";
      signInBtn.style.display = "none";
    });
}

export default function fetchSportsProps() {
  return fetch('http://localhost:3050/api/v1/current')
    .then(response => response.json());
}

export {
  fetchUserPicks,
  createUserPicks
};