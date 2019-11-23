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
}

export default SportsProp;