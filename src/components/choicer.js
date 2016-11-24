import React, { Component } from 'react';
import { connect } from "react-redux";

class choicer extends Component {
	render() {
		const {onChoiceChange} = this.props;
		return (
			<select onChange={(e) => onChoiceChange(e.target.value)}>
				<option value="0">All</option>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
				<option value="5">5</option>
				<option value="6">6</option>
				<option value="7">7</option>
				<option value="8">8</option>
				<option value="9">9</option>
			</select>
		);
	}
}

let mapStateToProps = state => {
	return {};
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

export default connect(mapStateToProps, mapDispatchToProps)(choicer);