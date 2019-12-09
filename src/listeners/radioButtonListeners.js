function addRadioListeners() {
  let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
  radioButtons = [...radioButtons];
  radioButtons.forEach(button => button.addEventListener('click', () => {
    let views = document.querySelectorAll(".views");
    let view = document.getElementById(button.value);
    views.forEach(div => {
      div.style.display = "none";
      view.style.display = "block";
    });
  }));
}

export default addRadioListeners;