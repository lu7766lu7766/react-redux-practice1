import React, { Component } from 'react';
import { connect } from "react-redux";

class Choicer extends Component {
	render() {
		const {student_id, onChoiceChange} = this.props;
		const choice_list = ["",1,2,3,4,5,6,7,8,9];
		console.log(student_id+"^^");
		return (
			<select onChange={(e) => onChoiceChange(e.target.value)}>
				{
					choice_list.map( x => <option value={x} selected={x==student_id}>{x==""?"All":x}</option>)
				}
			</select>
		);
	}
}

const mapStateToProps = state => {
	return { student_id : state.students.student_id };
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChoiceChange: (id) => {
			// console.log(id)
			if (id == "0") {
				dispatch({ type: "ALL" })
			}
			else {
				dispatch({ type: "FILTER", id })
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Choicer);