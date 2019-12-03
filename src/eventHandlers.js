const onSignInClick = () => {
  let modal = document.getElementById('signin-modal');
  modal.style.display = "block";
};

const onCreateActClick = () => {
  let modal = document.getElementById('create-account-modal');
  console.log(modal)
  modal.style.display = "block";
}

const onSignOutClick = (app) => {
  console.log(app.state.user)
};

export {
  onSignInClick,
  onCreateActClick,
  onSignOutClick
};
