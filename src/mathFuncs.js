function displayPoints() {
  let sliders = [...document.getElementsByClassName('slider')];
  let numOfPicksMade;
  let numOfProps = sliders.length;
  let filtered = sliders.filter(slider => {
    return (parseFloat(slider.value) != 0);
  });
  numOfPicksMade = filtered.length;
  document.querySelector('#daily-total-picks-made').innerHTML = numOfPicksMade;
  document.querySelector('#helper').style.display = "inline";
  document.querySelector('#daily-total-picks').innerHTML = numOfProps;
}

export { displayPoints };