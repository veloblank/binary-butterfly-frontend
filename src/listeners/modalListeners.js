function closeModal() {
  let modal = document.getElementById("signin-account-modal");
  modal.style.display = "none";
  let signOutBtn = document.getElementById('signout-button')
  signOutBtn.classList.add('signed-in')
  let signInBtn = document.getElementById('open-signin-account-modal')
  signInBtn.classList.add('signed-in')
}

export {
  closeModal
};