import SportsPropsAdapter from '../adapters/SportsPropsAdapter.js';

class SportsPropBuilder {
  constructor() {
    this.adapter = new SportsPropsAdapter();
    this.props = this.fetchAndBindPropstoState();
  }

  fetchAndBindPropstoState() {
    this.adapter.getCurrentProps();
  }
}

export default SportsPropBuilder;