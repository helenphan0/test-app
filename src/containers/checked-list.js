import React, { Component } from 'react';
import { connect } from 'react-redux';

import CheckedItem from '../components/checked-item';

class CheckedList extends Component {

	listCheckedItem(item, i) {
		return (
			<CheckedItem index={i} key={i} item={item} />
		)
	}

	render() {
		return (
			<div className='checklist-box'>
				{this.props.checkItems.map(this.listCheckedItem)}
			</div>
		)
	}
}

function mapStateToProps({checkItems}) {
	return {checkItems}
}

export default connect(mapStateToProps)(CheckedList);