import Marty              from 'marty';
import log                from 'loglevel';

class LibrariesAPI extends Marty.HttpStateSource {

	fetchLibraries(keyword) {
		log.info('LibrariesAPI.fetchLibraries', keyword);

		var url = "https://rubygems.org/api/v1/search.json?query=" + keyword;

		if (typeof window === 'undefined') {

		} else {
			url = 'http://cors.maxogden.com/' + url;
		}

		return this.get(url);
	}

}

export default Marty.register(LibrariesAPI);
