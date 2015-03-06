import { Actions } from 'flummox';

export default class extends Actions {

  addLibraries(data) {
    return {
      content: data
    };
  }

}