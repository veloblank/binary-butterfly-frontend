const onSignInClick = (app) => {
  let modal = document.getElementById('signin-modal');
  modal.style.display = "block";
};

const onSignOutClick = (app) => {
  app.state.user = "";
};

export {
  onSignInClick,
  onSignOutClick
}
