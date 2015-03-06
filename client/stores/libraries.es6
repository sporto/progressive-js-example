import { Store } from 'flummox';

export default class extends Store {

  constructor(flux) {
    super(); // Don't forget this step

    let librariesActions = flux.getActionIds('libraries');
    this.register(librariesActions.addLibraries, this.handleAdd);

    this.state = {
      libraries: [],
    };
  }

  handleAdd(libraries) {
    this.setState({
      libraries: libraries
    });
  }

}