import Marty from 'marty';

class LibrariesAPI extends Marty.HttpStateSource {

	fetchLibraries(keyword) {
		console.log('LibrariesAPI.fetchLibraries', keyword);

		var url = "https://rubygems.org/api/v1/search.json?query=" + keyword;
		url = 'http://cors.maxogden.com/' + url;
			// console.log('url', url);
		return this.get(url);
	}

}

export default new LibrariesAPI();
// export default Marty.register(LibrariesAPI);
