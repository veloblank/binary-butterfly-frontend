window.load = addEventListeners()

function addEventListeners() {
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

let props = fetch('http://localhost:3000/api/v1/contest_weeks/1/contest_props')
  .then(response => response.json())
  .then(json => console.log(json))







