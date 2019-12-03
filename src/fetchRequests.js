const fetchCreateUser = (app) => {
  let submittedForm = document.getElementById('create-account-form');
  let formData = {
    email: submittedForm.elements[0].value,
    username: submittedForm.elements[1].value
  };

  let configObj = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(formData)
  };

  fetch('http://localhost:3050/api/v1/users', configObj)
    .then(response => response.json())
    .then(data => {
      if (data.status !== 201) {
        let parent = document.createElement('ul');
        let li = "";
        data.message.errors.forEach(error => {
          document.getElementById('account-errors').innerHTML = "";
          li += `<li>${error}</li>`;
          parent.innerHTML = li;
          return document.getElementById('account-errors').append(parent);
        });
      } else {
        app.state.user = data.user;
        exitModal();
      }
    });
};

const fetchUserPicks = () => {
  let user_id = this.state.user_id;
  return fetch(`http://localhost:3050/api/v1/user_picks?user_id=${user_id}`)
    .then(response => response.json())
    .then(json => console.log(json));
};

const createUserPicks = () => {
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
};


const handleLogin = () => {
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
};

const fetchSportsProps = () => {
  return fetch('http://localhost:3050/api/v1/current')
    .then(response => response.json());
};

export {
  fetchCreateUser,
  fetchUserPicks,
  createUserPicks,
  handleLogin,
  fetchSportsProps
};