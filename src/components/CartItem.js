import React, { Component } from 'react'
import { connect } from 'react-redux'

import Helpers from './../libs/helpers'
import { actRemoveProduct, actUpdateProduct, actChangeNotify } from './../actions/index'
import * as config from './../constants/Config';

class CartItem extends Component {
	constructor(props) {
		super(props)

		this.state = {
			value: 0
		}
	}

	handleChange = (event) => {
		const target = event.target
		const value = target.type === 'checkbox' ? target.checked : target.value
		const name = target.name

		this.setState({
			[name]: value
		})
	}

	handleDelete = (product) => {
		this.props.deleteCartItem(product)
		this.props.changeNotify(config.NOTI_ACT_DELETE)
	}

	handleUpdate = (product, quantity) => {
		this.props.updateCartItem(product, +quantity)
		this.props.changeNotify(config.NOTI_ACT_UPDATE)
	}

	render() {
		let { cartItem, index } = this.props
		let { product } = cartItem
		let quantity = (this.state.value !== 0) ? this.state.value : cartItem.quantity

		return (
			<tr>
				<th scope="row">{index + 1}</th>
				<td>{product.name}</td>
				<td>{Helpers.toCurrency(product.price, '$', 'left')}</td>
				<td>
					<input name="value" type="number" value={quantity} onChange={this.handleChange} min={1}/>
				</td>
				<td><strong>{Helpers.toCurrency(product.price * quantity, '$', 'left')}</strong></td>
				<td>
					<a onClick={() => this.handleUpdate(product, quantity)} className="label label-info update-cart-item" type="button"	data-product>Update</a>
					<a onClick={() => this.handleDelete(product)} className="label label-danger delete-cart-item" type="button" data-product>Delete</a>
				</td>
			</tr>
		)
	}
}

const mapDispatchToProps = (dispatch, ownProps) => {
	return {
		deleteCartItem: (product) => {
			dispatch(actRemoveProduct(product))
		},

		updateCartItem: (product, quantity) => {
			dispatch(actUpdateProduct(product, quantity))
		},

		changeNotify: (value) => {
			dispatch(actChangeNotify(value))
		},

	}
}

export default connect(null, mapDispatchToProps)(CartItem)