import * as fetchRequests from '../fetchRequests.js'

function addModalListeners() {
  //Click 'Sign in to Play!'
  document
    .getElementById("open-signin-account-modal")
    .addEventListener("click", e => {
      let modal = document.getElementById("signin-account-modal");
      modal.style.display = "block";
    });

  //Click 'X' inside modal  
  document
    .getElementById("signin-modal-close-btn")
    .addEventListener("click", () => {
      let modal = document.getElementById("signin-account-modal");
      modal.style.display = "none";
    });

  //Click submit in Modal
  document
    .getElementById('signin-account-form')
    .addEventListener("submit", e => {
      e.preventDefault();
      fetchRequests.fetchCreateUser(e);
      //alert("You are signed in!")
    });


  //Click outside of Modal  
  window.addEventListener("click", e => {
    let signinModal = document.getElementById("signin-account-modal");
    if (signinModal === e.target) {
      e.target.style.display = "none";
    }
  });

}

function closeModal() {
  let modal = document.getElementById("signin-account-modal");
  modal.style.display = "none";
  let signOutBtn = document.getElementById('signout-button')
  signOutBtn.classList.add('signed-in')
  let signInBtn = document.getElementById('open-signin-account-modal')
  signInBtn.classList.add('signed-in')
}

export { addModalListeners, closeModal };