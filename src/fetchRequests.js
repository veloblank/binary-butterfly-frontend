import fetchErrorHandler from './errorHandler.js';
import { closeModal } from './listeners/modalListeners.js'

const fetchCreateUser = async (e) => {
  let formData = {
    email: e.target[0].value,
    username: e.target[1].value
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  await fetch("http://localhost:3000/api/v1/users", configObj)
    .then(response => response.json())
    .then(data => {
      if (!data.message) {
        closeModal();
        fetchUserPicks(data)
      } else {
        fetchErrorHandler(data)
      }
    })
}

const fetchUserPicks = async (data) => {
  let user_id = data.id
  await fetch(`http://localhost:3000/api/v1/user_picks?user_id=${user_id}`)
    .then(response => response.json())
    .then(json => console.log(json));
};

const createUserPicks = async () => {
  await fetch("http://localhost:3000/api/v1/user_picks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
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
};

export {
  fetchCreateUser,
  fetchUserPicks,
  createUserPicks,
};