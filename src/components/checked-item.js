import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeCheckedItem } from '../actions/remove_checked_item';
import { addItem } from '../actions/add_item';

class CheckedItem extends Component {
	constructor(props) {
		super(props);
	
		// We need to bind the component to the method
		this.handleRemove = this.handleRemove.bind(this);
		this.checkItem = this.checkItem.bind(this);
	}

	checkItem(event) {
		const uncheckedItem = event.target.parentElement.getAttribute('data-name');
		this.props.removeCheckedItem(uncheckedItem);
		this.props.addItem(uncheckedItem);
	}

	handleRemove(event) {
		const itemName = event.target.parentElement.getAttribute('data-name');
		this.props.removeCheckedItem(itemName);
	}

	render() {
		return (
			<div className='item' key={this.props.index} >
				<p data-name={this.props.item} className='item-text checked'>{this.props.item}</p>
				<div className='control'>
					<span onClick={this.checkItem} 
						data-name={this.props.item} 
						className='control-button check-button'>
							<i className="fa fa-check-square-o" aria-hidden="true"></i>
					</span>  
					<span onClick={this.handleRemove} 
						data-name={this.props.item} 
						className='control-button delete-button'>
							<i className="fa fa-window-close-o" aria-hidden="true"></i>
					</span>
				</div>
			</div>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({ removeCheckedItem, addItem }, dispatch)
}

// the first argument represents the state (ex mapStateToProps), 
// but this container doesn't care about state, 
// so we pass in null
export default connect(null , mapDispatchToProps)(CheckedItem);