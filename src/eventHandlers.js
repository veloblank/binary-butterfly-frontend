const onSignInClick = (app) => {
  app.state.user = "veloblank";
};

const onSignOutClick = (app) => {
  app.state.user = "";
};

export {
  onSignInClick,
  onSignOutClick
}
