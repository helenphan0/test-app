import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addItem } from '../actions/add_item';

class Input extends Component {
	constructor(props) {
		super(props);
		
		this.state = { input: ''};

		// We need to bind the component to the method
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);

	}

	onInputChange(event) {

		// if a callback refers to 'this', you need to bind this in the function
		this.setState({ input: event.target.value })
	}

	onFormSubmit(event) {
		event.preventDefault();
		const word = this.state.input.trim();

		if (!word || this.props.items.indexOf(word) !== -1) {
			return false
		}

		this.props.addItem(word);
		this.setState({ input: '' });
	}

	render() {
		return (
			<div>
				<form onSubmit={this.onFormSubmit} >
					<input type='text' value={this.state.input} onChange={this.onInputChange} />
					<button type='submit'>Add</button>
				</form>
			</div>
		);
	}
}

function mapStateToProps({items}) {
	return {items}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ addItem }, dispatch)
}

export default connect(mapStateToProps , mapDispatchToProps)(Input);