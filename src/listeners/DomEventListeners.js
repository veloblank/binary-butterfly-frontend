import * as fetchFuncs from '../fetchRequests.js';

function createAccountModalListeners() {
  let modal = document.getElementById('create-account-modal');
  let openModalBtn = document.getElementById('create-account-button');
  let closeModalBtn = document.getElementById('modal-close-btn');

  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  window.addEventListener('click', clickOutside);


  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function clickOutside(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }
}


function onCreateAccountFormSubmission(app) {
  fetchFuncs.fetchCreateUser(app);
}

function exitModal() {
  document.getElementById('create-account-modal').style.display = "none";
}


export {
  createAccountModalListeners,
  onCreateAccountFormSubmission
};