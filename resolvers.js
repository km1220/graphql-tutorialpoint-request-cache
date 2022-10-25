const db = require('./db')

const Query = {
	students: () => db.students.list(),
	getTime: () => {
		const today = new Date();
		var h = today.getHours();
		var m = today.getMinutes();
		var s = today.getSeconds();
		return `${h}:${m}:${s}`;
	}
}

module.exports = { Query }