import Marty      from 'marty';
import librariesConstants from '../config/libraries_constants.es6';

var Dispatcher = Marty.dispatcher.getDefault();

class LibrariesActionCreators extends Marty.ActionCreators {

	changeKeyword(keyword) {
		this.dispatch(librariesConstants.CHANGE_KEYWORD, keyword);
	}

	replaceLibraries(libraries) {
		this.dispatch(librariesConstants.REPLACE_LIBRARIES, libraries);
	}

	// addLibraries(libraries) {
	// 	this.dispatch(librariesConstants.ADD_LIBRARIES, libraries);
	// }
}

export default Marty.register(LibrariesActionCreators);