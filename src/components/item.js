import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { removeItem } from '../actions/remove_item';
import { addCheckedItem } from '../actions/add_checked_item';

class Item extends Component {
	constructor(props) {
		super(props);
	
		// We need to bind the component to the method
		this.handleRemove = this.handleRemove.bind(this);
		this.checkItem = this.checkItem.bind(this);
	}

	checkItem(event) {
		const checkedItem = event.target.parentElement.getAttribute('data-name');
		this.props.addCheckedItem(checkedItem);
		this.props.removeItem(checkedItem);
	}

	handleRemove(event) {
		const itemName = event.target.parentElement.getAttribute('data-name');
		this.props.removeItem(itemName);
	}

	render() {
		return (
			<div className='item' key={this.props.index} >
				<p data-name={this.props.item} className='item-text'>{this.props.item}</p>
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
	return bindActionCreators({ removeItem, addCheckedItem }, dispatch)
}

// the first argument represents the state (ex mapStateToProps), 
// but this container doesn't care about state, 
// so we pass in null
export default connect(null , mapDispatchToProps)(Item);