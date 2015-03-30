import Marty          from 'marty';
import librariesQuery from '../queries/libraries.es6';
import librariesConstants from '../config/libraries_constants.es6';
import libraryQueries   from '../queries/libraries.es6';
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
			// onKeywordChanged:   librariesConstants.ON_KEYWORD_CHANGED,
			onLibrariesFetched: librariesConstants.ON_LIBRARIES_FETCHED,
			// addLibraries:       LibraryConstants.ADD_LIBRARIES
		}
	}

	onKeywordChanged(keyword) {
		this.state['keyword'] = keyword;
		// trigger a refresh of libraries
		libraryQueries.getLibraries(keyword);
		this.hasChanged();
	}

	onLibrariesFetched(keyword, libs) {
		console.log(this.displayName, 'onLibrariesFetched', keyword, libs);
		var collection = this.state.collection;
		collection[keyword] = libs;
		this.state['collection'] = collection;
		this.hasChanged();
	}

	// addLibraries(libs) {
	// 	var collection = this.state['collection'];
	// 	this.state['collection'] = collection.push(libs);
	// }

	fetchLibraries(keyword) {
		console.log('LibrariesStore.fetchLibraries', keyword);
		if (keyword == null) throw new Error('keyword required');

		// var self = this;
		// if (is.not.string(keyword)) throw new Error('keyword required');

		return this.fetch({
			id: keyword,
			locally: function () {
				console.log('fetchLibraries.fetch.locally', keyword)
				// console.log('collection', this.state.collection)
				// console.log('collection', self.state.collection)
				// console.log('collection[keyword]', self.state.collection[keyword])
				// throw new Error('ddkdkdk')
				// return void(0);
				return this.state.collection[keyword];
			},
			remotely: function () {
				console.log('fetchLibraries.fetch.remotely', keyword)
				// console.log(librariesQuery)
				// console.log(librariesQuery.fetchLibraries)
				return librariesQuery.fetchLibraries(keyword);
			}
		});
	}
}

module.exports = Marty.register(LibrariesStore);