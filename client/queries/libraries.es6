import Marty              from 'marty';
import librariesAPI       from '../services/libraries_api.es6';
import librariesConstants from '../config/libraries_constants.es6';
import log                from 'loglevel';

class LibrariesQueries extends Marty.Queries {

	fetchLibraries(keyword) {
		log.info('LibrariesQueries.fetchLibraries', keyword)

		return librariesAPI.for(this).fetchLibraries(keyword)
			.then(res => this.dispatch(librariesConstants.ON_LIBRARIES_FETCHED, keyword, res.body))
			.catch(err => this.dispatch(librariesConstants.ON_LIBRARIES_FETCH_FAILED, keyword, err));
		}

}

export default Marty.register(LibrariesQueries);
