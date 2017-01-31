import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from '../components/item.js';

class List extends Component {

	listItem(item, i) {
		return (
			<Item index={i} key={i} item={item} />
		)
	}

	render() {
		return (
			<div className='list-box'>
				{this.props.items.map(this.listItem)}
			</div>
		);
	}
}

function mapStateToProps({items}) {
	return {items}
}

export default connect(mapStateToProps)(List);