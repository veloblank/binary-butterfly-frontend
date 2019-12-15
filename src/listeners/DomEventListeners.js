import * as eventHandlers from '../eventHandlers.js';

function addListenerToSignOutBtn(app) {
  let signOutBtn = document.getElementById('signout-button');
  let signInBtn = document.getElementById('open-signin-account-modal');
  signOutBtn.addEventListener('click', e => {
    e.preventDefault();
    eventHandlers.onSignOutClick(app);

    if (app.state.user_id) {
      signOutBtn.style.display = "block";
      signInBtn.style.display = "none";

    } else {
      signOutBtn.style.display = "none";
      signInBtn.style.display = "inline";
    }
  });
}

export {
  addListenerToSignOutBtn,
};