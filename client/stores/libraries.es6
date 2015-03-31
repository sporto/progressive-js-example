import Marty              from 'marty';
import librariesQuery     from '../queries/libraries.es6';
import librariesConstants from '../config/libraries_constants.es6';
import libraryQueries     from '../queries/libraries.es6';
// import is               from 'is_js';

// var imm   = require('imm');

class LibrariesStore extends Marty.Store {
	constructor(options) {
		super(options);

		this.state = {
			keyword:    '',
			collection: {}
		};

		this.handlers = {
			onLibrariesFetched: librariesConstants.ON_LIBRARIES_FETCHED,
		}
	}

	onKeywordChanged(keyword) {
		this.state['keyword'] = keyword;
		// trigger a refresh of libraries
		libraryQueries.getLibraries(keyword);
		this.hasChanged();
	}

	onLibrariesFetched(keyword, libs) {
		// console.log(this.displayName, 'onLibrariesFetched', keyword, libs);
		var collection = this.state.collection;
		collection[keyword] = libs;
		this.state['collection'] = collection;
		this.hasChanged();
	}

	fetchLibraries(keyword) {
		// console.log('LibrariesStore.fetchLibraries', keyword);
		if (keyword == null) throw new Error('keyword required');

		return this.fetch({
			id: keyword,
			locally: function () {
				// console.log('fetchLibraries.fetch.locally', keyword)
				return this.state.collection[keyword];
			},
			remotely: function () {
				// console.log('fetchLibraries.fetch.remotely', keyword)
				return librariesQuery.for(this).fetchLibraries(keyword);
			}
		});
	}
}

module.exports = Marty.register(LibrariesStore);