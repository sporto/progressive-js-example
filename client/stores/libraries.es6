import Marty              from 'marty';
import librariesConstants from '../config/libraries_constants.es6';
import libraryQueries     from '../queries/libraries.es6';
import log                from 'loglevel';
import imm                from 'imm';

class LibrariesStore extends Marty.Store {
	constructor(options) {
		super(options);

		this.id = 'LibrariesStore';

		this.state = {
			keyword:    '',
			collection: {}
		};

		this.handlers = {
			onLibrariesFetched:       librariesConstants.ON_LIBRARIES_FETCHED,
			// onLibrariesFetchedFailed: librariesConstants.ON_LIBRARIES_FETCH_FAILED
		}
	}

	onLibrariesFetched(keyword, libs) {
		log.info('LibrariesStore.onLibrariesFetched', keyword, libs);
		this.state.collection[keyword] = imm(libs);
		this.hasChanged();
	}

	onLibrariesFetchedFailed(keyword, error) {
		log.error('onLibrariesFetchedFailed', error)
	}

	fetchLibraries(keyword) {
		log.info('LibrariesStore.fetchLibraries', keyword);
		if (keyword == null) throw new Error('keyword required');

		return this.fetch({
			id:      keyword,
			locally: function () {
				log.info('fetchLibraries.fetch.locally', keyword)
				log.info('collection', this.state.collection[keyword]);
				return this.state.collection[keyword];
			},
			remotely: function () {
				log.info('fetchLibraries.fetch.remotely', keyword)
				return libraryQueries.for(this).fetchLibraries(keyword);
			}
		});
	}
}

module.exports = Marty.register(LibrariesStore);