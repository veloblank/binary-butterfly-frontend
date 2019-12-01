export function apiRequestLogin() {
  return alert("You've been signed in!")
  // let formData = {
  //   username: "veloblank"
  // }

  // let configObj = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Accept": "application/json"
  //   },
  //   body: JSON.stringify(formData)
  // };

  // fetch('http://localhost:3050/api/v1/login', configObj)
  //   .then(response => response.json())
  //   .then(json => {
  //     this.state.user = "User"
  //     signOutBtn.style.display = "block";
  //     createActBtn.style.display = "none";
  //     signInBtn.style.display = "none";
  //   });
}

export default function fetchSportsProps() {
  return fetch('http://localhost:3050/api/v1/current')
    .then(response => response.json());
}

