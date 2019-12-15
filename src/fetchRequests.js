import fetchErrorHandler from './errorHandler.js';
import { closeModal } from './listeners/modalListeners.js'

const fetchUser = e => {
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

  fetch("http://localhost:3000/api/v1/users", configObj)
    .then(response => response.json())
    .then(data => {
      if (!data.message) {
        closeModal();
        console.log("Successfully logged in!");
        console.log(data);
        fetchUserPicks(data)
      } else {
        fetchErrorHandler(data)
      }
    })
}

const fetchUserPicks = async (data) => {
  let user_id = data.user.id;
  console.log(user_id);
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

const changeUserPicks = async (e) => {
  let prop_id = e.target.dataset.id
  let value = e.target.value
  let winningSide, sideConfidence;
  if (value > 0) {
    side = 'home'
    sideConfidence = Math.abs(value)
  } else {
    side = 'away'
    sideConfidence = Math.abs(value)
  }
  let formData = {
    contest_prop_id: prop_id,
    user_id: user,
    side: winningSide,
    confidence: sideConfidence
  }
  console.log(formData)
  // await fetch('http://localhost:3000/api/vi/user_picks', {
  //   method: 'PATCH',
  //   {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify({

  //   })
  // })       
};

export {
  fetchUser,
  fetchUserPicks,
  createUserPicks,
  changeUserPicks
};