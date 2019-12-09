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
  fetchAndBindPropstoState() {
    let props = this.adapter.getCurrentProps();
    this.state.props.push(props);
  }
}

export default SportsPropBuilder;