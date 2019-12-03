const onSignInClick = () => {
  let modal = document.getElementById('signin-modal');
  modal.style.display = "block";
};

const onCreateActClick = () => {
  let modal = document.getElementById('create-account-modal');
  modal.style.display = "block";
}

const onSignOutClick = (app) => {
  //TODO: Need to build this to empty app.state
  console.log(app.state.user)
};

export {
  onSignInClick,
  onCreateActClick,
  onSignOutClick
};
