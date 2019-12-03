class SportsProp {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.prop_date = obj.date;
    this.week_id = obj.contest_board_id;
    this.away_team = obj.away_team;
    this.away_team_won = obj.away_team_won;
    this.home_team = obj.home_team;
    this.home_team_won = obj.home_team_won;
    this.start_time = obj.start_time;
    this.prop_locked = obj.locked;
    this.prop_scored = obj.scored;
  }

  renderHtml() {
    let propElement = document.createElement('div');
    propElement.classList.add('sports-prop', 'locked-false');
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