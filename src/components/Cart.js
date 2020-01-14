import React, { Component } from 'react'
import { connect } from 'react-redux'
import Notify from './Notify'
import CartItem from './CartItem'

class Cart extends Component {
	render() {
		let { items } = this.props;
		console.log('items Cart.js: ', items)

		return (
			<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
				<div className="panel panel-danger">
					<div className="panel-heading">
						<h1 className="panel-title">Your Cart</h1>
					</div>
					<div className="panel-body">
						<table className="table">
							<thead>
								<tr>
									<th width="4%">#</th>
									<th>Pokemon</th>
									<th width="15%">Price</th>
									<th width="4%">Quantity</th>
									<th width="20%">Subtotal</th>
									<th width="25%">Action</th>
								</tr>
							</thead>
							{this.showElementBody(items)}
							{this.showElementFooter(items)}
						</table>
					</div>
				</div>
				<Notify />
			</div>

		)
	}

	showElementBody(items) {
		let xhtml = null

		if (items && items.length > 0) {
			xhtml = items.map((item, index) => {
				return <CartItem item={item} index={index} key={index} />
			})
		}

		return <tbody id="my-cart-body">{xhtml}</tbody>
	}

	showElementFooter(items) {
		let xhtml = <tr><th colSpan={6}>Empty product in your cart</th></tr>

		if (items && items.length > 0) {
			xhtml = <tr>
				<td colSpan={4}>There are <b>5</b> items in your shopping cart.</td>
				<td colSpan={2} className="total-price text-left">12 USD</td>
			</tr>
		}
		return <tfoot id="my-cart-footer">{xhtml}</tfoot>
	}
}

const mapStateToProps = state => {
	console.log('state cart.js : ', state)
	return {
		items: state.carts
	}
}
export default connect(mapStateToProps, null)(Cart)