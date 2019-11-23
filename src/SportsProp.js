class SportsProp {
  constructor(obj) {
    this.id = obj.id;
    this.week_id = obj.contest_week_id;
    this.title = obj.title;
    this.away_team = obj.away_team;
    this.home_team = obj.home_team;
    this.start_time = obj.start_time;
    this.user_selection = 50;
  }

  render() {
    let propElement = document.createElement('div');
    propElement.classList.add('sports-prop');
    propElement.innerHTML =
      `<h2>${this.title}</h2>
      <div class="competitors">
        <div class="away_team">
          <p>${this.away_team}</p>
        </div>
        <div class="home_team">
          <p>${this.home_team}</p>
        </div>
      </div>
      <div class="slidercontainer" id="slider-container-${this.id}">
        
      </div>`;
    document.getElementById('picks').appendChild(propElement);
  }
}

export default SportsProp;