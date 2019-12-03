import * as fetchFuncs from '../fetchRequests.js';
import displayPoints from '../mathFuncs.js';

function addListenersToAccountBtns(app) {
  let signInContainer = document.getElementById('signin-container');
  let signInBtn = document.getElementById('signin-button');
  let signOutBtn = document.getElementById('signout-button');
  let createActBtn = document.getElementById('create-account-button');

  signInBtn.addEventListener('click', (e) => {
    e.preventDefault();
    eventHandlers.onSignInClick();
  });

  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    eventHandlers.onSignOutClick(app);
  });

  if (app.state.user) {
    signOutBtn.style.display = "block";
    createActBtn.style.display = "none";
    signInBtn.style.display = "none";

  } else {
    signOutBtn.style.display = "none";
    createActBtn.style.display = "block";
    signInBtn.style.display = "inline";
  }
}

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

function addListenersToSliders() {
  let sliders = document.getElementsByClassName('slider');
  for (let slider of sliders) {
    slider.addEventListener('mouseup', () => {
      displayPoints();
      //TODO: Make patch req to server that shows the user has made this pick
    });

    slider.addEventListener('input', e => {
      if (e.target.value > 0) {
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = e.target.value * 10 / 10;
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = Math.round((e.target.value * 30) / 10) * (-1);
      } else {
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = e.target.value * (-10) / 10;
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = Math.round((e.target.value * 30) / 10);
      }
    })
  }
}

function exitModal() {
  document.getElementById('create-account-modal').style.display = "none";
}


export {
  addListenersToAccountBtns,
  createAccountModalListeners,
  onCreateAccountFormSubmission,
  addListenersToSliders
};