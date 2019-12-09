import SportsPropsAdapter from '../adapters/SportsPropsAdapter.js';

class SportsPropBuilder {
  constructor() {
    this.adapter = new SportsPropsAdapter();
    this.props = this.fetchAndBindPropstoState();

  }

  //TODO: THIS IS WHERE THE APP IS HANGING UP MAKING FETCH REQUESTS
  fetchAndBindPropstoState() {
    this.adapter.getCurrentProps(this.props);
  }
}

export default SportsPropBuilder;