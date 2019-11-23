import fetchSportsProps from './sportsPropsData.js';
import SportsProp from './SportsProp.js';
import Slider from './Slider.js';

window.load = buildSportsProps();

function buildSportsProps() {
  let prop;
  let slider;
  fetchSportsProps()
    .then(json => {
      for (let obj of json) {
        prop = new SportsProp(obj);
        prop.render();
        slider = new Slider(prop);
      }
    });
}

function addSliderListeners() {
  let sliders = document.getElementsByClassName("slider-container");
  let output = document.getElementById("output");
  slider.oninput = function () {
    console.log(this.value)
    //output.innerHTML = this.value;
  }
}

addEventListeners();

function addEventListeners() {
  let modal = document.getElementById('signin-modal');
  let openModalBtn = document.getElementById('signin-button');
  let closeModalBtn = document.getElementById('modal-close-btn');


  openModalBtn.addEventListener('click', openModal);
  closeModalBtn.addEventListener('click', closeModal);
  //Outside 'click' event of modal

  window.addEventListener('click', clickOutside);

  function openModal() {
    modal.style.display = "block";
  }

  function closeModal() {
    modal.style.display = "none";
  }

  function clickOutside(e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  }

  let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]');
  for (let button of radioButtons) {
    button.addEventListener('click', function () {
      this.parentNode.parentNode.attributes['data-view'] = this.value;
      let views = document.querySelectorAll('.views');
      let view = document.getElementById(this.value);
      views.forEach(div => {
        div.style.display = "none";
      });
      view.style.display = "block";
    });
  }
}










