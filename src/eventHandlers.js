const onSignInClick = (app) => {
  let modal = document.getElementById('signin-modal');
  modal.style.display = "block";
  //app.state.user = "veloblank";
};

const onSignOutClick = (app) => {
  app.state.user = "";
};

export {
  onSignInClick,
  onSignOutClick
}
