import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Payments from './Payments';

class Header extends Component {
	renderContent() {
		switch (this.props.auth) {
			case null:
				return;
			case false:
				return (
					<li><a href='/auth/google'>Login With Google</a></li>
				)
			default:
				return [
					<li key='1'><Payments /></li>,
					<li key='2' style={{ margin: '0  1em' }}>Credits: {this.props.auth.credits}</li>,
					<li key='3'><a href='/api/logout'>Logout</a></li>
				]
		}
	}

	render() {
		return (
			<div>
				<nav class="teal">
					<div className="nav-wrapper">
						<Link
							style={{ margin: '0  1em' }}
							to={this.props.auth ? '/surveys' : '/'}
							className="left brand-logo"
						>
							Survey
						</Link>
						<ul className="right">
							{this.renderContent()}
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}

function mapStateToProps({ auth }) {
	return { auth }
}

export default connect(mapStateToProps)(Header)