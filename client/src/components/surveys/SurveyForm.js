import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import SurveyField from './SurveyField'
import validateEmails from '../../utils/validateEmails';
import _ from 'lodash'
import { Link } from 'react-router-dom';
import formFields from './formFields';

class SurveyForm extends Component {
	renderFields() {
		return _.map(formFields, ({ label, name }) => (
			<Field
				key={name}
				label={label}
				type='text'
				name={name}
				component={SurveyField}
			/>
		))
	}

	render() {
		return (
			<div>
				<form onSubmit={this.props.handleSubmit(this.props.onSurveySyubmit)}>
					{this.renderFields()}
				<Link to="/surveys" className="red btn-flat white-text">
					Cancel
				</Link>
				<button type="submit" className="teal btn-flat right white-text">
					Next
					<i className="material-icons right">done</i>
				</button>
				</form>
			</div >
		)
	}
}

function validate(values) {
	const errors = {}

	errors.recipients = validateEmails(values.recipients || '');

	_.each(formFields, ({ name }) => {
		if (!values[name]) {
			errors[name] = 'You must provide a value';
		}
	});

	return errors
}

export default reduxForm({
	validate,
	form: 'surveyForm',
	destroyOnUnmount: false,
})(SurveyForm);