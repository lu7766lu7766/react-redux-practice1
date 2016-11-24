import React, { Component } from 'react';
import { connect } from "react-redux";

const tbody_title = ["學號", "姓名", "生日", "性別"]

class StudentsList extends Component {
	render() {
		const { students } = this.props;
		return (
			<table className="table">
				<thead>
					<tr>
						{tbody_title.map(x => <td>{x}</td>)}
					</tr>
				</thead>
				<tbody>
					{
						students.map(x => (
							<tr>
								<td>{x.id}</td>
								<td>{x.name}</td>
								<td>{x.birth}</td>
								<td>{x.sex == "0" ? "female" : "male"}</td>
							</tr>
						))
					}
				</tbody>
			</table>
		);
	}
}

let mapStateToProps = state => {
	return { students: state.students };
}

export default connect(mapStateToProps)(StudentsList);

/**/