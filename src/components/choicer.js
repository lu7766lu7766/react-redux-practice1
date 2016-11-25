import React, { Component } from 'react';
import { connect } from "react-redux";

class Choicer extends Component {
	render() {
		const {student_id, onChange} = this.props;
		const choice_list = ["",1,2,3,4,5,6,7,8,9];
		//console.log(student_id+"^^");
		return (
			<select onChange={(e) => onChange(e.target.value)} value={student_id}>
				{
					choice_list.map( x => <option value={x}>{x==""?"All":x}</option>)
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
		onChange: (id) => {
			// console.log(id) 
			if (id == "") 
			{
				dispatch({ type: "ALL" })
			}
			else {
				dispatch({ type: "FILTER", id })
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Choicer);