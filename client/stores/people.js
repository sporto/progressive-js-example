var Marty = require('marty');

module.exports = Marty.createStore({
	id: 'People',
	handlers: {
		replacePeople: Constants.REPLACE_PEOPLE,
		addPeople:     Constants.ADD_PEOPLE
	},
	getInitialState: function () {
		return {}
	},
	replacePeople: function () {
		
	},
		addPeople: function () {}
});
