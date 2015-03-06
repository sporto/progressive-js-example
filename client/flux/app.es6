import { Flux } from 'flummox';
import LibraryActions from '../actions/libraryActions.es6';
import LibrariesStore from '../stores/libraries.es6';

export default class extends Flux {

  constructor() {
    super();

    this.createActions('libraries', LibraryActions);
    this.createStore('libraries', LibrariesStore, this);
  }

}