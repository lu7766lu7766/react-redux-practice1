import React, {Component} from 'react';
import { connect } from "react-redux";
class Editor extends Component {
	render() {
		const {student_id, onChange} = this.props;
		return (
			<input type="text" value={student_id} onChange={(e) => onChange(e.target.value)}/>
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
			if(id == "")
			{
				dispatch({ type: "ALL" })
			}
			else
			{
				dispatch({ type: "FILTER", id })
			}
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);