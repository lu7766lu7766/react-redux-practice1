//import _ from "lodash";

let students = [
	{ id: 1, name: "A", birth: "1988-06-06", sex: "0" },
	{ id: 2, name: "B", birth: "1988-07-07", sex: "1" },
	{ id: 3, name: "C", birth: "1988-08-08", sex: "0" },
	{ id: 4, name: "D", birth: "1988-09-09", sex: "1" },
	{ id: 5, name: "E", birth: "1988-10-10", sex: "0" },
	{ id: 6, name: "F", birth: "1988-11-11", sex: "1" }
];

export default (state = students, action) => {
	switch (action.type) {
		case 'ALL':
			//return _.clone(students);
			return students;
			//return Object.assign({}, students);
		case 'FILTER':
			return students.filter(x => x.id == action.id);
		default:
			return state;
			//return Object.assign({}, state);
	}
}