import { displayPoints } from '../mathFuncs.js'
import { changeUserPicks } from '../fetchRequests.js'

function addSliderListeners() {
  let sliders = document.getElementsByClassName("slider");
  for (let slider of sliders) {
    slider.addEventListener("input", e => {
      if (e.target.value > 0) {
        document.getElementById(
          `prop-${e.target.dataset.id}-home-values`
        ).innerHTML = (e.target.value * 10) / 10;
        document.getElementById(
          `prop-${e.target.dataset.id}-away-values`
        ).innerHTML = Math.round((e.target.value * 30) / 10) * -1;
      } else {
        document.getElementById(
          `prop-${e.target.dataset.id}-away-values`
        ).innerHTML = (e.target.value * -10) / 10;
        document.getElementById(
          `prop-${e.target.dataset.id}-home-values`
        ).innerHTML = Math.round((e.target.value * 30) / 10);
      }
    })

    slider.addEventListener("mouseup", e => {
      displayPoints();
      changeUserPicks();
    });
  };


}

export { addSliderListeners };