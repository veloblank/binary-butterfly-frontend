import fetchSportsProps from './sportsPropsData.js';
import SportsProp from './SportsProp.js';
import Slider from './Slider.js';

window.onload = buildSportsProps;

function buildSportsProps() {
  fetchSportsProps()
    .then(arr => {
      for (let obj of arr) {
        let prop = new SportsProp(obj);
        prop.render();
        let slider = new Slider(prop);
        slider.render();
      }
    });
};

setTimeout(() => {
  addEventListeners();
}, 300);

function addEventListeners() {
  let sliders = document.getElementsByClassName('slider');
  for (let slider of sliders) {
    slider.addEventListener('change', e => {
      if (e.target.value > 0) {
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = e.target.value * 10 / 10;
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = Math.round((e.target.value * 30) / 10) * (-1);
      } else {
        document.getElementById(`prop-${e.target.dataset.id}-away-values`).innerHTML = e.target.value * (-10) / 10;
        document.getElementById(`prop-${e.target.dataset.id}-home-values`).innerHTML = Math.round((e.target.value * 30) / 10);
      }
    });
  }

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
