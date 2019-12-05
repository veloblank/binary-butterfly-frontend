import * as eventHandlers from '../eventHandlers.js';

function addListenerToSignOutBtn(app) {
  let signOutBtn = document.getElementById('signout-button');
  signOutBtn.addEventListener('click', (e) => {
    e.preventDefault();
    eventHandlers.onSignOutClick(app);

    if (app.state.user) {
      signOutBtn.style.display = "block";
      createActBtn.style.display = "none";
      signInBtn.style.display = "none";

    } else {
      signOutBtn.style.display = "none";
      createActBtn.style.display = "block";
      signInBtn.style.display = "inline";
    }
  });
}

export {
  addListenerToSignOutBtn,
};