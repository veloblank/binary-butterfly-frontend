import SportsPropsAdapter from '../adapters/SportsPropsAdapter.js';

class SportsPropBuilder {
  constructor() {
    this.state = {
      props: []
    };
    this.adapter = new SportsPropsAdapter();
    this.fetchAndBindPropstoState();

  }

  //TODO: THIS IS WHERE THE APP IS HANGING UP MAKING FETCH REQUESTS
  async fetchAndBindPropstoState() {
    let props = await this.adapter.getCurrentProps();
    this.state.props.push(props);
  }
}

export default SportsPropBuilder;