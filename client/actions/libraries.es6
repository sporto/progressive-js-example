import Marty      from 'marty';

var Dispatcher = Marty.dispatcher.getDefault();
var LibrariesConstants = Marty.createConstants(['REPLACE_LIBRARIES', 'ADD_LIBRARIES']);

class LibrariesActionCreators extends Marty.ActionCreators {

	replaceLibraries(libraries) {
		this.dispatch(LibrariesConstants.REPLACE_LIBRARIES, libraries);
	}

	addLibraries(libraries) {
		this.dispatch(LibrariesConstants.ADD_LIBRARIES, libraries);
	}
}
