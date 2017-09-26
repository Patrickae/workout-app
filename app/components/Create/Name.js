import React from 'react'
import { Link } from 'react-router-dom'

class Name extends React.Component {
	constructor() {
		super()
		this.state = {
			workoutName: '',
			workoutDescrip: '',
		}

		this.handleChange = this.handleChange.bind(this)
		this.handleSubmit = this.handleSubmit.bind(this)
	}

	handleChange() {
		this.setState({ workoutName: this.refs.wktName.value })
		this.setState({ workoutDescrip: this.refs.wktDescrp.value })
		this.props.addNameAndDescription(this.refs.wktName.value, this.refs.wktDescrp.value)
	}

	handleSubmit() {
		event.preventDefault()
		this.props.save()
	}

	render() {
		return (
			<div className="container">
				<form>
					<div className="form-group">
						<h3>Name your Workout</h3>
						<input
							type="text"
							value={this.state.workoutName}
							placeholder="Workout Name..."
							className="form-control"
							ref="wktName"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<h3>Short description of your workout</h3>
						<textarea
							type="text"
							placeholder="Description..."
							value={this.state.workoutDescrip}
							className="form-control"
							ref="wktDescrp"
							onChange={this.handleChange}
							required
						/>
					</div>
				</form>
				<div className="row">
					<div className="col-xs-4" />
					<div className="col-xs-4">
						<Link to="/create/done">
							<i className="fa fa-check-circle fa-5x" onClick={this.handleSubmit} />
						</Link>
					</div>
					<div className="col-xs-4" />
				</div>
			</div>
		)
	}
}

export default Name
