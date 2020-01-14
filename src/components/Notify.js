import React, { Component } from 'react'
import { connect } from 'react-redux'

class Notify extends Component {
	render() {
		const { notify } = this.props
		return (
			<div className="alert alert-success" role="alert" id="mnotification">
				{/* Updated <b>ivysaur</b> */}
				{notify}
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		notify: state.notify
	}
}

export default connect(mapStateToProps, null)(Notify)