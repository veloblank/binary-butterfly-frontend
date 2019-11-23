import fetchSportsProps from './sportsPropsData.js';
import SportsProp from './SportsProp.js';

window.load = buildSportsProps();

function buildSportsProps() {
  let prop;
  fetchSportsProps()
    .then(json => {
      for (let obj of json) {
        prop = new SportsProp(obj);
        let propElement = document.createElement('div');
        propElement.classList.add('sports-prop');
        propElement.innerHTML =
          `<h2>${prop.title}</h2>
          <div class="competitors">
            <div class="away_team">
              <p>${prop.away_team}</p>
            </div>
            <div class="home_team">
              <p>${prop.home_team}</p>
            </div>
            </div>
            <div class="slider" id="prop-${prop.id}-slider"
              <form>
                <input type="range" value="50" name="points" min="0" max="100">
              </form>
            </div>
          `
        let insertionNode = document.getElementById('picks');
        console.log(propElement)
        insertionNode.appendChild(propElement)
      }
    });
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

  let radioButtons = document.querySelectorAll('input[type=radio][name="nav-toggle"]')
  for (let button of radioButtons) {
    button.addEventListener('click', function () {
      this.parentNode.parentNode.attributes['data-view'] = this.value
      let views = document.querySelectorAll('.views')
      let view = document.getElementById(this.value)
      views.forEach(div => {
        div.style.display = "none"
      });
      view.style.display = "block"
    })
  }
}









