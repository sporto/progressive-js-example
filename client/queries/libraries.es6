import Marty from 'marty';
import librariesAPI from '../services/libraries_api.es6';
import librariesConstants from '../config/libraries_constants.es6';

class LibrariesQueries extends Marty.Queries {

	fetchLibraries(keyword) {
		// console.log('LibrariesQueries.fetchLibraries', keyword)

		return librariesAPI.for(this).fetchLibraries(keyword)
			.then(res => this.dispatch(librariesConstants.ON_LIBRARIES_FETCHED, keyword, res.body))
			.catch(err => this.dispatch(librariesConstants.ON_LIBRARIES_FETCH_FAILED, keyword, err));
		}

}

export default Marty.register(LibrariesQueries);
