class SportsProp {
  constructor(obj) {
    this.id = obj.id;
    this.week_id = obj.contest_board_id;
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
      `<div class="prop-title">
        <p>${this.title}</p>
      </div>
      <div class="competitors">
        <div class="away_team">
          <p><strong>${this.away_team}</strong></p>
        </div>
        <div class="home_team">
          <p><strong>${this.home_team}</strong></p>
        </div>
      </div>
      <div class="slidercontainer" id="slider-container-${this.id}">
        
      </div>
      <div class="lock-time">
        Lock Time: ${this.start_time}
      </div>`;

    document.getElementById('picks').appendChild(propElement);
  }
}

export default SportsProp;