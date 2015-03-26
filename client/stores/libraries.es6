import Marty      from 'marty';
// var imm   = require('imm');

export default class LibrariesStore extends Marty.Store {
	constructor(options) {
		super(options);
		this.state = {collection: []};

		this.handlers = {
			replaceLibraries: Constants.REPLACE_LIBRARIES,
			addLibraries:     Constants.ADD_LIBRARIES
		}
	}

	replaceLibraries(libs) {
		this.state['collection'] = libs;
		this.hasChanged();
	}

	addLibraries(libs) {
		var collection = this.state['collection'];
		this.state['collection'] = collection.push(libs);
	}
}