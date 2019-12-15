const onSignInClick = () => {
  let modal = document.getElementById('signin-modal');
  modal.style.display = "block";
};

const onCreateActClick = () => {
  let modal = document.getElementById('create-account-modal');
  modal.style.display = "block";
};

const onSignOutClick = (app) => {
  app.state.user_id = '';
};

export {
  onSignInClick,
  onCreateActClick,
  onSignOutClick
};